/**
 * A game is finished when none but one deck has cards left
 *
 * @param {Array} decks of cards
 *
 * @return true if the game is finished
 */
function isGameFinished(decks) {
  return decks.filter(deck => deck.length).length === 1
}
module.exports = isGameFinished
