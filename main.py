from flask import Flask, render_template, request, session, flash, redirect, url_for
import pymongo
import certifi


app = Flask(__name__)
app.secret_key = 'InternshipProject'

ca = certifi.where()

#database connection
client = pymongo.MongoClient("mongodb+srv://assignment1:Assignment@internshipproject.wp4835d.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=ca)
db = client.user


#to register the users
@app.route("/register", methods = ['GET', 'POST'])
def register():
    if request.method == 'POST':
        uname = request.form["[--uname--]"]
        uemail = request.form["[--email--]"]
        password = request.form["[--pass--]"]
        if(len(list(db.user.find({"email":uemail}))) > 0):
            flash("User Already Exists")
            return render_template("register.html")
        else:
            db.user.insert_one({"username":uname, "email":uemail, "password":password})
            return redirect(url_for('[--dashboard--]'))    


@app.route("/login", methods = ['GET', 'POST'])
def validate():
    if request.method == 'POST':
        uemail = request.form["[--email--]"]
        password = request.form["[--pass--]"]
        df = db.user.find_one({"email":uemail,"password":password})
        if df is not None:
            return redirect(url_for('[--dashboard--]'))
        else :
            flash("User Not Found")
            return redirect(url_for('login'))
    return redirect(url_for('login'))


@app.route("/")
def index():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug = True)