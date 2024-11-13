const fs = require('fs');
const multer = require('multer');
const xlsx = require('xlsx');
const Student = require('../models/Student');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Insert data into the database
    Student.insertMany(data)
        .then(() => res.status(200).send('File uploaded and data inserted successfully.'))
        .catch(err => res.status(500).send('Error inserting data: ' + err));
};

exports.upload = upload.single('file');
