const express = require("express");
const body_parser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(body_parser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.listen(7000, function() {
    console.log("server running on port 7000");
})