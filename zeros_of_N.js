// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
//     N! = 1 * 2 * 3 *  ... * N
//
// Be careful 1000! has 2568 digits...
//
// For more info, see: http://mathworld.wolfram.com/Factorial.html
//
//     Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
//
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

function zeros(n) {
    let fives = 0;
    let twos = 0;
    for (let counter = 2; counter <= n; counter++) {
        let n = counter;
        while (n % 2 === 0) {
            n /= 2;
            twos++;
        }
        while (n % 5 === 0) {
            n /= 5;
            fives++;
        }
    }
    return Math.min(fives, twos);
}

// Поскольку нули получаются в результате совместного умножения коэффициентов 5 и 2,
// выполняем итерацию по всем числам от 1 до входного числа, добавляя к общему количеству
// пятерок и двоек всякий раз, когда эти коэффициенты будут найдены. Затем возвращаем меньшее из этих двух значений


// Второй вариант
function zeros(n) {
    let count = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}