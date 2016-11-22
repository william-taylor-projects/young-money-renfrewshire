
const express = require('express');
const router = express.Router();

const dummyText = `Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.
Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.`;

const news = [
    { title: 'We have a title', date: Date.now()+1, message: dummyText},
    { title: 'We have a title', date: Date.now()+2, message: dummyText},
    { title: 'We have a title', date: Date.now()+3, message: dummyText},
    { title: 'We have a title', date: Date.now()+4, message: dummyText}
];

router.post('/post', (req, res) => {
    console.log('news-service /post', req.body);

    if(req.body.news) {
        news.push(req.body.news);
    }

    res.json({'news': news });
})

router.post('/delete', (req, res) => {
    console.log('news-service /delete', req.body);
    const date = req.body.news.date;

    for(let i = 0; i < news.length; ++i) {
        if(news[i].date == date) {
            news.splice(i, 1);
            break;
        }
    }

    res.json({'news': news });
});

router.get('/get', (req, res) => {
    res.json({'news': news });
})

module.exports = router;