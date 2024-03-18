
class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        // 将元素添加到 queue1 的末尾
        this.queue1.push(x);

        // 将 queue2 中的元素全部移动到 queue1，并保持 queue1 只有一个元素（栈顶元素）
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift());
        }
        // 然后将 queue1 中多余的元素移回 queue2
        for (let i = 1; i < this.queue1.length; i++) {
            this.queue2.push(this.queue1.shift());
        }
    }



    pop() {
        if (this.queue1.length === 0) {
            return null;
        }
        const top = this.queue1[0];
        // 将 queue1 的剩余元素移到 queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        // 清空 queue1，此时 queue1 中只剩下一个元素（栈顶元素）
        this.queue1.shift();
        // 将 queue2 中的元素再反转回 queue1，准备下一次操作
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift());
        }
        return top;
    }

    top() {
        if (this.queue1.length === 0) {
            return null;
        }
        // 类似于 pop 方法，但在返回栈顶元素之后不将其从队列中移除
        const top = this.queue1[0];
        if (this.queue1.length > 1) {
            let tempQueue = [];
            // 将 queue1 的剩余元素移到临时队列
            while (this.queue1.length > 1) {
                tempQueue.push(this.queue1.shift());
            }
            // 将临时队列中的元素再反转回 queue1
            while (tempQueue.length > 0) {
                this.queue1.push(tempQueue.shift());
            }
        }
        return top;
    }


    empty() {
        return this.queue1.length === 0 && this.queue2.length === 0;
    }
}

/**
 * 在使用两个队列 queue1 和 queue2 实现栈时，它们分别扮演不同的角色以模拟栈的后入先出（LIFO）特性。

    queue1：主要用来存储元素，并且始终保证新加入的元素放在队列末尾，即实现了“后入”。
    queue2：辅助队列，用于临时存储和恢复元素顺序。当需要访问栈顶元素（top()）或弹出栈顶元素（pop()）时，如果当前栈顶元素在 queue1 的首部，则将 queue1 中剩余的所有元素移动到 queue2，使得原栈顶元素成为 queue2 的首部，从而可以访问或移除该元素。然后，再将 queue2 中的元素全部回填到 queue1，保持队列间的正确顺序。
通过这种方式，即使队列本身只支持在尾部插入（push）、头部删除（shift 或 pop），我们也能通过两个队列的配合实现栈的功能：

当 push 一个元素时，直接将其放入 queue1 尾部。
在进行 top 操作时，如果栈顶元素不在 queue2 首部，就将 queue1 中的元素移到 queue2 并反转顺序。
在进行 pop 操作时，同样需要确保栈顶元素位于 queue2 的首部，然后从 queue2 移除并返回这个元素。
这样，虽然实际操作中会涉及一些额外的数据移动，但最终能够模拟栈的行为。进阶问题提到仅用一个队列实现栈，其复杂性会更高，通常会在单个队列内进行更多的数据移动来达到同样的效果。
 */


/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// 示例测试
let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // 输出：2
console.log(myStack.pop()); // 输出：2
console.log(myStack.pop()); // 输出：2
console.log(myStack.empty()); // 输出：false