import os

from flask import Flask, send_from_directory
from flask import render_template

PROJECT_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
TEMPLATE_DIR = os.path.join(PROJECT_PATH, 'templates')

app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=PROJECT_PATH)


@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)



@app.route('/')
def mfowler():
     return render_template("mfowler_info.html")

if __name__ == '__main__':
    app.run()