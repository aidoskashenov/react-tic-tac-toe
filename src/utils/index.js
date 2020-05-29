/**
 * Given a 'length,' create an Array in sequential order.
 * @param {number} length
 * @param {number} offset = 0 - Where to start the sequence from
 * @returns {number[]}
 */
export const createRange = (length, offset = 0) =>
  // '_' is a 'throwaway placeholder' variable
  // it will be 'undefined' as the value from the 'created Array'
  Array.from({ length }, (_, index) => index + offset);
