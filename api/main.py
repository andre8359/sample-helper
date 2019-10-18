import os
import subprocess
import json

from flask import Flask
from flask import send_file
from flask import flash

UPLOAD_FOLDER = '/tmp/'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def index():
    return 'test'


def convert_file(file, input_type, output_type):
    pass


@app.route('/convertVideo', methods=['GET', 'POST'])
def convert_video():
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)

    file = request.files['file']
    # if user does not select file, browser also
    # submit an empty part without filename
    if file.filename == '':
        flash('No selected file')
        return redirect(request.url)

    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return request.body



if __name__ == '__main__':
    if 'ENVIRONMENT' in os.environ and os.environ['ENVIRONMENT'] == 'production':
        app.run(port=80, host='0.0.0.0')
    else:
        app.run(port=5000, host='0.0.0.0', debug=True)
