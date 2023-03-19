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
  // const letterMap = new Array(26).fill(0)
  const letterMap = new Map()
  for (let i of s.split('')) {
    const cnt = letterMap.get(i)
    if (cnt === undefined) {
      letterMap.set(i,1)
    } else {
      letterMap.set(i, cnt + 1)
    }
  }
  // console.log(letterMap)
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

