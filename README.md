# Wellness-Chatbot

A simple, rule-based chatbot designed to provide support and information on mental wellness topics. Built with Python and Flask, this project utilizes a knowledge base to provide answers to user questions conversationally.

---

## ✨ Features

* **Conversational Interface:** Ask questions in plain English and get helpful responses.
* **Knowledge-Based:** The chatbot's intelligence comes from a `intents.json` file, making it easy to extend and modify its expertise.
* **Simple Web Interface:** A basic frontend allows users to interact with the chatbot in a web browser.
* **Lightweight Backend:** Uses the Flask web framework to serve the chatbot's logic.

---

## 📂 Project Structure

The repository is organized as follows:

```
wellness-chatbot/
│
├── backend/
│   └── (Backend logic files)
│
├── chatbot/
│   └── (Chatbot-specific scripts and files)
│
├── frontend
│   
│
├── .gitignore
├── LICENSE
├── app.py                  # Main Flask application file
└── intents.json     # The "brain" of the chatbot
```

---
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Python 3 installed on your system. You can download it from [python.org](https://www.python.org/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/v4rshh/wellness-chatbot.git](https://github.com/v4rshh/wellness-chatbot.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd wellness-chatbot
    ```

3.  **Install the required dependencies:**
    *(Note: It is recommended to create a virtual environment first)*
    ```bash
    # Assuming dependencies are listed in a requirements.txt file.
    # If not, you may need to install Flask and other libraries manually.
     pip install -r requirements.txt
    ```

### Running the Application

1.  **Start the Flask server:**
    ```bash
    python app.py
    ```

2.  **Open your web browser** and go to `http://127.0.0.1:5000` (or the address shown in your terminal). You should now be able to interact with the chatbot.

---

## 🛠️ How It Works

This chatbot uses a simple pattern-matching approach.

1.  The user sends a message through the web interface.
2.  The Flask backend receives the message.
3.  The `app.py` script loads the `intents.json` file.
4.  It searches the knowledge base for a question that matches the user's input.
5.  If a match is found, it returns the corresponding answer. If not, it provides a default "I don't know"(fallback) response.
