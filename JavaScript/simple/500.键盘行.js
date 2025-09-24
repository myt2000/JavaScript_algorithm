/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let res = [];
    for (let word of words) {
        let flag = 0;
        for (let i = 0; i < 3; i++) {
            if (keyboard[i].includes(word[0].toLowerCase())) {
                flag = i;
                break;
            }
        }
        for (let i = 1; i < word.length; i++) {
            if (!keyboard[flag].includes(word[i].toLowerCase())) {
                flag = -1;
                break;
            }
        }
        if (flag !== -1) {
            res.push(word);
        }
    }
    return res;
}


console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf", "sfd"]))


// leetcode最优解
var findWordsBest = function (words) {
    const map = new Map([
        ['q', 1], ['w', 1], ['e', 1], ['r', 1], ['t', 1], ['y', 1], ['u', 1], ['i', 1], ['o', 1], ['p', 1],
        ['a', 2], ['s', 2], ['d', 2], ['f', 2], ['g', 2], ['h', 2], ['j', 2], ['k', 2], ['l', 2],
        ['z', 3], ['x', 3], ['c', 3], ['v', 3], ['b', 3], ['n', 3], ['m', 3]
    ]), ans = []
    words.forEach(item => {//需要用两次方法 方法比遍历时间少 最需要注意的是转小写
        const target = map.get(item[0].toLowerCase())
        const flag = item.split('').every((a) => map.get(a.toLowerCase()) === target)
        if (flag) ans.push(item)
    })
    return ans
};
