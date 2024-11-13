const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

// Route to get all faculty members
router.get('/faculty', facultyController.getAllFaculty);

// Route to get a single faculty member by ID
router.get('/faculty/:id', facultyController.getFacultyById);

// Route to create a new faculty member
router.post('/faculty', facultyController.createFaculty);

// Route to update an existing faculty member
router.put('/faculty/:id', facultyController.updateFaculty);

// Route to delete a faculty member
router.delete('/faculty/:id', facultyController.deleteFaculty);

module.exports = router;
