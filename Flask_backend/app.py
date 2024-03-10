
import io
import os
from tkinter import Image
from traceback import format_exc
from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from PIL import Image
import pytesseract


app = Flask(__name__)

CORS(app)
@app.route('/')
def index():
    return 'Hello, world!'


@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


output={}
textvalue=""
pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    image = request.files['image']
    if image.filename == '':
        return jsonify({'error': 'No selected file'})

    # Read the image from the request
    image_stream = io.BytesIO(image.read())
    print(image_stream)
    image_stream.seek(0)
    image_pil = Image.open(image_stream)
    print(image_pil)

    # Perform OCR using Tesseract
    extracted_text = ocr_image(image_pil)

   

    return jsonify({'text': extracted_text})

def ocr_image(image):
    try:
        extracted_text = pytesseract.image_to_string(image)
        print(extracted_text)
        return extracted_text.strip()  # Remove leading/trailing whitespaces
    except Exception as e:
        print(f"OCR Error: {e}")
        return f"Error during OCR: {str(e)}"
@app.route('/img')
def textimg():
    return textvalue

@app.route('/output')
def outputConsole():
    return output
if __name__ == '__main__':
    app.run(debug=True)

