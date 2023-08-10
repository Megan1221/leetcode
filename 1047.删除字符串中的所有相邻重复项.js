/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++){
    if (top(stack) === s[i]) {
      stack.pop()
      continue
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')

};

const top = (s) => {
  return s[s.length-1]
}
// @lc code=end
// 栈顶匹配

