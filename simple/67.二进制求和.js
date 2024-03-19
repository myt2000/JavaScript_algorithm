/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry === 1) {
        let sum = carry;
        if (i >= 0) {
            // parseInt这里的作用二进制转十进制
            sum += parseInt(a[i], 2);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j], 2);
            j--;
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};

// 测试用例
console.log(addBinary("11", "1")) // "100"
console.log(addBinary("1010", "1011")) // "10101"
