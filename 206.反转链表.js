/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 定义链表节点类
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 这是一个单向链表，只需要将链表翻转即可

var reverseList = function (head) {
    // prev上一个节点
    let prev = null;
    // curr当前节点 
    let curr = head;

    while (curr != null) {
        // 保存当前节点的下一个节点
        const nextTemp = curr.next;
        // 反转：将当前节点指向其前驱节点
        curr.next = prev;
        // 移动指针：前驱节点和当前节点都向前移动一位
        prev = curr;
        // 当前节点指向下一个节点
        curr = nextTemp;
    }
    return prev;
};

// 示例测试
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

let reversed_head = reverseList(head);

// 打印反转后的链表
let currentNode = reversed_head;
while (currentNode) {
    console.log(currentNode.val, '->');
    currentNode = currentNode.next;
}
