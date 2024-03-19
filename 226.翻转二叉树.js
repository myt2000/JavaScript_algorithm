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
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}





var invertTree = function (root) {
    if (!root) {
        return null;
    }

    // 交换左右子树
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    // 继续递归翻转子树
    return root;
};




// 构建二叉树的辅助函数
function buildTree(nums) {
    if (!nums.length) return null;
    let root = new TreeNode(nums.shift());
    let queue = [root];
    while (queue.length && nums.length) {
        let node = queue.shift();
        if (nums.length) {
            node.left = new TreeNode(nums.shift());
            queue.push(node.left);
        }
        if (nums.length) {
            node.right = new TreeNode(nums.shift());
            queue.push(node.right);
        }
    }
    return root;
}




// 打印翻转后的二叉树
function printInOrder(root) {
    if (root === null) return;
    console.log(root.val);
    if (root.left)
        printInOrder(root.left);
    if (root.right)
        printInOrder(root.right);
}


// 示例 1
let input1 = [4, 2, 7, 1, 3, 6, 9];
let root1 = buildTree(input1);
// 翻转二叉树
let invertedRoot1 = invertTree(root1);
printInOrder(invertedRoot1); // 输出：4,7,2,9,6,3,1

// 示例 2
// let input2 = [2, 1, 3];
// let root2 = buildTree(input2);
// let invertedRoot2 = invertTree(root2);
// printInOrder(invertedRoot2); // 输出：2,3,1

// 示例 3
// let input3 = [];
// let root3 = buildTree(input3);
// let invertedRoot3 = invertTree(root3);
// printInOrder(invertedRoot3); // 输出：无任何打印，因为树为空