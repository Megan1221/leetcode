/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  // 边界
  if (!root)
    return 0
  // 递归
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

};
// @lc code=end
// 递归法：后序遍历
// 迭代法：最大的深度就是二叉树的层数，所以用层序遍历比较好

