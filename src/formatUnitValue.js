/**
 * Formats a value with a unit.
 * 
 * The Unit can contain a colon to indicate where the unit appears
 * `UNIT:` puts the value after the unit
 * `:UNIT` puts the value before the unit (default)
 * 
 * @param {String} unit for the value
 * @param {String|Number} value to format. The function calls `.toString()` on 
 * this.
 * 
 * @returns the value with the unit as prefix or suffix
 */
module.exports = function formatUnitValue(unit, value) {
  unit = unit.trim()
  if (/:$/.test(unit)) {
    return `${unit.substring(0, unit.length-1)} ${value.toString()}`
  }
  return `${value.toString()} ${unit}`
}
