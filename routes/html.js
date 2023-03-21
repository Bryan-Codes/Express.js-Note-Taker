const path = require('path');
const app = require('express').Router();

// Return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
})

// If no matching route is found default to home
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = app;