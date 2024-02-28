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
 * @return {number}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    // 递归计算左右子树的最大深度
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    // 返回党建节点的最大深度，即左右子树最大深度+1
    return Math.max(leftDepth, rightDepth) + 1;
};


// 示例
let root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
);
console.log(maxDepth(root));  // 输出：3