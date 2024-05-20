// function quick(nums, start, end) {
//   if (start >= end) return
//   let mid = part(nums, start, end)
//   quick(nums, start, mid - 1)
//   quick(nums, mid + 1, end)
// }

// function part(nums, start, end) {
//   let pivot = nums[start]
//   let left = start + 1
//   let right = end
//   while (left < right && nums[left] < pivot) {
//     left++
//   }
//   while (left < right && nums[right] > pivot) {
//     right--
//   }
//   if (nums[left] > nums[right]) {
//     ;[nums[left], nums[right]] = [nums[right], nums[left]]
//     left++
//     right--
//   }
//   if (left == right && nums[right] > pivot) {
//     right--
//   }
//   if (right != start) {
//     ;[nums[right], nums[start]] = [nums[start], nums[right]]
//   }
//   return right
// }

// let nums = [5, 2, 3, 4, 7]
// quick(nums, 0, 4)
// console.log(nums)

async function async2() {
  console.log('c')
}

async function async1() {
  console.log('a')
  await async2()
  console.log('b')
}

console.log('d')

setTimeout(() => {
  console.log('e')
}, 0)

async1()

new Promise((resolve) => {
  console.log('f')
  resolve(1)
}).then(() => {
  console.log('g')
})
console.log('h')
// dacfhbge
