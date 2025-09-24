/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) {    // 如果根节点为空，则直接返回空数组
        return [];
    }
    let result = [];

    function traverse(node) {
        result.push(node.val);
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(root); // 从根节点开始遍历

    return result; // 返回结果数组
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(root)); // 输出：[1, 2, 3]