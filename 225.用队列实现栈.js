
class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        // 将元素添加到 queue1 的末尾
        this.queue1.push(x);
        // 确保 queue2 为空，然后将 queue1 中的所有元素移动到 queue2，并反转顺序
        while (this.queue2.length > 0 || this.queue1.length > 1) {
            if (this.queue1.length > 0) {
                this.queue2.push(this.queue1.shift());
            }
        }
    }

    pop() {
        // 如果 queue1 为空，则将 queue2 中的元素全部移到 queue1，并返回并移除 queue1 的第一个元素（即栈顶元素）
        if (this.queue1.length === 0) {
            while (this.queue2.length > 0) {
                this.queue1.push(this.queue2.shift());
            }
        }
        return this.queue1.shift();
    }

    top() {
        // 同 pop 方法，确保栈顶元素位于 queue1
        if (this.queue1.length === 0) {
            while (this.queue2.length > 0) {
                this.queue1.push(this.queue2.shift());
            }
        }
        return this.queue1[0];
    }

    empty() {
        return this.queue1.length === 0 && this.queue2.length === 0;
    }
}

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
console.log(myStack.top()); // 输出：2
console.log(myStack.pop()); // 输出：2
console.log(myStack.empty()); // 输出：false