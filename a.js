// let first = () => {
//   return new Promise((resolve, reject) => {
//     const p = new Promise((resolve, reject) => {
//       console.log(1)
//       setTimeout(() => {
//         console.log(5)
//         resolve(4)
//       }, 0)
//       resolve(6)
//     })
//     resolve(7)
//     p.then((res) => {
//       console.log(res)
//     })
//   })
// }
// first().then((res) => {
//   console.log(res)
// })
// console.log(8)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = null
let first = true
let nums = null
rl.on('line', function (line) {
    if (first) {
      n = parseInt(line)
      first = false
    }else {
      nums.push(line.split('').map(x => parseInt(x)))
    }
});

rl.on('close', function() {
  console.log(nums)
})
