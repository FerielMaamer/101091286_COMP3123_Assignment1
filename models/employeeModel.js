const { Int32 } = require('bson');
const mongoose = require('mongoose');
const { double } = require('webidl-conversions');

const employeeSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    salary: Number,

})

module.exports = mongoose.model("employee", employeeSchema);