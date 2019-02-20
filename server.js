// @ts-check

// set global fetch for unsplash to work (similar to Fetch API)
global.fetch = require('node-fetch');

// const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const cors = require('cors');

// to make requests to the Unsplash QPI
const unsplash = new Unsplash({
    applicationId: /* config.get('APPLICATION_ID') */ process.env.APPLICATION_ID,
    secret: /* config.get('APPLICATION_SECRET') */process.env.APPLICATION_SECRET,
    callbackUrl: /* config.get('CALLBACK_URL') */ process.env.CALLBACK_URL
});

const app = express();

app.use(cors());

app.get(
    '/',
    (req, res) => {
        res.send('<h1>It works !!</h1>');
    }

)

app.get(
    '/api/photos',
    (req, res) => {
        // get 50 photos
        unsplash.photos
            .listPhotos(req.query.start, req.query.count)
            .then(toJson)
            .then(jsonData => res.json(jsonData));
    }
)

const PORT = /* config.get('PORT') */ process.env.PORT;

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));