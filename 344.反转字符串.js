/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let l = 0, r = s.length - 1
  while (l < r) {
    // let temp = s[l]
    // s[l] = s[r]
    // s[r] = temp
    [s[l],s[r]] = [s[r],s[l]]
    l++
    r--
  }
};
// @lc code=end
// 字符串操作：length，可以用下标访问
