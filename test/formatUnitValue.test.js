const t = require("tap")

const formatUnitValue = require("../src/formatUnitValue")

t.test("format value and unit", t => {
  t.plan(2)
  t.is(formatUnitValue("MW", 1000), "1000 MW")
  t.is(formatUnitValue("INES:", 7), "INES 7")
})
