/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head, fast = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast !== slow) {
      continue
    } else {
      // fast和slow相遇了，说明有环，下面找环的入口
      let ptr1 = fast, ptr2 = head
      while (ptr1 !== ptr2) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next
      }
      return ptr1
    }
  }
  return null
};
// @lc code=end

