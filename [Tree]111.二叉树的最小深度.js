/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  // 边界
  if(!root)
    return 0
  // 到达叶子结点
  if (!root.left && !root.right)
    return 1
  
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  if (left === 0)
    return right + 1
  if (right === 0)
    return left + 1
  return Math.min(right,left) + 1
};
// @lc code=end
// 注意必须左树为空时，取右树的值+1，所以不能只是简单的min() + 1

