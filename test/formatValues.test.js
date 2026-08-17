const t = require("tap")

const formatValues = require("../src/formatValues")

t.test("Replace value and unit", t => {
  t.plan(2)

  t.equal(formatValues("{{value}} MW", { value: 1000 }), "1000 MW")
  t.equal(formatValues("> {{value}} {{unit}}", { value: 20, unit: "%"}), "> 20 %")
})

t.test("Missing arguments", t => {
  t.plan(4)
  t.equal(formatValues(), "")
  t.equal(formatValues(""), "")
  t.equal(formatValues("{{value}}"), "")
  t.equal(formatValues("{{value}}", {}), "")
})
