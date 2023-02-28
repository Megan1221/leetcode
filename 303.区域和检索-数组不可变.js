/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.NumArray = []
  this.preSumArray = [0]
  for (var i = 0; i < nums.length; i++) {
    this.NumArray[i] = nums[i]
    this.preSumArray[i+1] = this.preSumArray[i] + nums[i]
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // var sum = 0
  // for (var k = left; k <= right; k++) {
  //   sum += this.NumArray[k]
  // }
  var sum = this.preSumArray[right+1] - this.preSumArray[left]
  return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
// "最多调用 104 次 sumRange 方法"----说明需要尽可能降低sumRange的时间复杂度
