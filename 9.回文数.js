/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 转成字符串、变成回文字符串问题
// var isPalindrome = function(x) {
//   if (x < 0) 
//     return false
//   if (x >= 0 && x < 10)
//     return true
//   var num = x.toString()
//   var left = 0, right = num.length - 1
//   while (left < right) {
//     if (num[left] === num[right]) {
//       left++
//       right--
//     } else {
//       return false
//     }
//   }
//   return true
// };


// 把倒过来的值求出来
var isPalindrome = function (x) {
  var temp = x
  var res = 0
  while (x > 0) {
    var num = x % 10
    res = res * 10 + num
    // js里，所有的数都是浮点型，所以用 num1/num2 得出的数是浮点数，而非整数
    x = parseInt(x/10)
    // console.log(res,x)
  }
  return res === temp
}


// @lc code=end

