/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let map = new Map();
    let arr1 = magazine.split('');
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i]) + 1);
        } else {
            map.set(arr1[i], 1);
        }
    }
    let arr2 = ransomNote.split('');
    for (let i = 0; i < arr2.length; i++) {
        if (map.has(arr2[i])) {
            map.set(arr2[i], map.get(arr2[i]) - 1);
            if (map.get(arr2[i]) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true
};


console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))

// chatgpt给的方案
function canConstruct(ransomNote, magazine) {
    // 哈希表，用于统计 magazine 中每个字符的出现次数
    const charCount = new Map();
    for (const char of magazine) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // 遍历 ransomNote，对于每个字符，如果在哈希表中出现的次数大于 0，则将其出现次数减一
    for (const char of ransomNote) {
        if (charCount.has(char) && charCount.get(char) > 0) {
            charCount.set(char, charCount.get(char) - 1);
        } else {
            return false; // 如果哈希表中没有该字符，或者出现次数已经为 0，则返回 false
        }
    }

    return true;
}

// 示例测试
console.log(canConstruct("a", "b")); // 输出：false
console.log(canConstruct("aa", "ab")); // 输出：false
console.log(canConstruct("aa", "aab")); // 输出：true


// leetcode的最有方案
var canConstruct = function (ransomNote, magazine) {
    const magazineArr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        const index = magazineArr.indexOf(ransomNote[i]);
        if (index > -1) {
            // index > -1 表示找到了该字符，将其替换为 0，表示已被使用
            magazineArr[index] = 0;
        } else {
            return false;
        }
    }
    return true;
};