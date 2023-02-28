/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var start = 0, end = 0, res = 0, length = 0
  var charMap = new Map()
  while (end < s.length) {
    if (!charMap.has(s[end])) {
      charMap.set(s[end], 1)   
    } else {
      length = end - start,
        res = res > length ? res : length
      // 左指针收缩窗口：找到the fist index of the 重复字符，将其在map中删除
      while (start < end) {
        if (s[start] === s[end]) {
          break;
        } else {
          charMap.delete(s[start])
          start++
        }
      }
      start++
    }
    // 右指针伸展窗口
    end++
  }
  length = end - start
  return res > length ? res : length
};
// @lc code=end
// 【滑动窗口】右指针负责伸展、左指针负责（在有重复字符时）收缩

