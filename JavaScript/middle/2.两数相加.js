
// Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        let x = l1 != null ? l1.val : 0;
        let y = l2 != null ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    return dummy.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let res = addTwoNumbers(l1, l2);
while (res != null) {
    console.log(res.val);
    res = res.next;
}
