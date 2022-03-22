import fetch from 'node-fetch';
const Spotify = require('spotify-web-api-js');

globalThis.fetch = fetch;

const s = new Spotify();

fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DWZUtjhu2IHar/tracks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));