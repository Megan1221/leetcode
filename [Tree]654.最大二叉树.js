/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null
  }
  // 只是求max，其实不用排序，遍历一下就好
  const old = [...nums] 
  nums.sort((a, b) => a - b)
  const val = nums.pop()
  const idx = old.indexOf(val)
  const root = new TreeNode(val)
  root.left = constructMaximumBinaryTree([...old.slice(0,idx)])
  root.right = constructMaximumBinaryTree([...old.slice(idx + 1)])
  return root
};
// @lc code=end
// 类似用数组构造二叉树的题目，每次分隔尽量不要定义新的数组，而是通过下标索引直接在原数组上操作，这样可以节约时间和空间上的开销。

