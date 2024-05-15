// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    const newArr = [];

    for (let i = 0; i < str.length; i = i + 2) {
        const second = str[i + 1] || '_';
        newArr.push(str[i] + second);
    }
    return newArr;
}


// interesting result

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}