const t = require("tap")

const formatValues = require("../src/formatValues")

t.test("Replace value and unit", t => {
  t.plan(2)

  t.is(formatValues("{{value}} MW", { value: 1000 }), "1000 MW")
  t.is(formatValues("> {{value}} {{unit}}", { value: 20, unit: "%"}), "> 20 %")
})

t.test("Missing arguments", t => {
  t.plan(4)
  t.is(formatValues(), "")
  t.is(formatValues(""), "")
  t.is(formatValues("{{value}}"), "")
  t.is(formatValues("{{value}}", {}), "")
})
