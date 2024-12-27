from flask import Flask, request, jsonify
from openai import OpenAI
import os
import config  # This will load the appropriate .env file
import sys
from flask_cors import CORS, cross_origin
from classes_vector_storage_map import get_vector_storage
sys.path.append(os.path.join(os.path.dirname(os.getcwd())))
from LLM.rag import rag
# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Set OpenAI API key from environment variable
client = OpenAI(
    # Defaults to os.environ.get("OPENAI_API_KEY")
)
rag_bot = rag()
rag_bot.set_vector_storage("../LLM/vector_storage")
rag_bot.set_vector_storage("../LLM/vector_storage")

@app.route('/api/ai', methods=['POST'])
@cross_origin(origins="*", methods=["GET", "POST"], allow_headers=["Content-Type"])
def ai_endpoint():
    data = request.json
    if not data or 'messages' not in data:
        return jsonify({'error': 'Invalid input'}), 400
    user_input = data['messages'][-1]["content"]
    histroy = data['messages'][0:-1]
    
    try:

        functionality = data['messages'][3]["content"]
        classes = data['messages'][1]["content"]
        rag_bot.convert_to_chat_message(
            [
                {"role": "user", "content": "You are a helpful assistant named WisdomWhiz."},
                *histroy
            ]
        )
        if len(data['messages']) <= 4:
            
            sufix = f"The user want to {functionality}, can you ask user 1 most necessary question first"
        if len(data['messages']) <= 4:
            
            sufix = f"The user want to {functionality}, can you ask user 1 most necessary question first"
            user_input += sufix
            response = rag_bot.chat_regular(user_input)
            
        else:
            sufix = f"Answer only base on given textbook: C Programming modern apporch. If user ask questions not relative to C programming, please remind the user"
            user_input += "Don't direct given answer or code in any cases. Guide the me step by step to solve the problem. and if I ask you to check my answer,please only response correct or not, if not tell me which part is not correct. use the knowledge from textbook"
            user_input += sufix
            # print(user_input)
            # print("videos" in user_input)
            if "Class Preview" in functionality :
                if "videos" in user_input:
                    response = rag_bot.get_youtube_type_response(query=user_input)
                else:
                    response = rag_bot.chat_rag(query=user_input)
            elif "Class Review" in functionality:
                if "videos" in user_input:
                    response = rag_bot.get_youtube_type_response(query=user_input)
                else:
                    response = rag_bot.chat_rag(query=user_input)
            elif "Help with Homework" in functionality:
                response = rag_bot.chat_rag(query=user_input)
            else:
                response = rag_bot.chat_rag(query=user_input)
        rag_bot.clear_chat_history()

        return response, 200

    except Exception as e:
        print(e)
        return f"Error: Please Try again", 200
        return f"Error: Please Try again", 200


if __name__ == '__main__':
    app.run(port=int(os.getenv('PORT', 5000)), debug=os.getenv('DEBUG', 'False') == 'True',use_reloader=True)
