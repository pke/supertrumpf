const MATCHER = /{{(.*?)}}/g

/**
 * Formats a string with values from an object.
 * 
 * @param {String} format string with `{{<key>}}` marking parts to replace
 * with values
 * @param {Object} values to format. The function calls `.toString()` on 
 * this. If a `key` from the format is not found, its substituted with an empty
 * string.
 * 
 * @returns the value with the unit as prefix or suffix
 */

function formatValues(format, values) {
  if (!format) {
    return ""
  }
  if (!values) {
    return ""
  }
  return format.replace(MATCHER,(match, offset) => values[offset] || "")
}
module.exports = formatValues
