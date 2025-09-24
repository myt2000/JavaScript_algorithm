/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    }

    // 检查当前节点的值是否相等
    if (p.val !== q.val) {
        return false;
    }

    // 递归检车左子树和右子树是否相同
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 示例2测试
// p = new TreeNode(1);
// p.left = new TreeNode(2);

// q = new TreeNode(1);
// q.left = null;
// q.right = new TreeNode(2);

// console.log(isSameTree(p, q));  // 输出：false

// 示例3测试
p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(1);

q = new TreeNode(1);
q.left = new TreeNode(1);
q.right = new TreeNode(2);

console.log(isSameTree(p, q));  // 输出：false