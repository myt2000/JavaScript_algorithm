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
 * @param {number} targetSum
 * @return {boolean}
 */
// 首先定义二叉树节点类
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 主要函数：判断是否存在路径和等于targetSum的路径
var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    // 非叶子结点，继续递归搜索左右子树
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

let root = new TreeNode(5,
    new TreeNode(4,
        new TreeNode(11,
            new TreeNode(7),
            new TreeNode(2),

        )
    ),
    new TreeNode(8,
        new TreeNode(2),
        new TreeNode(13,
            new TreeNode(4),
            null
        )
    )
);

console.log(hasPathSum(root, 22));  // 输出: true