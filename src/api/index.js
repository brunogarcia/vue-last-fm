import axios from 'axios';
import constants from '@/utils/constants';

const { API } = constants;

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
    const { data } = await axios.get(`${API.HOST}?method=${endpoint}&tag=${genre}&api_key=${API.KEY}&format=json`);
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
    const { data } = await axios.get(`${API.HOST}?method=${endpoint}&api_key=${API.KEY}&artist=${artist}&album=${album}&format=json`);
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
