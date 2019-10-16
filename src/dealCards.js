function dealCards(cards, players) {
  const numberOfPlayers = players.length
  players.forEach(player => player.cards = [])
  
  var playerIndex = 0
  for (var card of cards) {
    const player = players[playerIndex]
    player.cards.push(card)
    playerIndex = (playerIndex + 1) % numberOfPlayers
  }
}

module.exports = dealCards
