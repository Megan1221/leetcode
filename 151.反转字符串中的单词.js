/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const rs = reverseStr(removeExtraSpaces(s))
  let res = ''
  let i = 0
  while (i < rs.length){
    let w = ''
    while (rs[i] === ' ')
      i++
    while (i < rs.length && rs[i] !== ' ') {
      w += rs[i]
      i++
    }
    res += reverseStr(w) + ' '
  }
  return res.trim()
};

const reverseStr = (s) => {
  const arr = Array.from(s)
  let left = 0, right = arr.length - 1
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++
    right--
  }
  return arr.join('')
}

const removeExtraSpaces = (s) => {
  let left = 0, right = 0
  let res = ''
  while (right < s.length) {
    left = right
    while (s[right] !== ' ' && right< s.length) {
      right++
    }
    res += s.slice(left, right) + ' '
    while (s[right] === ' ' && right < s.length) {
      right ++
    }
  }
  return res
}

// 使用库函数
// var reverseWords = function (s) {
//   const stack = s.split(' ').filter (e => e.trim() !== '')
//   let res = ''
//   while (stack.length > 0) {
//     const w = stack.pop()
//     if (w)
//       res += w+' '
//   }
//   return res.trim()
// };

//reverseWords('the blue is sky')

// 拆解为：移除多余空格 + 反转整个字符串 + 反转每个单词
// 注意：字符串是不可以被更改的！
