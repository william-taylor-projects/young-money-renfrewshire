
const express = require('express');
const router = express.Router();

const deals = [];

for(var i = 0; i < 23; i++) {
  deals.push({
    img: 'http://placehold.it/180x180',
    title: 'Breakfast',
    author: 'jill111',
  });
}

router.get('/get', (req, res) => {
    res.json({'deals': deals});
})

module.exports = router;