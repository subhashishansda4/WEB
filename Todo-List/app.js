const express = require("express");
const body_parser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let work_items = [];

app.set("view engine", "ejs");
app.use(body_parser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date.get_day();

    res.render("list", {list_title: day, new_items: items});
})

app.post("/", function(req, res) {
    let item = req.body.new_item

    if(req.body.list === "Work") {
        work_items.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function(req, res) {
    res.render("list", {list_title: "Work List", new_items: work_items});
})

app.listen(2000, function() {
    console.log("Server is running on port 2000");
})