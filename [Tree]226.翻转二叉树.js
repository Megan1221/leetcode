/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const res = root
  const dfs = function (root) {
    if (!root )
      return 
    [root.left,root.right] = [root.right, root.left]
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return res
};
// @lc code=end

var invertTree = function (root) {
  if (root) {
    const temp = invertTree(root.left)
    root.left = invertTree(root.right)
    root.right = temp
  }
  return root
};

