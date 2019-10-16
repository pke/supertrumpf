const getWinner = require("./winner")

/**
 *
 * @param {Array} decks of cards
 * @param {String} rule for winning a card
 * @param {Function} getValue that is called to resolve a cards value for
 * comparison
 *
 * @returns {Array} of decks, winner first. When one of the decks is empty then
 * this player lost the game.
 */
function playCard(decks, rule, getValue) {
  // Make a local copy so we can splice it later
  decks = [...decks]
  const topCards = decks.map(deck => deck.pop())
  const values = topCards.map(card => getValue(card))
  const winners = getWinner(rule, values)
  const winnerIndex = winners[0]
  const winnerDeck = decks.splice(winnerIndex, 1)
  return [
    topCards.concat(...winnerDeck),
    ...decks
  ]
}
module.exports = playCard
