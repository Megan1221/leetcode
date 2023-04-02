/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 1; i < this.queue.length; i++){
    const x = this.queue.shift()
    this.queue.push(x)
  }
  const x = this.queue.shift()
  return x 
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // 注意this.queue.pop将会调用Array.prototype.pop
  const x = this.pop()
  this.queue.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
// 一个队列在模拟栈弹出元素的时候只要将队列头部的元素（除了最后一个元素外） 重新添加到队列尾部，此时再去弹出元素就是栈的顺序了。

