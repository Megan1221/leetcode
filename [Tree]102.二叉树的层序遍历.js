/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root)
    return []
  const queue = [root]
  const res = []
  while (queue.length) {
    // 记录当前层级节点数
    let length = queue.length;
    // 存放每一层的节点
    let curLevel = []
    for (let i = 0; i < length; i++) {
      const head = queue.shift()
      head.left && queue.push(head.left)
      head.right && queue.push(head.right)
      curLevel.push(head.val)
    }
    res.push(curLevel)
  }
  return res 
};
// @lc code=end

