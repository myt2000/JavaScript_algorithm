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
 * @param {number} k
 * @return {boolean}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function inorderTraversal(root, result) {
    if (!root) return;
    // 左 -> 根 -> 右  中序遍历
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
}

function findTarget(root, k) {
    const nums = [];
    inorderTraversal(root, nums);
    // 双指针算法
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            return true;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return false;
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


let array1 = [5, 3, 6, 2, 4, null, 7];
let root1 = buildTree(array1);
console.log(findTarget(root1, 9));


let array2 = [5, 3, 6, 2, 4, null, 7];
let root2 = buildTree(array2);
console.log(findTarget(root2, 28));

// leetcode最佳解法
// 这段代码实现了一个高效的二分搜索树中寻找目标和的节点对的算法，
// 利用哈希表（map）记录已访问节点的值，避免重复计算，
// 同时利用二分搜索树的性质（左子节点小于父节点，右子节点大于父节点）剪枝，减少不必要的搜索。
var findTargetBest = function (root, k) {
    const map = {};
    function recursion(node) {
        if (!node) return false;
        if (map[k - node.val]) return true;
        map[node.val] = true;
        return recursion(node.left) || recursion(node.right);
    }
    return recursion(root);
};