// // 用一个列表展示全部商品的数据  分页
// function fangdou(fn, timeout) {
//   let timer = null
//   return function (...res) {
//     if (timer) {
//       clearTimeout(timer)
//       setTimeout(() => {
//         fn(...res)
//       }, timeout)
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(this, ...res)
//       }, timeout)
//     }
//   }
// }

const { isUndefined } = require("element-plus/lib/utils")

// function fetchdata(key) {
//   console.log(处理一些请求)
//   return a
// }

// fangdou(fetchdata, 5000)('

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}



两数之和：
    给定一个整数 数组nums 和一个整数 目标值target，请你在该数组中找出和为目标值target的那两个整数，并返回它们的 数组下标。
    你可以假设每一种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。非暴力求解，限定只能使用一次循环。 

function consult(nums, target) => {
    const preNums = {}

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i] 
        const targetNum = target - curNum
        const targetNumIndex = preNums[targetNum]
        if (targetNumIndex != undefined) {
            return [targetNumIndex, i]
        }else {
            preNums[curNum] = i
        }
    }
}