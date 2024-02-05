/**
* @param {string} s
* @return {number}
*/
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    while (i > 0 && s[i] === ' ') {
        i--;
    }
    start = i;
    while (i >= 0 && s[i] !== ' ') {
        i--;
    }
    return start - i;
};


console.log(lengthOfLastWord("Hello World") === 5);
console.log(lengthOfLastWord("   fly me   to   the moon  ") === 4);
console.log(lengthOfLastWord("luffy is still joyboy") === 6);
console.log(lengthOfLastWord(" a word ") === 4);
console.log(lengthOfLastWord(" I am happy ") === 5);
console.log(lengthOfLastWord("") === 0);