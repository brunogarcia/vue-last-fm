import axios from 'axios';

const API_HOST = process.env.VUE_APP_API_HOST;
const API_KEY = process.env.VUE_APP_API_KEY;

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
