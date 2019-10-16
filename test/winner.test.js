const t = require("tap")

const winner = require("../src/winner")

t.test("finds winner in a category", t => {
  t.plan(7)
  const biggerWins = winner(">", [ 1, 3, 2 ])
  t.is(biggerWins.length, 1)
  t.is(biggerWins[0], 1)

  const smallerWins = winner("<", [ 1, 3, 2 ])
  t.is(smallerWins.length, 1)
  t.is(smallerWins[0], 0)

  const twoWinners = winner(">", [ 1, 3, 3])
  t.is(twoWinners.length, 2)
  t.is(twoWinners[0], 1)
  t.is(twoWinners[1], 2)
})
