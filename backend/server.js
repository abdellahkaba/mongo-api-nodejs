//Appel de la librairie experss
const express = require("express");
const connectDB = require("./config/db.js");

const dotenv = require("dotenv").config();

const port = 5000;

connectDB();
const app = express(0); 

//un middleware qui permet de traiter les données de la request

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//l'appel de notre router
app.use("/post", require("./routes/post.routes.js"));

//Lancer le serveur
app.listen(port, () => console.log("Le serveur a demarré " + port))