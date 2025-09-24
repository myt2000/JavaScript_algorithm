/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (!nums.length) return 0;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

let nums1 = [3, 2, 2, 3];
let val1 = 3;
let new_length1 = removeElement(nums1, val1);
console.log(new_length1)
console.log(nums1)

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let new_length2 = removeElement(nums2, val2);
console.log(new_length2);
console.log(nums2)