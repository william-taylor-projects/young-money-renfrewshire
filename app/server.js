
const markerService = require('./services/marker-service.js');
const dealsService = require('./services/deals-service.js');
const adminService = require('./services/admin-service.js');
const newsService = require('./services/news-service.js');
const tipsService = require('./services/tips-service.js');

module.exports = app => {
  app.use('/markers', markerService);
  app.use('/admin', adminService);
  app.use('/deals', dealsService);
  app.use('/news', newsService);
  app.use('/tips', tipsService);
}
