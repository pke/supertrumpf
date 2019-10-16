const t = require("tap")

const dealCards = require("../src/dealCards.js")

t.test("Deal even number of cards to 2 players", t => {
  t.plan(2)

  const player1 = {}
  const player2 = {}

  const cards = [1, 2, 3, 4, 5, 6]

  dealCards(cards, [player1, player2])
  t.same(player1.cards, [1,3,5])
  t.same(player2.cards, [2,4,6])
})

t.test("Deal uneven number of cards to 2 players", t => {
  t.plan(2)

  const player1 = {}
  const player2 = {}

  const cards = [1, 2, 3, 4, 5]

  dealCards(cards, [player1, player2])
  t.same(player1.cards, [1,3,5])
  t.same(player2.cards, [2,4])
})
