/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (S, k) {
    // 去除破折号并转换为大写
    S = S.replace(/-/g, '').toUpperCase();
    const length = S.length;
    let result = '';
    let firstGroup = length % k;

    // 处理第一组字符
    if (firstGroup > 0) {
        result += S.substring(0, firstGroup) + '-';
    }

    // 处理剩余的字符
    for (let i = firstGroup; i < length; i += k) {
        result += S.substring(i, i + k) + '-';
    }

    // 去除末尾的破折号
    result = result.slice(0, -1);

    return result;
};

// 示例用法
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
console.log(licenseKeyFormatting("2-4A0r7-4k", 4))