# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

# save this as app.py
import sys
import cv2
import os
import shutil
import flask
from flask import Flask, render_template
from tensorflow import keras
from keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator 

app = Flask(__name__,template_folder=".")

@app.route("/upload")
def upload_file():
    return render_template('index.html')

@app.route("/galaxy",methods=['GET', 'POST'])
def upload_files():
    f_name = ''
    if flask.request.method == 'POST':
        path = os.path.join('./images/test_case')
        shutil.rmtree(path)
        os.mkdir(path)
        f = flask.request.files['imagefile']
        f.save(os.path.join('./images/test_case',f.filename))
        f_name+=f.filename
    MODEL_PATH = './model.hdf5'
    model = load_model(MODEL_PATH)
    test_datagenerator = ImageDataGenerator(rescale=1/255)
    test_generator = test_datagenerator.flow_from_directory(
    directory="./images",
    classes=['test_case'],
    class_mode=None,
    color_mode="rgb",
    batch_size=1,
    target_size=(299, 299),
    seed=123,
    shuffle=False)
    predictions = model.predict(
    test_generator,
    steps=test_generator.n/test_generator.batch_size,
    verbose=1)
    sys.path.insert(0, './utils')
    import utils
    gClass = utils.classify(list(predictions[0]))
    print(gClass)
    arr = [gClass,f_name]
    return render_template('result.html',value=arr) 
@app.route("/exoplanet", methods=['GET', 'POST'])
def exoplanet():
    MODEL_PATH = './MLP.h5'
    data = flask.request.form
    data = data.to_dict(flat=False)
    test = []
    for i in data.items():
        if i[0]=='dispositionScore':
            pass
        else:
            test.append(float(i[1][0]))
    model = load_model(MODEL_PATH)
    y_pred1 = float(model.predict([test]))
    arr=[]
    arr.append(y_pred1)
    return render_template('exoresult.html', value=arr)

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=5000)
