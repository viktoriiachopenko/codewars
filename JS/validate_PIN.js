// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
//
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Array.prototype.every(), Array.prototype.some(), String.prototype.match()
function validatePIN(pin) {
    [...pin] = pin;
    return pin.every(v => v.match(/\d/)) &&
        [4, 6].some(n => pin.length === n)
}


//Было другое решение, но если есть символы то всё ломается
function validatePIN(pin) {
    return typeof pin === 'string' && // проверка, что пин строка
        Number.isInteger(+pin) && // убедится, что строка является целым числом при преобразовании в число
        [4, 6].includes(pin.length) // проверка длинны
}