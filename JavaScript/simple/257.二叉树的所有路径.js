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
 * @return {string[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var binaryTreePaths = function (root) {
    let result = [];

    function dfs(node, pathStr = '') {
        if (!node) return;
        // 将当前节点添加到路径字符串中
        pathStr += `${node.val}->`;

        // 如果是叶子节点，将路径字符串加入结果列表，并去掉末尾的"->"
        if (!node.left && !node.right) {
            result.push(pathStr.slice(0, -2))
            return;
        }

        // 递归遍历左子树和右子树
        dfs(node.left, pathStr);
        dfs(node.right, pathStr);

    }
    dfs(root);
    return result;
};


// 示例测试
let input1 = [1, 2, 3, null, 5];
let root1 = buildTree(input1);
console.log(JSON.stringify(root1));
console.log(binaryTreePaths(root1)); // 输出：["1->2->5", "1->3"]

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

// 最优解
var binaryTreePathsBest = function (root) {
    const res = [];
    function preOrder(node, path) {
        if (!node) return;
        if (node && !node.left && !node.right) {
            path.push(node.val);
            res.push(path.join('->'))
            return
        }
        preOrder(node.left, [...path, node.val])
        preOrder(node.right, [...path, node.val])
    }
    preOrder(root, [])
    return res
};