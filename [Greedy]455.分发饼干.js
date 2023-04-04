/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a,b) => (a-b))
  s.sort((a,b) => (a-b))
  // console.log(g,s)
  let child = 0, cookie = 0
  while (cookie < s.length) {
    if (s[cookie] >= g[child]) {
      cookie++
      child++
    } else {
      cookie++
    }
  }
  return child
};
// @lc code=end

