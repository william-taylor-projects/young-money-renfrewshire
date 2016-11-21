const markerService = require('./services/marker-service.js');
const dealsService = require('./services/deals-service.js');
const newsService = require('./services/news-service.js');
const tipsService = require('./services/tips-service.js');
const compress = require('compression');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const dir = "/website/";
const app = express();

// middleware
app.use(express.static(__dirname + dir, { maxAge: 86400000 * 14 }));
app.use(parser.json());
app.use(compress());
app.use(cors());

// services
app.use('/markers', markerService);
app.use('/deals', dealsService);
app.use('/news', newsService);
app.use('/tips', tipsService);
app.all('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname+dir });
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});