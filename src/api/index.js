import axios from 'axios';
import constants from '@/utils/constants';

const { API } = constants;

// http://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=YOUR_API_KEY&format=json

/**
 * Fetch top tags
 *
 * @async
 * @returns {Promise}
 */
async function fetchTopTags() {
  const endpoint = 'tag.getTopTags';

  try {
    const { data } = await axios.get(`${API.HOST}?method=${endpoint}&api_key=${API.KEY}&format=json`);
    return data.toptags.tag;
  } catch (error) {
    // send to Sentry
    console.log(error);
    throw new Error(error.message);
  }
}

/**
 * Fetch albums by tag
 *
 * @async
 * @param {String} tag - The tag for search
 * @returns {Promise}
 */
async function fetchAlbums(tag) {
  const endpoint = 'tag.gettopalbums';

  try {
    const { data } = await axios.get(`${API.HOST}?method=${endpoint}&tag=${tag}&api_key=${API.KEY}&format=json`);
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
  fetchTopTags,
  fetchAlbums,
  fetchAlbumInfo,
};
