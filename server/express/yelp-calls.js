/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '';

/**
* @param req {req} query req object with endpoint inputs.
* @param res {res} http response object to pass data through endpoint.
*/

const getRestaurants = (req, res) => {
    const searchRequest = {
        categories: req.query.categories,
        location: req.query.location,
        sort_by: req.query.sort,
        limit: req.query.limit,
        term: 'restaurant',
    };
    const client = yelp.client(apiKey);
    client.search(searchRequest).then((response) => {
        res.send(response.jsonBody);
    }).catch((e) => {
        console.log(e);
    });
};

module.exports = {
    getRestaurants,
};
