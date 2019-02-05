const express = require('express');
const path = require('path');

const APP = express();

APP.use(express.static(`${__dirname}/dist`));

APP.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

APP.listen(process.env.PORT || 8080);
