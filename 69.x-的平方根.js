/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // if(x === 0 || x === 1)
  //   return x
  // let res = 1
  // for (let i = 1; i < x; i++){
  //   if (i * i <= x) {
  //     res = i
  //   } else{
  //     break
  //   }
  // }
  // return res
  
  
  if(x===0)
    return 0
  let left = 0, right = x
  let mid
  while (left <= right) { 
    mid = parseInt((left + right) / 2)
    if(x / mid > mid)
      left = mid + 1
    if(x / mid < mid)
      right = mid - 1
    if(x / mid === mid)
      return mid
  }
  return left -1 

};
// @lc code=end
// 二分查找，用x/m<m而不是m*m>x防止溢出

