var lengthOfLongestSubstring = function (s) {
  const map = new Map() // 用于存储字符及其索引位置
  let maxLength = 0 // 最长子串长度
  let left = 0 // 左指针

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (map.has(char) && map.get(char) >= left) {
      // 如果字符已经在哈希表中，并且其索引位置在左指针的右侧
      left = map.get(char) + 1 // 更新左指针位置为重复字符的下一个位置
    }
    map.set(char, right) // 更新字符的索引位置
    maxLength = Math.max(maxLength, right - left + 1) // 更新最长子串长度
  }

  return maxLength
}

console.log(lengthOfLongestSubstring('abacddeffg'))

// js 查看dok的日志
// 在JavaScript中查看Dokku的日志，你可以使用dokku logs命令。这个命令会显示你应用的标准输出和错误日志。
// 这家公司对你有兴趣
// 这家公司我听出来了,就是想要高学历的
// 好拉投资    他想要全寨 对的对的
// 他要全寨 然后进去大概率是996 基本上,不是  人家一看就是一个部门 完美世界的部门 下面的一个部门分出来的
