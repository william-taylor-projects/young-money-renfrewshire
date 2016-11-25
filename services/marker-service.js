
const amazon = require('aws-sdk');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const markers =  JSON.parse(fs.readFileSync('./markers.json')).markers;

router.get('/get', (req, res) => {
    res.json({ 'markers': markers });
});

module.exports = router;