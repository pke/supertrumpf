const less = (a, b) => a.value - b.value 
const greater = (a, b) => b.value - a.value

/**
 * Calculates one or more winner for the given values by the given rule
 * 
 * @param {String} rule for winning. Can be either ">" or "<"
 * @param {Array} values to compare using the rule
 * 
 * @returns {Array} of indicies into `values` for the winners
 */
module.exports = function winner(rule, values) {
  const compare = rule === "<" ? less : greater

  // Remember which value was at which index
  const items = values.map((value, index) => ({ index, value }))

  return items
    .sort(compare) // This sorts the smallest or biggest entries to the front
    .reduce((result, item) => {
      if (!result.length || result[0].value === item.value) {
        result.push(item)
      }
      return result
    }, [])
    .map(item => item.index)
}
