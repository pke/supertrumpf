const t = require("tap")

const parseNumber = require("../src/parseNumber")

t.test("parse infinite numbers", t => {
  t.is(parseNumber("∞"), global.Infinity)
  t.is(parseNumber("inf"), global.Infinity)
  t.is(parseNumber("infinite"), global.Infinity)
  t.is(parseNumber("INF"), global.Infinity)
  t.is(parseNumber("INFINITE"), global.Infinity)
  t.is(parseNumber(" ∞ "), global.Infinity)
  t.end()
})

t.only("parse normal numbers", t => {
  t.is(parseNumber("666"), 666)
  t.is(parseNumber(666), 666)
  t.is(parseNumber("666.0"), 666.0)
  t.is(parseNumber(666.0), 666.0)
  t.end()
})
