/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

function Stack() {
  this.value = new Array()
}
Stack.prototype.top = function () {
  const x = this.value.pop()
  this.value.push(x)
  return x
}
Stack.prototype.push = function (x) {
  return this.value.push(x)
}
Stack.prototype.pop = function () {
  return this.value.pop()
}
Stack.prototype.empty = function () {
  return this.value.length === 0
}

var isValid = function(s) {
  const stack = new Stack()
  const strArr = Array.from(s)
  const map = new Map([[')', '('], ['}', '{'], [']','[']])
  for (let i of strArr) {
    if (i === '(' || i === '{' || i === '[') {
      stack.push(i)
    }
    if (i === ')' || i === '}' || i === ']') {
      if (stack.top() === map.get(i)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.empty()
};

// 简化版本
var isValid2 = function (s) {
  const stack = [],
    map = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    };
    if (map[stack.pop()] !== x) return false;
  }
  return !stack.length;
};

// 其他版本
var isValid3 = function (s) {
  const left = ['(', '{', '[']
  const right = [')', '}', ']']
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i])
    } else if (right.includes(s[i]) && stack.length > 0) {
      if (left.indexOf(stack.pop()) === right.indexOf(s[i]))
        continue
      else return false
    } else return false
  }
  return stack.length === 0
};
// @lc code=end

