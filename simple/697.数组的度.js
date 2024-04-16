/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = new Map();
    let max = 0;
    let min = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let temp = map.get(nums[i]);
            temp.count++;
            temp.end = i;
            map.set(nums[i], temp);
        } else {
            map.set(nums[i], { count: 1, start: i, end: i });
        }

    }
    for (let [key, value] of map) {
        if (value.count > max) {
            max = value.count;
            min = value.end - value.start + 1;
        } else if (value.count === max) {
            min = Math.min(min, value.end - value.start + 1);
        }
    }
    return min;
}


console.log(findShortestSubArray([1, 2, 2, 3, 1]))
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))
