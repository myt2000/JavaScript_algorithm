/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

/**
 * Object.entries
 * 用于将对象的可枚举属性转换为一个数组

该数组包含对象自身的可枚举属性的键值对数组，每个键值对数组由两个元素组成：

第一个元素是属性名，字符串（或符号）
第二个元素是属性值，任何类型
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries);
// 输出: [['a', 1], ['b', 2], ['c', 3]]
*/
var mostCommonWord = function (paragraph, banned) {
    // 将段落转换为小写，并使用正则表达式去除标点符号, words是个数组, match返回一个数组
    const words = paragraph.toLowerCase().match(/\w+/g);

    // 将禁用词转换为集合，以便快速查找
    const bannedSet = new Set(banned);

    // 创建一个对象来统计词频
    const wordCount = {};

    // 过滤掉禁用词，并统计词频
    words.forEach(word => {
        if (!bannedSet.has(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    // 找到出现频率最高的单词
    let maxFrequency = 0;
    let mostCommonWord = '';

    for (const [word, count] of Object.entries(wordCount)) {
        if (count > maxFrequency) {
            maxFrequency = count;
            mostCommonWord = word;
        }
    }

    return mostCommonWord;
};


// 示例 1
const paragraph1 = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned1 = ["hit"];
console.log(mostCommonWord(paragraph1, banned1));  // 输出: "ball"

// 示例 2
const paragraph2 = "a.";
const banned2 = [];
console.log(mostCommonWord(paragraph2, banned2));  // 输出: "a"