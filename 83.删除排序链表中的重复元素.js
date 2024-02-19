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
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var deleteDuplicates = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        if (head.val === head.next.val) {
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
        }
        else {
            prev.next = head;
            prev = head;
            head = head.next;
        }
    }
    if (head) { prev.next = head; }
    return dummy.next
};


// 创建链表节点
let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(3);
let node5 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 删除重复元素
let new_head = deleteDuplicates(node1);

// 定义打印链表的方法
function printList(head) {
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    console.log(values.join(" -> "));
}

// 打印结果链表
printList(new_head);