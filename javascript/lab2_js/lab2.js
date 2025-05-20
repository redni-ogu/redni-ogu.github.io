/**
 * Возвращает x, возведённое в степень n.
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    return x * pow(x, n - 1);
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
export function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
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