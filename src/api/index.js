import axios from 'axios';

const API_KEY = process.env.NODE_ENV === 'production' ? process.env.vue_app_api_key : process.env.VUE_APP_API_KEY;
const API_HOST = process.env.NODE_ENV === 'production' ? process.env.vue_app_api_host : process.env.VUE_APP_API_HOST;

/**
 * Fetch albums
 *
 * @async
 * @returns {Promise}
 */
async function fetchAlbums() {
  const genre = 'post-punk';
  const endpoint = 'tag.gettopalbums';

  try {
    const { data } = await axios.get(`${API_HOST}?method=${endpoint}&tag=${genre}&api_key=${API_KEY}&format=json`);
    return data.albums;
  } catch (error) {
    // send to Sentry
    console.log(error);
    throw new Error(error.message);
  }
}

/**
 * Fetch album info
 *
 * @async
 * @param {Object} payload - The payload request
 * @param {String} payload.artist - The artist name
 * @param {String} payload.album - The album name
 * @returns {Promise}
 */
async function fetchAlbumInfo({ artist, album }) {
  const endpoint = 'album.getinfo';

  try {
    const { data } = await axios.get(`${API_HOST}?method=${endpoint}&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`);
    return data.album;
  } catch (error) {
    // send to Sentry
    console.log(error);
    throw new Error(error.message);
  }
}


export default {
  fetchAlbums,
  fetchAlbumInfo,
};
