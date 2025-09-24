/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 将每位数字进行相加，然后每位数字算完之后，保留进位，再进行下一位计算
function addStrings(num1, num2) {
    let carry = 0;
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
}

// 示例用法
console.log(addStrings("11", "123")); // 输出："134"
console.log(addStrings("456", "77")); // 输出："533"
console.log(addStrings("0", "0"));   // 输出："0"


var addStringsBest = function (num1, num2) {
    while (num1.length > num2.length) {
        num2 = '0' + num2;
    }
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    let res = '';
    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        const sum = +num1[i] + +num2[i] + carry;
        res = sum % 10 + res;
        carry = sum > 9 ? 1 : 0;
    }
    return carry == 1 ? '1' + res : res;
};