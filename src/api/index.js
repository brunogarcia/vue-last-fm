import axios from 'axios';

/**
 * http://ws.audioscrobbler.com/2.0/
 * ?method=tag.gettopalbums
 * &tag=disco
 * &api_key=cd5651d9a6c60934a62baafc6290e70c
 * &format=json

 */

const API_HOST = 'http://ws.audioscrobbler.com/2.0/';
const API_KEY = 'cd5651d9a6c60934a62baafc6290e70c';

/**
 * Fetch albums
 *
 * @async
 * @returns {Promise}
 */
async function fetchAlbums() {
  try {
    const { data } = await axios.get(`${API_HOST}?method=tag.gettopalbums&tag=disco&api_key=${API_KEY}&format=json`);
    console.log(data);
    return data.albums;
  } catch (error) {
    // send to Sentry
    console.log(error);
    throw new Error(error.message);
  }
}

export default {
  fetchAlbums,
};
