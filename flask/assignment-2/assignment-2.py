from flask import Flask
import json

app = Flask(__name__)

@app.route('/translate/<word>')
def translate(word):
    file = open('../dictionary.json', 'r')
    dictionary = json.load(file)
    file.close()

    translate = dictionary.get(word.lower(), "Translation not fuond")

    return {
        "English": word,
        "Finnish": translate
    }


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
