/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  const letterMap = new Map()
  for (let i of s.split('')) {
    const cnt = letterMap.get(i)
    if (cnt === undefined) {
      letterMap.set(i,1)
    } else {
      letterMap.set(i, cnt + 1)
    }
    // letterMap.set(i, (letterMap.get(key) || 0) + 1 )
  }
  for (let i of t.split('')) {
    const cnt = letterMap.get(i)
    if (cnt === undefined || cnt <= 0) {
      return false
    } else {
      letterMap.set(i, cnt-1)
    }
  }
  for (let i of letterMap.values()) {
    if (i > 0)
      return false
  }
  return true
  
};
// @lc code=end
// 数组就是简单的哈希表
// 也可以用数组：字符a到字符z的ASCII是26个连续的数值，所以字符a映射为下标0，字符z映射为下标25

