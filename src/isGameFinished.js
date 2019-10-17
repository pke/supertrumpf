/**
 * A game is finished when none but one deck has cards left
 *
 * @param {Array} decks Array of cards
 *
 * @return true if the game is finished
 */
function isGameFinished(decks) {
  const decksWithCards = decks.filter(deck => deck.length)
  return decksWithCards.length <= 1
}
module.exports = isGameFinished
