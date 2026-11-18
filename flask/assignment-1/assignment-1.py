from flask import Flask

app = Flask(__name__)

@app.route('/prime_number/<int:number>')
def prime(number):
    isPrime = True

    if number < 2:
        isPrime = False

    for i in range(2,number):
        if number % i == 0:
            isPrime = False
            break

    return {
        "Number": number,
        "isprime": isPrime
    }

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=3000, use_reloader=True)








