/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */


class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children ? children : [];
    }
}

/**
 * 函数 maxDepth 的作用是计算树的最大深度，它使用了广度优先搜索（BFS）的方法。具体解释如下：
 * 1. 初始化深度为 0。
 * 2. 如果树的根节点为空，直接返回深度 0。
 * 3. 使用一个队列 queue，将根节点放入队列中。
 * 4. 进入循环，只要队列不为空，就继续循环。
 * 5. 在每次循环开始时，记录当前队列的长度 len，用于控制遍历同一层的节点。
 * 6. 每遍历完一层节点，深度加一。
 * 7. 对于当前队列中的每个节点，依次出队，并将它的子节点（如果有）放入队列中。
 * 8. 当队列为空时，表示已经遍历完所有节点，返回深度值。
这段代码使用了队列来实现广度优先搜索，通过不断地遍历每一层的节点，直到遍历完所有节点，来计算树的最大深度。
*/
var maxDepth = function (root) {
    let depth = 0;
    if (!root) return depth;
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        depth++;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            for (let child of node.children) {
                queue.push(child);
            }
        }
    }
    return depth;
};

// 数组构建成N叉树
function buildTree(arr) {
    if (!arr || arr.length === 0) return null;

    let nodes = [];
    let index = 0;
    let nullNum = 0;
    let flag = true;

    // 创建节点
    let root = new Node(arr[index++]);
    let node = root;
    index++;
    while (index < arr.length) {
        if (arr[index] !== null && flag) {
            let childNode = new Node(arr[index]);
            node.children.push(childNode);
            nodes.push(childNode);
            index++;
        } else {
            if (arr[index + 1] !== null) {
                flag = false;
            }
            nullNum++;
            index++;
        }
        if (nodes.length && nullNum && !flag) {
            node = nodes[nullNum - 1];
            nodes = [];
            nullNum = 0;
            flag = true;
        }
    }
    return root
}


// 示例1:
// let array1 = [1, null, 3, 2, 4, null, 5, 6];
// let root1 = buildTree(array1);
// console.log(maxDepth(root1));

// 示例2：
let array2 = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14];
let root2 = buildTree(array2);
console.log(maxDepth(root2));




// leetcode最优解
var maxDepthBest = function (root) {

    if (!root) {
        return 0
    }

    let maxArr = [0];
    for (let child of root.children) {
        maxArr.push(maxDepthBest(child))
    }

    return Math.max.apply(null, maxArr) + 1;
};