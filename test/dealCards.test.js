const t = require("tap")

const dealCards = require("../src/dealCards.js")

t.test("Deal even number of cards to 2 players", t => {
  t.plan(2)

  const cards = [1, 2, 3, 4, 5, 6]

  const players = dealCards(cards, 2)
  t.same(players[0], [1,3,5])
  t.same(players[1], [2,4,6])
})

t.test("Deal uneven number of cards to 2 players", t => {
  t.plan(2)

  const cards = [1, 2, 3, 4, 5]
  const players = dealCards(cards, 2)
  t.same(players[0], [1,3,5])
  t.same(players[1], [2,4])
})
