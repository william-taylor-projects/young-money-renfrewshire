const markerService = require('./services/marker-service.js');
const dealsService = require('./services/deals-service.js');
const adminService = require('./services/admin-service.js');
const newsService = require('./services/news-service.js');
const tipsService = require('./services/tips-service.js');
const compress = require('compression');
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const dir = "/website/";
const app = express();

app.use(express.static(__dirname + dir, { maxAge: 86400000 * 14 }));
app.use(parser.json());
app.use(compress());
app.use(cors());
app.use('/markers', markerService);
app.use('/admin', adminService);
app.use('/deals', dealsService);
app.use('/news', newsService);
app.use('/tips', tipsService);
app.all('*', (req, res) => {
  res.sendFile('website/index.html', { root: __dirname });
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});