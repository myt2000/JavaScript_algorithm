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

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var minDepth = function (root) {
    if (!root) { return 0; }

    if (!root.left && !root.right) {
        return 1;
    }

    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);

    return (leftDepth === 0 || rightDepth === 0) ? Math.max(leftDepth, rightDepth) + 1 : Math.min(leftDepth, rightDepth) + 1;
};


// 示例1
let example1 = [3, 9, 20, null, null, 15, 7];
let root1 = buildTree(example1); // 假设buildTree是一个可以将数组转换为二叉树的函数
console.log(minDepth(root1)); // 应输出：2

// 示例2
let example2 = [2, null, 3, null, 4, null, 5, null, 6];
let root2 = buildTree(example2); // 假设buildTree是一个可以将数组转换为二叉树的函数
console.log(minDepth(root2)); // 应输出：5

// 假设buildTree函数的实现
function buildTree(nums) {
    let root = null;
    let queue = [];
    for (let num of nums) {
        if (num === null) {
            queue.push(null);
        } else {
            let node = new TreeNode(num);
            if (!queue.length) {
                root = node;
            } else {
                let parent = queue.shift();
                if (parent !== null) {
                    if ((!parent.left || parent.left === null) && (!parent.right || parent.right === null)) {
                        // 如果左右子节点都不存在或者为 null，则创建左子节点
                        parent.left = node;
                    } else if (parent.left && parent.left !== null) {
                        // 左子节点已存在且不为 null，则创建右子节点
                        parent.right = node;
                    } else {
                        // 此处应该无需额外处理，因为在上述条件中会直接创建左子节点，
                        // 若此处还能执行到，理论上是不应该发生的。
                        console.error('Invalid tree structure.');
                    }
                } else {
                    // 应该不会到达这里，因为前面有 !queue.length 的判断来初始化根节点
                    console.error('Unexpected error. No parent node found.');
                }
            }
            queue.push(node);
        }
    }
    return root;
}

// 上述代码中，我们需要一个能将数组转化为二叉树的辅助函数buildTree
// 因为JSON.stringify无法直接展示二叉树的结构，所以这里采用模拟构造二叉树的方式
// 在实际项目中，你可能已经有了这样的构造函数或者解析算法