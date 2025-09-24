/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();
    let res = [];
    let num = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j] && i + j <= num) {
                num = Math.min(num, i + j)
                map.set(list1[i], num)
            }
        }
    }
    for (let [key, value] of map.entries()) {
        if (value === num) {
            res.push(key)
        }
    }
    return res;
};

console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]))

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))
console.log(findRestaurant(["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))

// leetcode最优解
var findRestaurantBest = function (list1, list2) {
    let map = new Map();
    let res = [];
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    let long = Number.MAX_VALUE;
    for (let j = 0; j < list2.length; j++) {
        let sum = 0;
        if (map.has(list2[j])) {
            sum = j + map.get(list2[j]);
            if (long > sum) {
                res.length = 0;
                res.push(list2[j]);
                long = sum;
            } else if (long === sum) {
                res.push(list2[j]);
            }
        }
    }
    return res;
};