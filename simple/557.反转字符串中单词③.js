/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            let Cur = [];
            for (let j = arr[i].length - 1; j >= 0; j--) {
                Cur.push(arr[i][j]);
            }
            res.push(Cur.join(''));
        }
    }
    return res.join(' ');
};


console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))

// leetcode最优解
var reverseWordsBest = function (s) {
    return s.split(" ").map(it => it.split("").reverse().join("")).join(" ");
};