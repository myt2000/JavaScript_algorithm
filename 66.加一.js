/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length;
    digits[n - 1] += 1;
    for (let i = n - 1; i > -1; i--) {
        if (digits[i] > 9) {
            digits[i] -= 10;
            if (i === 0) {
                digits.unshift(1);
            } else {
                digits[i - 1] += 1;
            }
        } else {
            break;
        }
    }
    return digits;
};

console.log(JSON.stringify(plusOne([1, 2, 3]))); // [1, 2, 4]
console.log(JSON.stringify(plusOne([4, 3, 2, 1]))); // [4, 3, 2, 2]
console.log(JSON.stringify(plusOne([0]))); // [1]
console.log(JSON.stringify(plusOne([9, 9, 9]))); // [1, 0, 0, 0]