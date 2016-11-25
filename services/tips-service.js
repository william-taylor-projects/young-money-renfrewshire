
const amazon = require('aws-sdk');
const express = require('express');
const router = express.Router();

const tips = [];
const tipOne = { 
    title: 'Write Your Own Budget', 
    text: `Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.`,
    img: 'http://placehold.it/350x350'
};

for(var i = 0; i < 9; i++) {
    tips.push(tipOne);
}

router.get('/get', (req, res) => {
    res.json({ 'tips': tips });
})

module.exports = router;