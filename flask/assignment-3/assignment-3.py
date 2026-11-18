from flask import Flask,request
import json


app = Flask(__name__)

@app.route('/add')
def add():
    en = request.args.get('en')
    fi = request.args.get('fi')


    file = open("../dictionary.json", "r")
    dictionary = json.load(file)
    file.close()

    dictionary[en] = fi


    file = open("../dictionary.json", "w")
    json.dump(dictionary,file)
    file.close()


    return {
        "English": en,
        "Finnish": fi
    }


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
