const t = require("tap")

const winner = require("../src/winner")

t.test("finds winner in a category", t => {
  t.plan(7)
  const biggerWins = winner(">", [ 1, 3, 2 ])
  t.equal(biggerWins.length, 1)
  t.equal(biggerWins[0], 1)

  const smallerWins = winner("<", [ 1, 3, 2 ])
  t.equal(smallerWins.length, 1)
  t.equal(smallerWins[0], 0)

  const twoWinners = winner(">", [ 1, 3, 3])
  t.equal(twoWinners.length, 2)
  t.equal(twoWinners[0], 1)
  t.equal(twoWinners[1], 2)
})
