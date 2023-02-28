/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix
  // JS 二维数组的初始化（长度不确定的时候）
  this.sumMatrix = new Array(matrix.length)
  for (k = 0; k < matrix.length; k++)
    this.sumMatrix[k] = new Array(matrix[0].length)
  this.sumMatrix[0][0] = matrix[0][0]
  for (j = 1; j < matrix[0].length; j++) {
    this.sumMatrix[0][j] = this.sumMatrix[0][j-1] + this.matrix[0][j]
  }
  // console.log(this.sumMatrix)
  for (i = 1; i < matrix.length; i++){
    this.sumMatrix[i][0] = this.sumMatrix[i-1][0] + this.matrix[i][0]
  }
  // 求二维前缀和=的递推公式
  for (i = 1; i < matrix.length; i++){
    for (j = 1; j < matrix[0].length; j++){
      this.sumMatrix[i][j] = this.sumMatrix[i][j - 1] + this.sumMatrix[i - 1][j] - this.sumMatrix[i - 1][j - 1] + this.matrix[i][j]
    }
  }
};


/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  var a, b, c, d
  a = this.sumMatrix[row2][col2]
  b = row1 === 0 ? 0 : this.sumMatrix[row1 - 1][col2]
  c = col1 === 0 ? 0 : this.sumMatrix[row2][col1 - 1]
  d = col1 === 0 || row1 === 0 ? 0 : this.sumMatrix[row1-1][col1-1]
  return a-b-c+d

};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
// 做这种初始化一次、检索多次的题目的秘诀：在初始化的时候做预处理。 
// 如果想让第 0 行与第 0 列的元素也适用递推公式，那么可以让使用的 preSum 比原矩阵 matrix 多一行一列
// 如果 preSum 矩阵大小和 martix 大小相等，则需要对第 0 行与第 0 列特殊判断