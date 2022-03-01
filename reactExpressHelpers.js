const fetch = require('node-fetch');

let client_id = null;
let client_secret = null;
let access_token = null;

// API fetch call to obtain access token from Spotify API token endpoint.
async function getToken(clientID, clientSecret) {
    try {
        const url = 'https://accounts.spotify.com/api/token?grant_type=client_credentials';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(`${clientID}` + ':' + `${clientSecret}`).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if (response.status !== 200) {
            throw await response.json();
        };
        const results = await response.json();
        return results.access_token;
    } catch(err) {
        console.log(err)
        throw 'Failed to get access token.';
    };
};

// Function that makes API request.
async function makeReq(url, method) {
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    });

    // Checks if access token expired. If so, gets a new access token and retrys.
    // So we can refresh the access token.
    if (response.status === 401) {
        access_token = await getToken(client_id, client_secret);
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        });

        if (response.status !== 200) {
            throw response;
        };
        return await response.json();
    } else if (response.status !== 200) {
        throw response;
    };

    return await response.json();
};

async function initToken(clientID, clientSecret) {
    client_id = clientID;
    client_secret = clientSecret;
    access_token = await getToken(client_id, client_secret);
};

module.exports = {
    makeReq,
    initToken
};