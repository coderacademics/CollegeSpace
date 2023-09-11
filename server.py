from flask import Flask, render_template, request, jsonify
from main import get_response

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("base.html")


@app.route("/get")
def get_bot_response():
    usertext = request.args.get('msg')
    response = get_response(usertext)
    return str(response)


if __name__ == "__main__":
    app.run(debug=True)
