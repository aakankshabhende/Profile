from flask import Flask

app = Flask(__name__)

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Aakanksha",
        "about" :"Hello! I'm a Software Engineer Intern at Red Hat and a GitHub Campus Expert."
    }

    return response_body

if __name__ == "__main__":
    app.run(debug=True)