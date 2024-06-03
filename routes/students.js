const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// @route   POST /students
// @desc    Add a new student
// @access  Public
router.post('/', async (req, res) => {
    const { name, age, grade, email } = req.body;
    
    // Basic input validation
    if (!name || !age || !grade || !email) {
        return res.status(400).json({ msg: 'Please include all fields' });
    }

    try {
        const newStudent = new Student({
            name,
            age,
            grade,
            email
        });

        const student = await newStudent.save();
        res.json(student);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
