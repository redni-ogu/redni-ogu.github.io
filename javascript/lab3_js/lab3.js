/**
 * Возвращает дробную часть числа с точностью до 2 знаков после запятой
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа (0..0.99)
 */
function getDecimal(num) {
    if (typeof num !== 'number') return 0;
    const absNum = Math.abs(num);
    const fractional = absNum - Math.floor(absNum);
    return parseFloat(fractional.toFixed(2));
}

/**
 * Нормализует URL, добавляя https:// в начало, если его нет.
 * @param {string} url - Исходный URL.
 * @returns {string} Нормализованный URL.
 */
function normalizeUrl(url) {
    if (typeof url !== 'string') return 'https://';
    if (!url.trim()) return 'https://';
    
    const lowerUrl = url.toLowerCase().trim();
    if (lowerUrl.startsWith('http://') || lowerUrl.startsWith('https://')) {
        return 'https://' + url.split('://')[1];
    }
    if (lowerUrl.startsWith('www.')) {
        return 'https://' + url;
    }
    return 'https://' + url;
}

/**
 * Проверяет строку на наличие спама (слова 'viagra' или 'XXX' в любом регистре).
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
function checkSpam(str) {
    if (typeof str !== 'string') return false;
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины, добавляя многоточие, если необходимо.
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усечённая строка.
 */
function truncate(str, maxlength) {
    if (typeof str !== 'string') return '';
    if (typeof maxlength !== 'number' || maxlength < 1) return str;
    
    return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами и подчеркиваниями в camelCase, сохраняя символы в первом слове
 * @param {string} str - Исходная строка
 * @returns {string} Строка в camelCase
 */
function camelize(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

/**
 * Преобразует первую букву строки в верхний регистр
 * @param {string} str - Исходная строка
 * @returns {string} Строка с первой заглавной буквой
 */
function ucFirst(str) {
    if (typeof str !== 'string' || !str.length) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Importing the fib function
import { fib } from '../lab2_js/lab2.js';

/**
 * Возвращает новый массив, отсортированный по убыванию.
 * @param {number[]} arr - Исходный массив.
 * @returns {number[]} Отсортированный по убыванию массив.
 */
function arrReverseSorted(arr) {
    if (!Array.isArray(arr)) return [];
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {any[]} arr - Исходный массив.
 * @returns {any[]} Массив уникальных значений.
 */
function unique(arr) {
    if (!Array.isArray(arr)) return [];
    return [...new Set(arr)];
}