/**
 * Возвращает дробную часть числа с точностью до 2 знаков после запятой
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа (0..0.99)
 */
function getDecimal(num) {
    // Получаем абсолютное значение числа
    const absNum = Math.abs(num);
    // Вычисляем дробную часть
    const fractional = absNum - Math.floor(absNum);
    // Округляем до 2 знаков после запятой
    const rounded = parseFloat(fractional.toFixed(2));
    // Для отрицательных чисел возвращаем 1 - дробную часть
    return num >= 0 ? rounded : parseFloat((1 - rounded).toFixed(2));
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
образует строку с дефисами и подчеркиваниями в camelCase, сохраняя символы в первом слове
 * @param {string} str - Исходная строка
 * @returns {string} Строка в camelCase
 */
function camelize(str) {
    // 1. Сначала заменяем двойные подчеркивания на временный маркер
    const doubleUnder = /__+/g;
    const tempMarker = '%%DOUBLE_UNDER%%';
    let tempParts = [];
    let lastIndex = 0;
    
    // Сохраняем все двойные подчеркивания и их позиции
    let match;
    while ((match = doubleUnder.exec(str)) !== null) {
        tempParts.push(str.slice(lastIndex, match.index));
        tempParts.push(tempMarker); // Заменяем __ на маркер
        lastIndex = match.index + match[0].length;
    }
    tempParts.push(str.slice(lastIndex));
    const tempStr = tempParts.join('');
    
    // 2. Преобразуем одиночные - и _ в camelCase
    let result = tempStr.replace(/[-_]([a-z])/gi, (_, char) => 
        char.toUpperCase()
    ).replace(/[-_]/g, '');
    
    // 3. Восстанавливаем двойные подчеркивания
    return result.replace(new RegExp(tempMarker, 'g'), '__');
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