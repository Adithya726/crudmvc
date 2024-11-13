const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true },
    // Add other fields as necessary
});

module.exports = mongoose.model('Faculty', facultySchema);
