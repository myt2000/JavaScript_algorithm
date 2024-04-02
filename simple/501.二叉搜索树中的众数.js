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
    constructor(val, left = null, right = null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

var findMode = function (root) {
    const map = {};
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        map[node.val] = (map[node.val] || 0) + 1;
        traverse(node.right);
    };

    traverse(root);

    let maxCount = 0;
    for (const val in map) {
        maxCount = Math.max(maxCount, map[val]);
    }

    const result = [];
    for (const val in map) {
        if (map[val] === maxCount) {
            result.push(parseInt(val));
        }
    }

    return result;
};

/**
 * 进行中序遍历 BST，将节点值存入数组中，并在遍历过程中记录每个节点值出现的次数。
 * 找到出现次数最多的节点值。
 * 遍历记录节点值出现次数的对象，将出现次数最多的节点值加入结果数组中。
 * 返回结果数组。
*/



// 构建二叉树的辅助函数, 这个可以剔除中间有null的数组
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
            if (value) {
                node.left = new TreeNode(value);
                // 左节点放入queue
                queue.push(node.left);
            }
        }
        if (nums.length) {
            const value = nums.shift();
            if (value) {
                node.right = new TreeNode(value);
                // 右节点放入queue
                queue.push(node.right);
            }

        }
    }
    return root;
}

// 现在使用这个修复后的构建函数创建完全二叉树，并计算节点数
let array1 = [1, null, 2, 2]; // 注意：这个数组可以构造一棵完全二叉树
let root1 = buildTree(array1);
console.log(findMode(root1)); // 应输出：2


let array2 = [0];
let root2 = buildTree(array2);
console.log(findMode(root2));   // 应输出：0


// leetcode最优解，使用递归直接得到答案
var findModeBest = function (root) {
    let res = []; // 结果数组
    let pre = null; // 指向上一个节点
    let maxCount = 1; // 最大出现次数
    let count = 1; // 出现次数
    const inorder = function (node) {
        if (!node) {
            return;
        }
        inorder(node.left); // 左
        // 中
        count = pre && node.val === pre.val ? count + 1 : 1;
        if (count === maxCount) {
            res.push(node.val);
        } else if (count > maxCount) {
            maxCount = count;
            res = [node.val];
        }
        pre = node;
        inorder(node.right); // 右
    }
    inorder(root);
    return res;
};