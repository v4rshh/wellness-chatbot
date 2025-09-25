import json
import random
import pickle
import numpy as np
from flask import Flask,request,jsonify

import nltk
from nltk.stem import WordNetLemmatizer

from tensorflow.keras.models import load_model

#Initialize Flask app
app=Flask(__name__)

#Load Model,DataFiles
try:
    lemmatizer = WordNetLemmatizer()
    intents = json.loads(open('intents.json').read())
    words = pickle.load(open('words.pkl', 'rb'))
    classes = pickle.load(open('classes.pkl', 'rb'))
    model = load_model('chatbot_model.h5')
except FileNotFoundError:
    print("Error: Model or data files not found. Please run training.py first.")
    exit()

#Helper Functions
def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    
    return_list = []
    for r in results:
        return_list.append({'intent': classes[r[0]], 'probability': str(r[1])})
    
    if not return_list:
        return_list.append({'intent': 'default', 'probability': '1.0'})
        
    return return_list

def get_response(intents_list, intents_json):
    tag=intents_list[0]['intent']
    list_of_intents=intents_json['intents']
    result="I'm sorry,I don't understand,Ask me anything related to depression,stress management,motivation,meditation."#Default fallback response
    for i in list_of_intents:
        if i['tag']==tag:
            result=random.choice(i['responses'])
            break
    return result

#API Endpoint
@app.route('/chat',methods=['POST'])
def chat():
    user_message=request.json.get('message')
    if not user_message:
        return jsonify({"error":"No message provided"}), 400
    
    ints=predict_class(user_message)
    response_text=get_response(ints, intents)
    return jsonify({"response": response_text})

#Main Execution
if __name__=="__main__":
    print("Chatbot API is running.")
    app.run(host='0.0.0.0', port=5000)