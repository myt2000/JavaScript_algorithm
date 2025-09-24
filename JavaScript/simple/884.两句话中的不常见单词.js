/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

/**
 * 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。
*/
var uncommonFromSentences = function (s1, s2) {
    let map = new Map()
    let arr = s1.split(' ').concat(s2.split(' '))
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    let res = []
    for (let [key, value] of map) {
        if (value === 1) {
            res.push(key)
        }
    }
    return res
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))

console.log(uncommonFromSentences("apple apple", "banana"))