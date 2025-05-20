/**
 * Возвращает дробную часть числа с точностью до 2 знаков после запятой
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа (0..0.99)
 */
function getDecimal(num) {
    const absNum = Math.abs(num);
    const fractional = absNum - Math.floor(absNum);
    const rounded = Math.round(fractional * 100) / 100;
    return num >= 0 ? rounded : parseFloat((1 - rounded).toFixed(2));
}

/**
 * Нормализует URL, добавляя https:// в начало, если его нет.
 * @param {string} url - Исходный URL.
 * @returns {string} Нормализованный URL.
 */
function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    } else if (url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }
}

/**
 * Проверяет строку на наличие спама (слова 'viagra' или 'XXX' в любом регистре).
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
function checkSpam(str) {
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
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует первый символ строки в верхний регистр
 * @param {string} str - Входная строка
 * @returns {string} Строка с первой буквой в верхнем регистре
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Преобразует строку с дефисами и подчеркиваниями в camelCase
 * @param {string} str - Входная строка
 * @returns {string} Строка в camelCase
 */
function camelize(str) {
    // Разбиваем строку по всем разделителям (- и _), кроме двойных подчеркиваний
    const parts = str.split(/(?<!_)_(?!_)|-/);
    
    // Первая часть остается без изменений
    let result = parts[0];
    
    // Остальные части преобразуем: первая буква - заглавная
    for (let i = 1; i < parts.length; i++) {
        result += ucFirst(parts[i]);
    }
    
    // Восстанавливаем двойные подчеркивания
    return result.replace(/__/g, '__');
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
function fibs(n) {
    if (n === 0) return [];
    if (n === 1) return [0n];
    const sequence = [0n, 1n];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

/**
 * Возвращает новый массив, отсортированный по убыванию.
 * @param {number[]} arr - Исходный массив.
 * @returns {number[]} Отсортированный по убыванию массив.
 */
function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {any[]} arr - Исходный массив.
 * @returns {any[]} Массив уникальных значений.
 */
function unique(arr) {
    return [...new Set(arr)];
}