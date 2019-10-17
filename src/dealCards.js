/**
 * Deals from a deck of cards to a number of players.
 * 
 * @param {Array} cards to deal from
 * @param {Number} numberOfPlayers to deal the cards to
 * 
 * @returns {Array} of player hands
 */
function dealCards(cards, numberOfPlayers) {
  const players = [...Array(numberOfPlayers)].map(() => {
    return []
  })

  var playerIndex = 0
  for (var card of cards) {
    players[playerIndex].push(card)
    playerIndex = (playerIndex + 1) % numberOfPlayers
  }
  return players
}

module.exports = dealCards
