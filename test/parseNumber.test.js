const t = require("tap")

const parseNumber = require("../src/parseNumber")

t.test("parse infinite numbers", t => {
  t.equal(parseNumber("∞"), global.Infinity)
  t.equal(parseNumber("inf"), global.Infinity)
  t.equal(parseNumber("infinite"), global.Infinity)
  t.equal(parseNumber("INF"), global.Infinity)
  t.equal(parseNumber("INFINITE"), global.Infinity)
  t.equal(parseNumber(" ∞ "), global.Infinity)
  t.end()
})

t.only("parse normal numbers", t => {
  t.equal(parseNumber("666"), 666)
  t.equal(parseNumber(666), 666)
  t.equal(parseNumber("666.0"), 666.0)
  t.equal(parseNumber(666.0), 666.0)
  t.end()
})

t.only("parse invalid number input", t => {
  t.plan(1)
  t.same(parseNumber(), NaN)
})
