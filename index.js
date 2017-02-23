/**
 * Remove leading slashes from a given string
 * @param  {String} str
 * @return {String}
 */
function removeLeadingSlash(str) {
  return str.replace(/^\/+/, '');
}

module.exports = removeLeadingSlash;
