/**
 * Get small image
 *
 * @param {Array<Object} images - The image list
 * @param {String} type - The image type (small, medium, large, extralarge, mega)
 * @returns {String}
 */
export default function getImage(images, type) {
  const data = images.find((image) => image.size === type);
  return data['#text'];
}
