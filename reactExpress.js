const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();
const fetch = require('node-fetch');


// API fetch call to Spotify API endpoint to retrieve searched artist on home page.
app.get('/api/search', async (req, res) => {
    try {
        // Validate query param.
        const searchValue = req.query.searchValue;
        if (searchValue === null || searchValue === undefined) {
            return res.status(400).send('searchValue is a required query.');
        } else if (typeof searchValue !== 'string') {
            return res.status(400).send('searchValue query must be a string.');
        } else if (searchValue === '') {
            return res.status(400).send('searchValue query must not be empty.');
        };

        // Make API request to Spotify.
        const url = `https://api.spotify.com/v1/search?q=artist:${searchValue}&type=artist`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const results = await response.json();
        if ('error' in results) {
            const error = results.error.message;
            return res.status(400).send(error);
        };
        return res.status(200).json(results.artists.items);
    } catch(err) {
        return res.status(500).send('Server failed to search for artists.');
    };
});

// API fetch call to Spotify API endpoint to retrieve related artists of searched artist on home page.
app.get('/api/relatedArtists/:artistID', async (req, res) => {
    try {
        const artistID = req.params.artistID;
        const url = `https://api.spotify.com/v1/artists/${artistID}/related-artists`;
        const response = await fetch(url, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const results = await response.json();
        if ('error' in results) {
            const error = results.error.message;
            return res.status(400).send(error);
        };
        return res.status(200).json(results);
    } catch(err) {
        return res.status(500).send('Server failed to fetch related related artists data.');
    };
});

// API fetch call to Spotify API endpoint to retrieve albums of selected related artist on homepage.
app.get('/api/albums/:artistID', async (req, res) => {
    try {
        const artistID = req.params.artistID;
        if (artistID === undefined || !artistID) {
            return res.status(400).send('Missing required parameter "artistID"')
        };
        const url = `https://api.spotify.com/v1/artists/${artistID}/albums`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const results = await response.json();
        if ('error' in results) {
            const error = results.error.message;
            return res.status(400).send(error);
        };
        // Filter out duplicates in API fetch results.
        const albumNames = [];
        const albums = results.items.filter((item) => {
            if (!albumNames.includes(item.name)) {
                albumNames.push(item.name);
                return item;
            };
        });
        return res.status(200).json(albums);
    } catch (error) {
        return res.status(500).send('Server failed to fetch artist albums data.');
    };
});

// API fetch call to Spotify API endpoint to retrieve tracks of selected album on related artists albums page.
app.get('/api/tracks/:albumID', async (req, res) => {
    try {
        const albumID = req.params.albumID;
        const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`;
        const response = await fetch(url, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const results = await response.json();
        if ('error' in results) {
            const error = results.error.message;
            return res.status(400).send(error);
        }
        return res.status(200).json(results);
    } catch(err) {
        return res.status(500).send('Server failed to fetch artist album tracks.');
    };
});

// Start the server listening for requests.
app.listen(process.env.PORT, () => {
    console.log('Server is running...');
});