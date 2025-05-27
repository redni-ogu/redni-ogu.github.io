/**
 * Возвращает дробную часть числа с точностью до 2 знаков после запятой
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа (0..0.99)
 */
export function getDecimal(num) {
    const absNum = Math.abs(num);
    const fractional = absNum - Math.floor(absNum);
    const rounded = Math.round(fractional * 1e12) / 1e12;
    return num >= 0 ? parseFloat(rounded.toFixed(2)) : parseFloat((1 - rounded).toFixed(2));
}

/**
 * Нормализует URL, чтобы он начинался с 'https://'.
 * @param {string} url - URL для нормализации.
 * @returns {string} Нормализованный URL с 'https://'.
 */
export function normalizeUrl(url) {
  return url.replace(/^(https?:\/\/)?/i, 'https://');
}

/**
 * Проверяет, содержит ли строка 'viagra' или 'XXX' (без учета регистра).
 * @param {string} str - Входная строка для проверки.
 * @returns {boolean} True, если найдены спам ключевые слова, иначе false.
 */
export function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Обрезает строку, если она превышает указанную максимальную длину, добавляя многоточие.
 * @param {string} str - Входная строка.
 * @param {number} maxlength - Максимально допустимая длина строки.
 * @returns {string} Обрезанная строка, если необходимо.
 */
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}

/**
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str - Строка с дефисами.
 * @returns {string} Строка в формате camelCase.
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

// Импортируем fib из lab2.js
import { fib } from '../lab2_js/lab2_save.js';

/**
 * Возвращает массив чисел Фибоначчи до n-го элемента (не включая его)
 * @param {number} n - Количество элементов
 * @returns {bigint[]} Массив чисел Фибоначчи
 */
export function fibs(n) {
  return Array.from({ length: n }, (_, i) => fib(i));
}

/**
 * Возвращает новый массив, отсортированный в порядке убывания, без изменения исходного.
 * @param {number[]} arr - Входной массив для сортировки.
 * @returns {number[]} Новый массив, отсортированный в порядке убывания.
 */
export function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных элементов из входного массива.
 * @param {Array} arr - Входной массив с возможными дубликатами.
 * @returns {Array} Массив уникальных элементов.
 */
export function unique(arr) {
  return [...new Set(arr)];
}
