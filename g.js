// foo = () => {
//   console.log(this.a)
// }
// var obj2 = {
//   a: 2,
//   fn: foo
// }
// var obj1 = {
//   a: 1,
//   o1: obj2
// }
// obj1.o1.fn()

// for (let i = 1; i < 5; i++) {
//   setTimeout(function timer() {
//     console.log(i)
//   }, i * 1000)
// }

const promise = new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    console.log(6)
    setTimeout(() => {
      console.log(8)
    }, 0)
    resolve('success')
    console.log(7)
  }, 0)
  console.log(2)
})

setTimeout(() => {
  console.log(5)
}, 0)

console.log(9)
promise.then((res) => {
  console.log(res)
})
console.log(4)

// function longestCommonSubstring(str1, str2) {
//   const m = str1.length
//   const n = str2.length

//   // 创建一个二维数组用于存储子问题的解
//   const dp = Array(m + 1)
//     .fill(0)
//     .map(() => Array(n + 1).fill(0))

//   let maxLen = 0 // 最长公共子串的长度

//   // 使用动态规划求解最长公共子串的长度
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (str1[i - 1] === str2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1
//         maxLen = Math.max(maxLen, dp[i][j])
//       } else {
//         dp[i][j] = 0 // 如果当前字符不相同，则最长公共子串长度为0
//       }
//     }
//   }

//   return maxLen
// }

// // 示例用法
// const str1 = 'abcde'
// const str2 = 'bcdf'
// console.log(longestCommonSubstring(str1, str2)) // 输出 2，因为"bc"是两个字符串的最长连续公共子串
