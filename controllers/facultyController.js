const Faculty = require('../models/Faculty');

// Get all faculty members
exports.getAllFaculty = async (req, res) => {
    try {
        const facultyMembers = await Faculty.find();
        res.status(200).json(facultyMembers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty members', error });
    }
};

// Get a single faculty member by ID
exports.getFacultyById = async (req, res) => {
    try {
        const facultyMember = await Faculty.findById(req.params.id);
        if (!facultyMember) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json(facultyMember);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty member', error });
    }
};

// Create a new faculty member
exports.createFaculty = async (req, res) => {
    const newFaculty = new Faculty(req.body);
    try {
        const savedFaculty = await newFaculty.save();
        res.status(201).json(savedFaculty);
    } catch (error) {
        res.status(400).json({ message: 'Error creating faculty member', error });
    }
};

// Update an existing faculty member
exports.updateFaculty = async (req, res) => {
    try {
        const updatedFaculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFaculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json(updatedFaculty);
    } catch (error) {
        res.status(400).json({ message: 'Error updating faculty member', error });
    }
};

// Delete a faculty member
exports.deleteFaculty = async (req, res) => {
    try {
        const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!deletedFaculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json({ message: 'Faculty member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting faculty member', error });
    }
};
