// day 17

const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    rollno: {type: String},
    batch: {type: String}
}, {
    collection: "students"
});

const Students = mongoose.model("Students", StudentsSchema);

module.exports = Students;