// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// write the function isAnagram
var isAnagram = function (test, original) {
    if (typeof test !== 'string' || typeof original !== 'string') {
        throw new Error('isAnagram requires two strings to be passed.')
    }

    var normalizedWord1 = test.replace(/[^A-Za-z]+/g, '').toLowerCase();
    var normalizedWord2 = original.replace(/[^A-Za-z]+/g, '').toLowerCase();

    var counts = [];
    var word1Length = normalizedWord1.length;
    var word2Length = normalizedWord2.length

    if (word1Length !== word2Length) { return false; }

    for (var i = 0; i < word1Length; i++) {
        var index = normalizedWord1.charCodeAt(i) - 97;
        counts[index] = (counts[index] || 0) + 1;
    }

    for (var i = 0; i < word2Length; i++) {
        var index = normalizedWord2.charCodeAt(i) - 97;
        if (!counts[index]) { return false; }
        else { counts[index]--; }
    }

    return true;
};
