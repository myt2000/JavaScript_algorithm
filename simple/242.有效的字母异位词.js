/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 思路：构建一个map 字典结构，先遍历s， 统计字母出现的次数，然后遍历t，对每次出现的字母一次相同是否相同，相同对应的值就减1，最后判断map是否值都为0，如果都为0，返回true，否则返回false
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // map和object的区别
    const countMap = new Map();

    for (const char of s) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        const count = countMap.get(char);
        if (count === undefined || count === 0) {
            return false;
        } else {
            countMap.set(char, count - 1);
        }
    }

    // 使用 for...of 循环遍历 Map 的 values
    for (const count of countMap.values()) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
};

// 示例测试
console.log(isAnagram("anagram", "nagaram")); // 输出：true
console.log(isAnagram("rat", "car")); // 输出：false



// 示例测试（假设字符串只包含 Unicode 小写字母）
console.log(isAnagram("ānagrām", "nagrāmā")); // 输出：true


// 最优解, 生成一个26长度的数组，

var isAnagramBest = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const base = 'a'.charCodeAt(0);
    const alphabetArr = new Array(26).fill(0);
    for (const alphabet of s) {
        const idx = alphabet.charCodeAt(0) - base;
        // 这里是自增操作，可以直接赋值到数组
        alphabetArr[idx]++;
    }
    for (const alphabet of t) {
        const idx = alphabet.charCodeAt(0) - base;
        if (!alphabetArr[idx]) {
            return false;
        } else {
            alphabetArr[idx]--;
        }
    }

    return true;
};

// 示例测试
console.log(isAnagramBest("anagram", "nagaram")); // 输出：true
console.log(isAnagramBest("rat", "car")); // 输出：false