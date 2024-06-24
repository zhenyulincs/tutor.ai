from flask import Flask, request, jsonify
from openai import OpenAI
import os
import config  # This will load the appropriate .env file

# Initialize Flask app
app = Flask(__name__)

# Set OpenAI API key from environment variable
client = OpenAI(
    # Defaults to os.environ.get("OPENAI_API_KEY")
)

@app.route('/api/ai', methods=['POST'])
def ai_endpoint():
    data = request.json
    if not data or 'input' not in data:
        return jsonify({'error': 'Invalid input'}), 400

    user_input = data['input']

    try:
        # Call the OpenAI API with the user's input
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  # Use "gpt-3.5-turbo" or the appropriate engine
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_input}
                ],
            max_tokens=150  # Adjust max tokens as needed
        )
        ai_response = response.choices[0].message.content.strip()
        # Return the response
        return jsonify({'response': ai_response}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=int(os.getenv('PORT', 5000)), debug=os.getenv('DEBUG', 'False') == 'True',use_reloader=True)
