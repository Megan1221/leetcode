/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0;
  for (let i = 1 ; i < nums.length; i++) {
    if (nums[i] !== nums[left]) {
      left++;
      nums[left]=nums[i]
    }
  }
  nums = nums.slice(0,left+1)
  return nums.length;
};
// @lc code=end
// 这种方法的好处是不用频繁调用splice。遍历一次之后，left之后的元素全部删掉就好了
// Your runtime beats 65.86 % of javascript submissions
// Your memory usage beats 92.9 % of javascript submissions(43.6 MB)

