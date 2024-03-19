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
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


var countNodes = function (root) {
    if (!root) return 0;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    // 如果左右子树高度相同，说明左子树是满的，可以直接用等比例求和公式计算节点总数
    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) + countNodes(root.right)
    }
    // 否则，左子树高度大于右子树，说明右子树的最后一层未填满，节点总数等于所有上层节点加上右子树节点数
    else {
        return Math.pow(2, rightHeight) + countNodes(root.left)
    }
};

var getHeight = function (node) {
    let height = 0;
    while (node) {
        node = node.left;
        height++;
    }
    return height;
};



// 示例测试
function buildBinaryTreeFromArray(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);

    let i = 1;
    function createLevel(node) {
        if (i >= arr.length) return;
        node.left = new TreeNode(arr[i++]);
        if (i < arr.length) {
            node.right = new TreeNode(arr[i++]);
        }
        if (node.left) createLevel(node.left);
        if (node.right) createLevel(node.right);
    }

    createLevel(root);

    return root;
}


// 现在使用这个修复后的构建函数创建完全二叉树，并计算节点数
let array = [1, 2, 3, 4, 5, 6]; // 注意：这个数组可以构造一棵完全二叉树
let root = buildBinaryTreeFromArray(array);
console.log(countNodes(root)); // 应输出：6