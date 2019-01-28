const express = require('express');

const APP = express();

APP.use(express.static(`${__dirname}/dist`));
APP.listen(process.env.PORT || 8080);
