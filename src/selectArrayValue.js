/**
 * Selects an (sub-)item from an array using a "." notation for indicies.
 * 
 * This function can be used to select items from normal, index based arrays like
 * `[1,[2,3],4]`
 * 
 * or from one that contains objects
 * `[{subItem},{subItem},{subItem}]` when providing a `resolveSubItem` function.
 *
 * @param {Array} array of items to select from
 * @param {String} selector in the form "index1.index2"
 * @param {Function} resolveSubItem resolves an item from an index (to dive deeper into that item)
 */
function selectArrayValue(array, selector, resolveSubItem = item => item) {
  if (!array || !selector || !resolveSubItem) {
    return
  }
  return selector.split(".")
    .reduce((result, i) => {
      return result && resolveSubItem(result[i])
    }, array)
}

module.exports = selectArrayValue
