from flask import Flask, request, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def main():
	return render_template('main.html')

@app.route('/creationChat')
def creationChat():
	return render_template('creationChat.html')

app.run(port=8080, debug=True)