// @ts-check

// set global fetch for unsplash to work (similar to Fetch API)
global.fetch = require('node-fetch');

const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

// to make requests to the Unsplash QPI
const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('APPLICATION_SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get(
    '/api/photos',
    (req, res) => {
        // get 50 photos
        unsplash.photos
            .listPhotos(1, 50)
            .then(toJson)
            .then(jsonData => res.json(jsonData));
    }
)

const PORT = config.get('PORT');

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));