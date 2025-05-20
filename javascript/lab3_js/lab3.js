/**
 * Returns the decimal part of a number.
 * For negative numbers, the decimal part is adjusted to be a positive value.
 * @param {number} num - The input number.
 * @returns {number} The decimal part of the number.
 */
export function getDecimal(num) {
  const decimal = Math.abs(num % 1);
  return num < 0 ? 1 - decimal : decimal;
}

/**
 * Normalizes a URL to start with 'https://'.
 * @param {string} url - The URL to normalize.
 * @returns {string} The normalized URL with 'https://'.
 */
export function normalizeUrl(url) {
  return url.replace(/^(https?:\/\/)?/i, 'https://');
}

/**
 * Checks if a string contains 'viagra' or 'XXX' (case-insensitive).
 * @param {string} str - The input string to check.
 * @returns {boolean} True if spam keywords are found, false otherwise.
 */
export function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Truncates a string if it exceeds the specified maximum length, appending an ellipsis.
 * @param {string} str - The input string.
 * @param {number} maxlength - The maximum allowed length of the string.
 * @returns {string} The truncated string if necessary.
 */
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}

/**
 * Converts a hyphen-separated string to camelCase.
 * @param {string} str - The hyphen-separated string.
 * @returns {string} The camelCase formatted string.
 */
export function camelize(str) {
  return str.split('-').map((word, index) => {
    return index === 0 ? word : ucFirst(word);
  }).join('');
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

import { fib } from './lab2.js';

/**
 * Generates an array of Fibonacci numbers up to the nth element (exclusive).
 * @param {number} n - The number of elements to generate.
 * @returns {bigint[]} An array of Fibonacci numbers.
 */
export function fibs(n) {
  return Array.from({ length: n }, (_, i) => fib(i));
}

/**
 * Returns a new array sorted in descending order without modifying the original.
 * @param {number[]} arr - The input array to sort.
 * @returns {number[]} A new array sorted in descending order.
 */
export function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Returns an array of unique elements from the input array.
 * @param {Array} arr - The input array with possible duplicates.
 * @returns {Array} An array of unique elements.
 */
export function unique(arr) {
  return [...new Set(arr)];
}