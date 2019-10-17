const selectArrayValue = require("./selectArrayValue")

function selectCategory(categories, selector) {
  return selectArrayValue(categories, selector, item => item.categories || item)
}

module.exports = selectCategory
