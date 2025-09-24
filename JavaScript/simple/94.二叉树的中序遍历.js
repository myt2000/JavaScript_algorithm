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

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderTraversal = function (root) {
    let result = [];
    const dfs = (node) => {
        if (node === null) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right)
    };
    dfs(root);
    return result;

};

// 示例测试
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(inorderTraversal(root));  // 输出：[2, 1, 3]