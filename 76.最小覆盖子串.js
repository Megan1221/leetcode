/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0, right = 0
  let len = Number.MAX_SAFE_INTEGER
  let res = ""
  const tMap = new Map()
  for (let i in t) {
    const cnt = tMap.get(t[i])
    tMap.set(t[i], cnt === undefined ? 1 : cnt + 1)
  }
  const sMap = new Map()
  for (right; right < s.length; right++){
    let cnt = sMap.get(s[right])
    sMap.set(s[right], cnt === undefined ? 1 : cnt + 1)
    // console.log('+', sMap)
    while (left <= right && checkCover(sMap, tMap)) {
      if ((right - left + 1) < len) {
        res = s.substring(left, right + 1)
        len = right - left + 1
      }
      sMap.set(s[left], sMap.get(s[left]) - 1)
    // console.log('-', sMap)
      left++
      // console.log("---", left, right, subStr)
    }
  }
  return res
};
function checkCover(sMap, tMap) {
  for (let [key,value] of tMap) {
    // console.log("...",sMap.get(key), value)
    if (sMap.get(key) === undefined || sMap.get(key) < value) {
      return false
    }
  }
  return true
}
// @lc code=end
// 字符串遍历字符, 遍历Map
// 注意：这里 t 中可能出现重复的字符，所以我们要记录字符的个数(用HashMap或者数组来维护)
// 滑动窗口+计数索引

