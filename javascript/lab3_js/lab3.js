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
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка в camelCase.
 */
function camelize(str) {
    return str
        // Обрабатываем одиночные - и _, следующий символ — в верхний регистр
        .replace(/([-_])([^-_])/g, (_, sep, char) => char.toUpperCase())
        // Удаляем оставшиеся одиночные - и _
        .replace(/[-_]/g, '')
        // Но восстанавливаем двойные подчеркивания (если они были)
        .replace(/([^_])_([^_])/g, '$1__$2');
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