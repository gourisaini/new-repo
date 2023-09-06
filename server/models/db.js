const mongoose = require("mongoose");

exports.connectDatabase = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/superstore");
        console.log("database Connected")
    } catch (error) {
        console.log(error.message);
    }
}