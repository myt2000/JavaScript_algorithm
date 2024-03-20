/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

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


// 进阶：如果字符串中包含unicode字符，你能否调整你的算法来应对这种情况？

function isUnicodeAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

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
}

// 示例测试（假设字符串只包含 Unicode 小写字母）
console.log(isUnicodeAnagram("ānagrām", "nagrāmā")); // 输出：true