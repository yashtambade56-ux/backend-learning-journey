// day 16  laran mododb

const mongoose = require('mongoose');

const connectDbs = async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017/college')
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDbs