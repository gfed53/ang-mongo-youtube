// jshint esversion: 6

const express = require('express');
const router = express.Router();

const config = require('../config');

// Make regular YouTube search with given query
// Body would contain query string, q.
router.post('/search-videos', function(req, res) {
    console.log('res.body',res.body);
});