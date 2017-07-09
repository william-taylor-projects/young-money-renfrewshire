
const config = require(`${__dirname}/aws-config.js`);
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

    dynamoDB.scan(data, (err, deals) => {
      if (err) {
        console.log(err);
        action([]);
      } else {
        action(deals.Items); 
      }
    });
}

router.post('/post', (req, res) => {
    const params = {
        TableName: 'YMR-Deals',
        Item:  {
           uniqueID: { N: String(Date.now()) },
           description: { S: req.body.deal.description },
           image: { S: req.body.deal.image },
           price: { N: req.body.deal.price },
           title: { S: req.body.deal.title },
           link: { S: req.body.deal.link }
        }
    };

    dynamoDB.putItem(params, function(err, data) {
        if (err) {
            console.log(err); 
        }

        getDeals(deals => res.json({ 'deals': deals }));
    });
})

router.post('/delete', (req, res) => {
    const params = {
        TableName: 'YMR-Deals',
        Key: {
            uniqueID: { N: req.body.deal.uniqueID.N }
        }
    };

    dynamoDB.deleteItem(params, (err, data) => {
        if (err) {
            console.log(err);
        } 

        getDeals(deals => res.json({ 'deals': deals }));
    });
})

router.get('/get', (req, res) => {
    getDeals(deals => res.json({'deals': deals}));
})

module.exports = router;