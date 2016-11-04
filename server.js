const compress = require('compression');
const express = require('express');
const dir = "/website/";
const app = express();

const cacheTime = 86400000 * 14;

app.use(compress());
app.use(express.static(__dirname + dir, { maxAge: cacheTime }));
app.use(require('body-parser').json());
app.use(require('cors')());
app.all('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname+dir});
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});