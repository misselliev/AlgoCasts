// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION ONE: USING REVERSE
// function reverse(str) {
//   const result = str.split('');
//   result.reverse();
//   return result.join('');

//   OR return str.split('').reverse().join('');
// }

// SOLUTION TWO: USING FOR...OF
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// SOLUTION THREE: USING AN ARRAY HELPER
// function reverse(str) {
//   return str.split('').reduce((reverse, char) => char + reverse, '');
// }
module.exports = reverse;
