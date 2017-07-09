
const amazon = require('aws-sdk');
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/get', (req, res) => {
    const tips = JSON.parse(fs.readFileSync(`${__dirname}/../json/tips.json`)).tips;
    res.json({ 'tips': tips });
})

module.exports = router;