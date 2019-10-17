const t = require("tap")

const isGameFinished = require("../src/isGameFinished")

t.test("is game finished", t => {
  t.plan(3)
  t.ok(isGameFinished([
    [],
    [1,2,3,4]
  ]))
  t.ok(isGameFinished([
    [],
    []
  ]))
  t.notOk(isGameFinished([
    [1],
    [2,3,4]
  ]))
})
