// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.

function high(x){
    const words = x.split(' ');
    const alphabetMap = {};

    for (let i='a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
        alphabetMap[i] = j;
    }

    let highestScoringWord = { word: '', score: 0 };

    words.forEach(w => {
        const chars = w.split('');
        const sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt()], 0);
        if (sumOfChars > highestScoringWord.score) {
            highestScoringWord = { word: w, score: sumOfChars };
        }
    });

    return highestScoringWord.word;
}