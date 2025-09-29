import json
import random
from flask import Flask, request, jsonify
from transformers import pipeline

class TransformerChatbot:
    def __init__(self, knowledge_base_path):
        self.knowledge_base = self.load_knowledge_base(knowledge_base_path)
        self.candidate_labels = list(self.knowledge_base.keys())
        print("Loading Transformer model...")
        self.classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
        print("Model loaded successfully!")

    def load_knowledge_base(self, file_path: str) -> dict:
        with open(file_path, 'r') as f:
            return json.load(f)

    def get_intent(self, user_input: str) -> str:
        result = self.classifier(user_input, self.candidate_labels)
        if result['scores'][0] > 0.7:
            return result['labels'][0]
        else:
            return 'fallback'

    def get_response(self, intent: str) -> dict:
        if intent in self.knowledge_base:
            content_item = random.choice(self.knowledge_base[intent]['content'])
            return {
                "intent": self.knowledge_base[intent]['intent_name'],
                "title": content_item.get('title', ''),
                "response": content_item.get('steps') or content_item.get('text', '')
            }
        else:
            return self.get_response('fallback')

app = Flask(__name__)

print("Initializing chatbot...")
bot = TransformerChatbot(knowledge_base_path='knowledge_base.json')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    intent = bot.get_intent(user_message)
    response_data = bot.get_response(intent)
    return jsonify(response_data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)