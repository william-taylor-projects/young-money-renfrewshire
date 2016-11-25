
const config = require('./aws-config.js');
const amazon = require('aws-sdk');
const express = require('express');
const router = express.Router();

amazon.config.update(config.getConfig());
const dynamoDB = new amazon.DynamoDB({
    region: "eu-west-1",
    apiVersion: '2012-08-10'
});

const getDeals = action => {
    const data = {
      TableName: "YMR-Deals",
      AttributesToGet: ["uniqueID", "description", "image", "title", "link", "price"]
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
        TableName: 'YMR-Deals',
        Item:  {
           
        }
    };

    dynamoDB.putItem(params, function(err, data) {
        if (err) {
            console.log(err); 
            res.json({'deals': [] });
        } else {
            getDeals(deals => res.json({'deals': deals}));
        } 
    });
    
})

router.post('/delete', (req, res) => {
    const params = {
        TableName: 'YMR-Deals',
        Key: {

        }
    };

    dynamoDB.deleteItem(params, (err, data) => {
        if (err) {
            console.log(err);
            res.json({ 'news': []});
        } else {
            getDeals(deals => res.json({'deals': deals}));
        } 
    });
})

router.get('/get', (req, res) => {
    getDeals(deals => res.json({'deals': deals}));
})

module.exports = router;