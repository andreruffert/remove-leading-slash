/**
 * Remove leading slashes from a given string
 * @param  {String} str
 * @return {String}
 */
export default function removeLeadingSlash(str) {
  return str.replace(/^\/+/, '');
}
