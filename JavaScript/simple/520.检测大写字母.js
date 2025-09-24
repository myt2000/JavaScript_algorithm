/**
 * @param {string} word
 * @return {boolean}
 */
// 自己写的解法
var detectCapitalUse = function (word) {
    let uppderWord = word.toUpperCase();
    let lowerWord = word.toLowerCase();
    let firstUpper = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return word === uppderWord || word === lowerWord || word === firstUpper;
};


// leetcode最佳解法，正则表达式
var detectCapitalUse = function (word) {
    // 使用正则表达式匹配全大写、全小写或首字母大写的单词
    return /^[A-Z]*$/.test(word) || /^[a-z]*$/.test(word) || /^[A-Z][a-z]*$/.test(word);
};