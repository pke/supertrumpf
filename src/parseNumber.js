function parseNumber(input) {
  if (typeof input === "number") {
    return input
  }
  input = input.trim().toLowerCase()
  if ("∞" === input || "inf" === input || "infinite" === input) {
    return Number(global.Infinity)
  }
  
  return Number(input)
}

module.exports = parseNumber
