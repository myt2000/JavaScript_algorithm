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
 * @param {number} val
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


// 二叉搜索树的特性：左子树小于根，右子树大于根
var searchBST = function (root, val) {
    let cur = root;
    while (cur) {
        if (cur.val === val) {
            return cur;
        } else if (cur.val > val) {
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    return null;
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

let array1 = [4, 2, 7, 1, 3];
let root1 = buildTree(array1);
console.log(searchBST(root1, 2));

let array2 = [4, 2, 7, 1, 3]
let root2 = buildTree(array2);
console.log(searchBST(root2, 5));


// leetcode最佳解法,递归解法
var searchBSTBest = function (root, val) {
    if (root === null) return null

    if (root.val === val) {
        return root
    }

    if (root.val > val) {
        return searchBST(root.left, val)
    }

    if (root.val < val) {
        return searchBST(root.right, val)
    }
};