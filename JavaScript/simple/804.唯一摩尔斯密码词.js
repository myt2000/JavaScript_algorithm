/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
    const morseCode = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
        "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
        "..-", "...-", ".--", "-..-", "-.--", "--.."
    ];

    const seen = new Set();

    for (const word of words) {
        let morseTranslation = '';
        for (const char of word) {
            morseTranslation += morseCode[char.charCodeAt(0) - 97];
        }
        seen.add(morseTranslation);
    }

    return seen.size;
}

// 示例 1：
const words1 = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words1)); // 输出: 2

// 示例 2：
const words2 = ["a"];
console.log(uniqueMorseRepresentations(words2)); // 输出: 1
