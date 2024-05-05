// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

    // объединяем массивы
    const arr3 = arr1.concat(arr2);

    function sum(a, b) {
        return a + b;
    }

    // перебор значений нового массива и их суммирование
    return arr3.reduce(sum);
}