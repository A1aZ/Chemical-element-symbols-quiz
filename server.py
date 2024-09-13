from flask import Flask, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)  # 这允许跨域请求

@app.route('/time')
def get_time():
    return jsonify({'time': int(time.time())})

@app.route('/start_quiz', methods=['POST'])
def start_quiz():
    return jsonify({'time': int(time.time())})

@app.route('/end_quiz', methods=['POST'])
def end_quiz():
    return jsonify({'time': int(time.time())})

if __name__ == '__main__':
    app.run(debug=True)
