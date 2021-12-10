const endChar = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}
const startchar = {
  '(': 3,
  '[': 57,
  '{': 1197,
  '<': 25137,
}

const startToEnd = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
}

const endCharEntry = Object.keys(endChar)

const foundFirstIllegalChar = (line) => {
  const openChar = []
  for (let i = 0; i < line.length; i++) {
    const c = line.charAt(i)
    if (endCharEntry.includes(c)) {
      // check the last open
      const lastOpen = openChar.pop()
      if (endChar[c] !== startchar[lastOpen]) {
        return endChar[c]
      }
    } else {
      openChar.push(c)
    }
  }
  return 0
}

const completionLine = (line) => {
  const openChar = []
  for (let i = 0; i < line.length; i++) {
    const c = line.charAt(i)
    if (endCharEntry.includes(c)) {
      openChar.pop()
    } else {
      openChar.push(c)
    }
  }
  return openChar.reverse().map(a => startToEnd[a])
}

module.exports.computeLevel1 = (values) => {
  const rst = values.map(line => {
    return foundFirstIllegalChar(line)
  })
  return rst.reduce((acc, cur) => acc + cur, 0)
}
module.exports.computeLevel2 = (values) => {
  const pts = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
  }
  const rst = values
    .filter(a => foundFirstIllegalChar(a) === 0)
    .map(completionLine)
    .map(m => m.reduce((acc, cur) => pts[cur] + acc * 5, 0))
    .sort((a, b) => a - b)
  return rst[((rst.length / 2 | 0))]
}
