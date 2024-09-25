const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { Email, FullName, Username, Password } = req.body;

    // Input validation
    if (!Email || !FullName || !Username || !Password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Hash the password with a salt round of 10 for better security
        const hashedPassword = bcrypt.hashSync(Password, 10);

        // Insert user into the database
        const sql = 'INSERT INTO Users (Email, FullName, Username, Password) VALUES (?, ?, ?, ?)';
        db.query(sql, [Email, FullName, Username, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;

    // Input validation
    if (!Email || !Password) {
        return res.status(400).json({ message: 'Email and Password are required' });
    }

    try {
        const sql = 'SELECT * FROM Users WHERE Email = ?';
        db.query(sql, [Email], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            if (results.length === 0) {
                return res.status(400).json({ message: 'User not found' });
            }

            const user = results[0];
            const isPasswordValid = bcrypt.compareSync(Password, user.Password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid Password' });
            }

            // Create JWT token
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });

            res.status(200).json({ message: 'Login successful', token });
        });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err });
    }
});

module.exports = router;
