const express = require("express");
const port = 1003;

const app = express();

let studets= [
    {"id":"1", "name":"kartik", "subject":"ReactjS"},
    {"id":"2", "name":"Khushal", "subject":"NodejS"},
    {"id":"3", "name":"Rutul", "subject":"ExpressJS"},
    {"id":"4", "name":"Rahul", "subject":"NextJs"},
];

app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("index",{studets});
});

app.listen(port,(err) => {
    err ? console.log(err) : console.log("Server Started on port :" + port);
});