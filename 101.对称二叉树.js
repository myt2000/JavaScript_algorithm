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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    // 使用深度优先搜索（DFS）的方法，递归比较左子树和右子树的镜像节点
    return checkSymmetry(root.left, root.right);
};

// 检查两个子树是否对称
function checkSymmetry(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) {
        return true;
    } else if (leftNode === null || rightNode === null) {
        return false;
    }
    // 比较当前节点值是否相等
    if (leftNode.val !== rightNode.val) {
        return false;
    }
    // 递归检查左子树的左节点与右子树的右节点、左子树的右节点与右子树的左节点是否对称
    return checkSymmetry(leftNode.left, rightNode.right) && checkSymmetry(leftNode.right, rightNode.left);
}

// 示例测试
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(3);

console.log(isSymmetric(root1));  // 输出：true

// let root2 = new TreeNode(1);
// root2.left = new TreeNode(2);
// root2.right = new TreeNode(2);
// root2.left.right = new TreeNode(3);
// root2.right.right = new TreeNode(3);

// console.log(isSymmetric(root2));  // 输出：false