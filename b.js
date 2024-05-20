const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let n = null
let first = true
let nums = []
rl.on('line', function (line) {
  if (first) {
    n = parseInt(line)
    first = false
  } else {
    nums.push(line.split('').map((x) => parseInt(x)))
  }
})

rl.on('close', function () {
  console.log(nums)
})
