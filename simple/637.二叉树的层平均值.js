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

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function averageOfLevels(root) {
    if (!root) return [];

    const averages = [];
    const queue = [root];

    while (queue.length > 0) {
        // 初始化变量 levelSum 为当前层所有节点值之和
        let levelSum = 0;
        // 初始化 levelCount 为当前层节点数量，即队列长度。
        const levelCount = queue.length;

        for (let i = 0; i < levelCount; i++) {
            // 弹出队列头部的节点 node，并将该节点的值累加到 levelSum 上。
            const node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        averages.push(levelSum / levelCount);
    }

    return averages;
}

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


let array1 = [3, 9, 20, null, null, 15, 7];
let root1 = buildTree(array1);
console.log(averageOfLevels(root1));

let array2 = [3, 9, 20, 15, 7];
let root2 = buildTree(array2);
console.log(averageOfLevels(root2));

