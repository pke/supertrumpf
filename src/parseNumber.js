function parseNumber(input) {
  if (typeof input === "number") {
    return input
  }
  if (undefined === input) {
    return NaN
  }
  input = input.toString().trim().toLowerCase()
  if ("∞" === input || "inf" === input || "infinite" === input) {
    return Number(global.Infinity)
  }
  
  return Number(input)
}

module.exports = parseNumber
