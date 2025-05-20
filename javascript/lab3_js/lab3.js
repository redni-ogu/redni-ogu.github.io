/**
 * Возвращает дробную часть числа с точностью до 2 знаков после запятой
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа (0..0.99)
 */
function getDecimal(num) {
    const absNum = Math.abs(num);
    const fractional = absNum - Math.floor(absNum);
    const rounded = Math.round(fractional * 1e12) / 1e12;
    return num >= 0 ? parseFloat(rounded.toFixed(2)) : parseFloat((1 - rounded).toFixed(2));
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
  function ucFirst(s) {
    if (!s) return s;
    return s[0].toUpperCase() + s.slice(1);
  }
  
  return str.split('-').map((word, index) => {
    return index === 0 ? word : ucFirst(word);
  }).join('');
}

// Импортируем fib из lab2.js и переименовываем в fibs
import { fib as fibs } from '../lab2_js/lab2.js';

/**
 * Generates an array of Fibonacci numbers up to the nth element (exclusive)
 * @param {number} n - Number of elements to generate
 * @returns {bigint[]} Array of Fibonacci numbers
 */
export function fibs(n) {
  return Array.from({ length: n }, (_, i) => fibs(i));
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