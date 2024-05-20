function findLongestValidWordLength(str) {
  // 将字符串按照非字母字符切割成数组
  const words = str.split(/[^a-zA-Z]+/)
  console.log(words)

  let maxLength = 0

  // 遍历切割后的单词数组
  for (let word of words) {
    // 如果单词不为空且不包含数字，则更新最长有效单词的长度
    if (word.length > 0 && !/\d/.test(word)) {
      maxLength = Math.max(maxLength, word.length)
    }
  }

  return maxLength
}

// 示例用法
const str = 'I have 3 appes and 5 b1ananas.'
const longestLength = findLongestValidWordLength(str)
console.log('最长有效单词的长度:', longestLength)

arr.process(this, (l = 9))
