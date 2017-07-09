
const config = require(`${__dirname}/aws-config.js`);
const amazon = require('aws-sdk');
const express = require('express');
const router = express.Router();

amazon.config.update(config.getConfig());
const dynamoDB = new amazon.DynamoDB({
    region: "eu-west-1",
    apiVersion: '2012-08-10'
});

const getNews = action => {
    const data = {
      TableName: "YMR-News",
      AttributesToGet: ["uniqueID", "date", "body", "title"]
    };

    dynamoDB.scan(data, (err, news) => {
      if (err) {
        console.log(err);
        action([]);
      } else {
        action(news.Items); 
      }
    });
}

router.post('/post', (req, res) => {
    const params = {
        TableName: 'YMR-News',
        Item:  {
            uniqueID: { N : String(Date.now()) },
            title: { S: req.body.news.title },
            date: { N: String(req.body.news.date) },
            body: { S: req.body.news.message }
        }
    };

    dynamoDB.putItem(params, function(err, data) {
        if (err) {
            console.log(err); 
        }

        getNews(news => res.json({ 'news': news }));
    });
})

router.post('/delete', (req, res) => {
    const params = {
        TableName: 'YMR-News',
        Key: {
            uniqueID: { N: req.body.news.uniqueID.N },
            date: { N: req.body.news.date.N }
        }
    };

    dynamoDB.deleteItem(params, (err, data) => {
        if (err) {
            console.log(err);
        } 

        getNews(news => res.json({ 'news': news }));
    });
});

router.get('/get', (req, res) => {
    getNews(news => res.json({'news': news }));
});

module.exports = router;