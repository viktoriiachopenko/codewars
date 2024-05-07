// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function counter(str) {
    const counter = {};
  
    for (const c of str) {
        counter[c] = counter[c] + 1 || 1;
    }
  
    return counter;
}

function scramble(str1, str2) {
    if (str1.length < str2.length){
        return false;
    }

    const count = counter(str1);

    for (const c of str2) {
        if (!count.hasOwnProperty(c) || --count[c] < 0){
            return false;
        }
    }

    return true;
}