/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  if (!root)
    return null
  let res
  // 层序遍历
  const queue = [root]
  while (queue.length !== 0) {
    const len = queue.length
    for (let i = 0; i < len; i++){
      const node = queue.shift()
      if (i === 0) {
        res = node.val
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
};
// @lc code=end

