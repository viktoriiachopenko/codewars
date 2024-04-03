// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.
// For example:
//
// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
    // ф-ия Array.prototype.map() получает значение и его индекс

    return nums.map((a, i) => {

        // ф-ия Array.prototype.slice() формирует новый массив
        // ф-ия Array.prototype.filter() позволяет получить новый массив
        return nums.slice(i).filter(v => v < a).length
    });
}