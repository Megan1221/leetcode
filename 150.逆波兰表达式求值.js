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
  const s = []
  for (let i = 0; i < tokens.length; i++){
    if (!isNaN(tokens[i]))
      s.push(Number(tokens[i]))
    else {
      const [n1,n2] = [s.pop(), s.pop()]
      switch (tokens[i]){
        case '+':
          s.push(n1 + n2)
          break
        case '-':
          s.push(n2 - n1)
          break
        case '*':
          s.push(n1 * n2)
          break
        case '/':
          s.push(Math.trunc(n2 / n1))
          break
        default:
          break
      }
    }
  }
  return s.pop()
};
// @lc code=end
// Number.isNaN('+')  false
// 全局的NaN('+')  true

