// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.
//
// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    let stack = [];
    let symbol = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < braces.length; i += 1) {
        // Если символ является открывающей фигурной скобкой, добавьте его в стек
        if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
            stack.push(braces[i]);
        }
        //  Если этот символ является закрывающей скобкой, извлеките его из стека, что также
        //  уменьшит длину стека при каждом появлении закрывающей скобки
        else {
            let last = stack.pop();
            // Если извлеченный элемент из стека, который является последней открывающей фигурной скобкой,
            // не соответствует соответствующей закрывающей фигурной скобке в символе, то возвращается значение false
            if (braces[i] !== symbol[last]) {
                return false
            };
        }
    }
    // После проверки всех скобок str, в конце концов, стек не будет заполнен
    // пустой
    if (stack.length !== 0) {
        return false
    };
    return true;
}