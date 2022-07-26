const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: [true, "Number Exist"],
    },
    Email: {
        type: String,
        required: true
    },
    Disease: {
        type: String
    },
    Time: {
        type: String
    }
});

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;
