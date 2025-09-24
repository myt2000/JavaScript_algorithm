/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};


console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));

// leetcode最优解
var firstUniqChar = function (s) {
    let arr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < s.length; i++) {
        if (arr[s.charCodeAt(i) - 97] === 1) return i
    }
    return -1
};