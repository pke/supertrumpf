const t = require("tap")

const playCard = require("../src/playCard")

t.test("Deal even number of cards to 2 players", t => {
  const player1 = [1,3,5]
  const player2 = [2,4,6]

  /**
   * Moves explained
   * player1: 5 < 6 => [1,3] [5,6,2,4]
   * player2: 4 > 3 => [1] [4,3,5,6,2]
   * player2: 2 > 1 => [] [2,1,4,3,5,6]
   */

  // Just select the cards value
  // In real this would return the value of the selected category
  const selectValue = card => card

  var players = [player1, player2]

  players = playCard(players, ">", selectValue)

  t.same(players[0], [5,6,2,4])
  t.same(players[1], [1,3])
   
  players = playCard(players, ">", selectValue)
  t.same(players[0], [4,3,5,6,2])
  t.same(players[1], [1])

  players = playCard(players, ">", selectValue)
  t.same(players[0], [2,1,4,3,5,6])
  t.same(players[1], [])

  t.end()
})
