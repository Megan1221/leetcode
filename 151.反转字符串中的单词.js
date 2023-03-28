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
  const strArr = Array.from(s)
  // 移除多余（首、尾、中间）空格
  clearSpace(strArr)
  // 反转字符串
  reverseStr(strArr, 0 , strArr.length - 1)
  // 反转单词
  let l = 0
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      reverseStr(strArr,l,i-1)
      l = i + 1
    }
  }
  return strArr.join('')

};
function clearSpace(s) {
  let r = l = 0
  // 删除开始位置和重复的空格
  while (r < s.length) {
    if (s[r] === ' ' && (r === 0 || s[r - 1] === ' ')) {
      r++
    } else {
      s[l++] = s[r++]
    }
  }
  // 移除末尾空格
  // s.trim()
  s.length = s[l - 1] === ' ' ? l - 1 : l;
  return s
}
function reverseStr(s, start,end) {
  let l = start, r = end
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
  return s
}
// @lc code=end
// 移除多余空格-将整个字符串反转-将每个单词反转


var reverseWords1 = function (s) {
  const reverse = []
  let l = 0, r = 0
  let res = ''
  while (r < s.length) {
    while (s.charAt(r) === " ")
      r++
    // 单词开始位置
    l = r++
    while (s.charAt(r) !== " " && r < s.length)
      r++
    // 以单词结尾
    if (r === s.length) {
      reverse.push(s.substring(l))
    }
    // 以空格结尾
    else
      reverse.push(s.substring(l, r))
  }
  for (let i = reverse.length - 1; i >= 0; i--) {
    res += reverse[i] + " "
  }
  // 去除首尾空格
  return res.trim()
};


// 直接用字符串转数组 const strArr = Array.from(s);