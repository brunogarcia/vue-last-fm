/**
 * Map tags
 *
 * @param {Array<Object>} tags - The response from the API
 * @returns {Array}
 */
export default function mapTags(tags) {
  return tags.map((tag) => tag.name);
}
