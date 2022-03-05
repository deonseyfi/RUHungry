/**
 * Server Initialization.
 */
const express = require('express');
const yelpCalls = require('./yelp-calls');

const app = express();
app.use(express.urlencoded({ extended: true }));

/**
 * Creating API endpoints for the Front-End.
 */
app.get('/', yelpCalls.getRestaurants);
/**
 * Set server listening port value to 8080.
 */
app.listen(8080);
