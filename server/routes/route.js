const express = require('express');

const getNews = require('../controller/news-controller')

const route = express.Router();

route.get('/news', getNews);

module.exports = route