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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// isSameTree(tree1, tree2) 用于判断两棵树是否相同。
// findSubTree(node) 用于在 root 中寻找与 subRoot 结构相同的子树。
var isSubtree = function (root, subRoot) {
    // 定义递归函数，用于判断两棵树是否相同
    function isSameTree(tree1, tree2) {
        if (!tree1 && !tree2) return true;
        if (!tree1 || !tree2) return false;
        if (tree1.val !== tree2.val) return false;
        return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
    }

    // 定义递归函数，用于在 root 中寻找与 subRoot 结构相同的子树
    function findSubTree(node) {
        if (!node) return false;
        if (isSameTree(node, subRoot)) return true;
        return findSubTree(node.left) || findSubTree(node.right);
    }

    // 调用递归函数开始查找
    return findSubTree(root);
};



// 构建二叉树的辅助函数, 这个可以剔除中间有null的数组, 优化了代码value !== null
function buildTree(nums) {
    if (!nums.length) return null;
    // 创建根节点
    let root = new TreeNode(nums.shift());
    let queue = [root]; // 最多有两个节点，左右节点
    // 循环队列，直到队列为空或者数组为空
    while (queue.length && nums.length) {
        let node = queue.shift();
        if (nums.length) {
            const value = nums.shift();
            if (value !== null) {
                node.left = new TreeNode(value);
                // 左节点放入queue
                queue.push(node.left);
            }
        }
        if (nums.length) {
            const value = nums.shift();
            if (value !== null) {
                node.right = new TreeNode(value);
                // 右节点放入queue
                queue.push(node.right);
            }

        }
    }
    return root;
}

// leetcode最优解, 但我觉得不是
// function check(root, subRoot) {
//     if (!root && !subRoot) { return true; }
//     if (root && !subRoot) { return false; }
//     if (!root && subRoot) { return false; }
//     if (root.val != subRoot.val) { return false }
//     return check(root.left, subRoot.left) && check(root.right, subRoot.right)
// }
// var isSubtree = function (root, subRoot) {
//     if (!root && !subRoot) { return true; }
//     if (root && !subRoot) { return false; }
//     if (!root && subRoot) { return false; }
//     return check(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
// };


console.log(isSubtree(buildTree([3, 4, 5, 1, 2]), buildTree([4, 1, 2])))
console.log(isSubtree(buildTree([3, 4, 5, 1, 2, null, null, null, null, 0]), buildTree([4, 1, 2])))

