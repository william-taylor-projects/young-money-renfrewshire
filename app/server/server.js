
const markerService = require(`${__dirname}/services/marker-service.js`);
const dealsService = require(`${__dirname}/services/deals-service.js`);
const adminService = require(`${__dirname}/services/admin-service.js`);
const newsService = require(`${__dirname}/services/news-service.js`);
const tipsService = require(`${__dirname}/services/tips-service.js`);

module.exports = app => {
  app.use('/markers', markerService);
  app.use('/admin', adminService);
  app.use('/deals', dealsService);
  app.use('/news', newsService);
  app.use('/tips', tipsService);
}
