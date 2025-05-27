/**
 * Возвращает x, возведённое в степень n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < Math.abs(n); i++) result *= x;
    return n >= 0 ? result : 1 / result;
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
function sumTo(n) {
    return (n * (n + 1)) / 2;
}

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n.
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n.
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число Фибоначчи.
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи.
 */
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    
    let a = 0n, b = 1n;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
/**
 * Сравнивает значение y с x.
 * @param {number} x - Число для сравнения.
 * @returns {function} Функция, которая принимает y и сравнивает его с x.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Суммирует все переданные аргументы.
 * @param {...number} args - Числа для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

/**
 * Добавляет символьное свойство blackSpot к объекту.
 * @param {Object} obj - Объект для модификации.
 * @returns {Object} Исходный объект с добавленным свойством blackSpot.
 */
function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}