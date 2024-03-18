
var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    // 将元素添加到queue1的末尾
    this.queue1.push(x);
    // 将queue2的元素移动到queue1, 以保持queue2为空
    while (this.queue2.length > 0 && this.queue1.length > 1) {
        if (this.queue1.length > 0) {
            let temp = this.queue1.shift()
            this.queue2.push(temp);
        }
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // 如果queue2 为空，则将 queue1 中的元素全部移到 queue2 , 并反转顺序
    if (this.queue1.length === 0) {
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift());
        }
    }
    // 返回并移除queue2的第一个元素（即栈顶元素）
    return this.queue1.shift();

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    // 同 top 方法，确保queue2 有元素可返回
    if (this.queue1.length === 0) {
        while (this.queue2.length > 0) {
            this.queue1.push(this.queue2.shift())
        }
    }
    // 返回queue2 的第一个元素
    return this.queue1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    // 检查两个队列是否都为空
    return this.queue1.length === 0 && this.queue2.length === 0;
};

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