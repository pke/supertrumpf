/**
 * Shuffles an array using a provided random number generator.
 * 
 * @param {Array} items to shuffle
 * @param {Function} random function with call signature as Math.random
 * 
 * @returns a new suffled array
 */
function shuffle(items, random = Math.random) {
  const shuffled = items.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const rand = Math.floor(random() * i);
    [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]]
  }
  return shuffled
}

module.exports = shuffle
