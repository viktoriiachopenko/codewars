// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let arr = []

    string = string.replace(/ /g, "").replace(/[.*+?^${}()|[\]\\]/g, "").toLowerCase().split('')

    for (i = 0; i < alphabet.length; i++) {
        if (string.includes(alphabet[i])) {
            arr.push(alphabet[i])
        }
    }

    if (arr.length === alphabet.length) {
        return true
    } else {
        return false
    }
}


//interesting result
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}