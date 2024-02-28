/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null
    }
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};


// 示例
let nums = [-10, -3, 0, 5, 9];
let result = sortedArrayToBST(nums);
console.log(result)

// 将树转换为数组表示以便于查看（可选）
function treeToArray(node) {
    if (!node) {
        return [];
    }
    return [...treeToArray(node.left), node.val, ...treeToArray(node.right)];
}
