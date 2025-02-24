// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
//
// Examples:
//
// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:
//
// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

function parseInt(string) {
    const map = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eigthteen": 18,
        "nineteen": 19,
        "twenty": 20,
        "thirty": 30,
        "forty": 40,
        "fifty": 50,
        "sixty": 60,
        "seventy": 70,
        "eighty": 80,
        "ninety": 90,
    };
    const multiMap = {"hundred": 100, "thousand": 1000, "million": 1000000};
    let result = 0, result2 = 0, multiply = 0;

    function getNumber(string) {
        const nArr = string.split("-");
        if (nArr.length > 1) {
            return map[nArr[0]] + map[nArr[1]];
        }
        return map[string];
    }

    string.split(" ").map(function (number) {
        if (multiMap[number]) {
            result *= multiMap[number];

            if (result >= 1000) {
                result2 = result;
                result = 0;
            }
        } else if (number !== "and") {
            result += getNumber(number);
        }
    });

    return result + result2;
}


//Ошибка в самой задаче, слова не правильно распознаються, вычитала уже после решения в обсуждениях, потому что не проходил рандомный тест