/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let left = 0
  for (let r = 1; r <= Math.ceil(s.length / 2); r++){
    const subStr = s.substring(0, r)
    // 判断s是否由该子串重复构成
    const rStr = s.substring(r)
    const res = isSubstringPattern(rStr, subStr)
    if (res)
      return res
  }
  return false
};
function isSubstringPattern(str, subStr) {
  if (str.length === 0 || subStr.length === 0) 
    return false
  if (str.length % subStr.length !== 0) 
    return false
  let count = str.length / subStr.length
  let compStr = subStr
  while (count > 1) {
    compStr += subStr
    count--
  }
  // 可以用compArr = new Array(count).fill(subStr).join('')
  return compStr === str
}

/**
 * isSubStringPattern的逻辑可以替换为：
 * if (s.split(subs).filter(e => e !== '').length === 0)
      return true
   }
   return false
 * 
 */
// @lc code=end

