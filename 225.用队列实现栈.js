/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.q.length - 1; i++){
    this.q.push(this.q.shift())
  }
  return this.q.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const res = this.pop()
  this.q.push(res)
  return res
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q.length === 0
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

