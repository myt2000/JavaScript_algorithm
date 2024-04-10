/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    if (flowerbed.length === 1 && flowerbed[0] === 0) return true;
    let map = new Map();
    for (let i = 0; i < flowerbed.length; i++) {
        map.set(i, flowerbed[i]);
    }
    for (let [key, value] of map) {
        if (key === 0) {
            if (map.get(key + 1) === 0 && value === 0) {
                map.set(key, 1);
                n--;
            }
        } else if (key === flowerbed.length - 1) {
            if (map.get(key - 1) === 0 && value === 0) {
                map.set(key, 1);
                n--;
            }
        } else {
            if (map.get(key - 1) === 0 && map.get(key + 1) === 0 && value === 0) {
                map.set(key, 1);
                n--;
            }

        }
    }
    return n <= 0;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1))

// leetcode最优解
var canPlaceFlowersBest = function (flowerbed, n) {
    let count = 0
    for (let i = 0, length = flowerbed.length; i < length; i++) {
        //当前位置是0，并且前后都不是1，考虑在最前和最后的特殊情况
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            count++
            i++
        }
    }
    return count >= n
};
