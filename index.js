/**
 * Remove leading slashes from a given string
 * @param  {String} input
 * @return {String}
 */
export default function removeLeadingSlash(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }
  return input.replace(/^\/+/, '');
}
