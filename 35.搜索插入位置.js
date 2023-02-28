/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // 暴力解法
  // for (let i = 0; i < nums.length; i++){
  //   if(target <= nums[i])
  //     return i
  // }
  // return nums.length
  
  // 有序数组+搜索 => 二分法
  let left = 0, right = nums.length -1 //[left, right] 闭区间
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if(target == nums[mid])
      return mid
    if(target > nums[mid])
      left = mid + 1
    if(target < nums[mid])
      right = mid - 1
  }
  return right + 1

};
// @lc code=end

// Number是浮点数，（1+2）/2得到的是1.5，所以要parseInt

// 梳理好4种情况
// 1. 目标值在数组所有元素之前: 一定是一直right = mid -1, 直到[left,right]=[0,-1]
// 2. 目标值等于数组中某一个元素: return mid
// 3. 目标值插入数组中的位置: [right, left],插入的位置应该是left 或 right+1
// 4. 目标值在数组所有元素之后: 一定是一直left = mid + 1 直到[left,right] = [length-1, length]
// 情况1，3，4都返回right + 1

