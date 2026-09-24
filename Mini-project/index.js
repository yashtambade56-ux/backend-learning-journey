const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const app = express();
const PORT = 5000;


mongoose.connect('mongodb://localhost:27017/Employee')

app.get('/Employee', (req, res) => {
});
