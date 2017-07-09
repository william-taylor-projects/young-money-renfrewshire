
const config = require(`${__dirname}/aws-config.js`);
const amazon = require('aws-sdk');
const express = require('express');
const router = express.Router();
const fs = require('fs');

amazon.config.update(config.getConfig());
const dynamoDB = new amazon.DynamoDB({
    region: "eu-west-1",
    apiVersion: '2012-08-10'
});

const fetchMarkers = action => {
    const data = {
      TableName: "YMR-Comments",
      AttributesToGet: ["location", "date", "comment", "name"]
    };

    dynamoDB.scan(data, (err, comments) => {
        if (err) {
            console.log(err);
            action([]);
        } else {
            const markers =  JSON.parse(fs.readFileSync(`${__dirname}../json/markers.json`)).markers;
            markers.forEach(marker => {
                marker.comments = marker.comments || [];
                comments.Items.forEach(comment => {
                    if(comment.location.S == marker.name) {
                        marker.comments.push(comment);
                    }
                });
            });

            action(markers);
        }
    });
}

router.post('/delete', (req, res) => {
    const params = {
        TableName: 'YMR-Comments',
        Key:  {
           location: { S: req.body.location.S },
           date: { N: req.body.date.N }
        }
    };

    dynamoDB.deleteItem(params, (err, data) => {
        if (err) {
            console.log(err); 
        } 

        fetchMarkers(markers => res.json({'markers': markers}));
    });
});

router.post('/comment', (req, res) => {
    const params = {
        TableName: 'YMR-Comments',
        Item:  {
           location: { S: req.body.location },
           comment: { S: req.body.comment },
           date: { N: String(Date.now()) },
           name: { S: 'Unknown' }
        }
    };

    dynamoDB.putItem(params, (err, data) => {
        if (err) {
            console.log(err); 
        } 

        fetchMarkers(markers => res.json({'markers': markers}));
    });
});

router.get('/get', (req, res) => {
    fetchMarkers(markers => {
        res.json({ 'markers': markers })
    });
});

module.exports = router;