/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    // 使用正则表达式匹配单词（连续的不是空格的字符）
    const wordPattern = /[^\s]+/g;
    const matches = s.match(wordPattern);

    // 如果没有匹配到单词，返回0
    if (!matches) {
        return 0;
    }

    // 返回匹配到的单词个数
    return matches.length;
}

// 示例用法
console.log(countSegments("Hello, my name is John")); // 输出：5

var countSegmentsBest = function (s) {
    let wordCount = 0;
    for (let i = 0; i < s.length; i++) {
        if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
            wordCount++
        }
    }
    return wordCount
};

