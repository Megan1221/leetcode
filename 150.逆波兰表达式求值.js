/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  for (i of tokens) {
    if (Number.isInteger(c = Number(i))) {
      stack.push(c)
      console.log(111, stack)
    } else {
      // 注意顺序！！！！
      const x2 = stack.pop() 
      const x1 = stack.pop()
      switch (i) {
        case '+':
          stack.push(x1 + x2)
          break
        case '-':
          stack.push(x1-x2)
          break
        case '*':
          stack.push(x1*x2)
          break
        case '/':
          const remain = x1 / x2
          const floored = Math.floor(Math.abs(remain))
          stack.push(remain > 0 ? floored : -floored)
          // stack.push(x1 / x2 | 0);
          // Math.trunc()函数：截断 returns the integer part of a number by removing any fractional digits.
          break
        default:
          break
      }
    }
  }
  return stack.shift()
};
// @lc code=end

