/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // 边界条件
    if (!p && !q)
      return true
    if ((!p && q) || (p && !q) || (p.val !== q.val))
      return false
    
    // p.val = q.val
    const res1 = isSameTree(p.left, q.left)
    const res2 = isSameTree(p.right, q.right)
    return res1 && res2
};
// @lc code=end

