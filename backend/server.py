from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def hello():
    return {"message": "Change me by editing backend/server.py"}

if __name__ == '__main__':
    app.run(debug=True)
