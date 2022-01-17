const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config()
const fetch = require('node-fetch');

app.get('/api/albums/:artistID', async (req, res) => {
    try {
        const artistID = req.params.artistID
        if (artistID === undefined || !artistID) {
            return res.status(400).send('Missing required parameter "artistID"')
        }
        const url = `https://api.spotify.com/v1/artists/${artistID}/albums`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        const results = await response.json();
        if ('error' in results) {
            const error = results.error.message
            return res.status(400).send(error)
        } 
        return res.status(200).json(results.items)
    } catch (error) {
        return res.status(500).send('Failed to fetch albums.')
    }
})

app.get('/api/relatedArtists/:artistID', async (req, res) => {
    const artistID = req.params.artistID
    const url = `https://api.spotify.com/v1/artists/${artistID}/related-artists`;
    const response = await fetch(url, { 
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    const results = await response.json();
    return res.status(200).json(results)
})

app.get('/api/tracks/:albumID', async (req, res) => {
    const albumID = req.params.albumID
    console.log(albumID)
    const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`;
    const response = await fetch(url, { 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
    const results = await response.json();
    return res.status(200).json(results)
})

// Start the server listening for requests.
app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running...')
});