/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.si = []
  this.so = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.si.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.so.length === 0) {
    while (this.si.length > 0) {
      this.so.push(this.si.pop())
    }
  }
  return this.so.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const res = this.pop()
  if (res) {
    this.so.push(res) 
  }
  return res
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.si.length + this.so.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

