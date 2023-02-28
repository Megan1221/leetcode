/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var res = new ListNode(0, null)
  var resHead = res
  while (l1 != null || l2 != null) {
    var num1, num2
    if (l1 == null) {
      num1 = 0
    } else {
      num1 = l1.val
      l1 = l1.next
    }
    if (l2 == null) {
      num2 = 0
    } else {
      num2 = l2.val
      l2 = l2.next
    }
    var sum = res.val + num1 + num2
    if (sum < 10) {
      res.val = sum
      if(l1 != null || l2 != null)
        res.next = new ListNode(0, null)
    } else {
      res.val = sum - 10
      res.next = new ListNode(1, null)
    }
    res = res.next
  }
  return resHead
};
// @lc code=end

