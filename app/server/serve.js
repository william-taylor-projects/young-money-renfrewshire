const bodyParser = require('body-parser');
const express = require('express');

if(process.argv.slice(-1)[0].includes("server")) {
    console.error('Config key was not specified');
    process.exit(1)
}

const port = 3000;
const app = express();

app.use(express.static('../website/'));
app.use(bodyParser.json());

require('../server/server')(app);

app.listen(port, () => {
    console.log(`Website served on port ${port}!`)
});