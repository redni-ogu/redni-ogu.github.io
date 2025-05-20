/**
 * Возвращает дробную часть числа с точностью до 2 знаков после запятой
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа (0..0.99)
 */
function getDecimal(num) {
    // Исправлено: более надежная обработка дробной части
    const fractional = Math.abs(num) % 1;
    const rounded = Math.round(fractional * 100) / 100;
    return parseFloat(rounded.toFixed(2)); // Гарантируем 2 знака после запятой
}

/**
 * Нормализует URL, добавляя https:// в начало, если его нет.
 * @param {string} url - Исходный URL.
 * @returns {string} Нормализованный URL.
 */
function normalizeUrl(url) {
    // Добавлена проверка на пустую строку
    if (!url) return 'https://';
    
    // Улучшена обработка URL с разными регистрами (HTTP, HTTPS)
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.startsWith('http://')) {
        return 'https://' + url.slice(7);
    } else if (lowerUrl.startsWith('https://')) {
        return url;
    }
    return 'https://' + url;
}

/**
 * Проверяет строку на наличие спама (слова 'viagra' или 'XXX' в любом регистре).
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
function checkSpam(str) {
    if (typeof str !== 'string') return false; // Добавлена проверка типа
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
    // Добавлены проверки входных параметров
    if (typeof str !== 'string') return '';
    if (typeof maxlength !== 'number' || maxlength < 1) return str;
    
    return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами и подчеркиваниями в camelCase
 * @param {string} str - Исходная строка
 * @returns {string} Строка в camelCase
 */
function camelize(str) {
    if (typeof str !== 'string') return '';
    
    // Улучшенная версия, которая корректно обрабатывает все случаи
    return str.replace(/([-_][a-z])/gi, (match) => {
        return match.charAt(1).toUpperCase();
    }).replace(/[-_]/g, '');
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

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
function fibs(n) {
    // Добавлена проверка входного параметра
    if (typeof n !== 'number' || n < 0) return [];
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
    // Добавлена проверка на массив
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