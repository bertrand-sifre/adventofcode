module.exports.computeLevel1 = (values) => {
  const integerValues = values.map(a => +a)
  for (let i = 0; i < integerValues.length; i++) {
    const a = integerValues[i]
    for (let j = 0; j < integerValues.length; j++) {
      if (i !== j) {
        const b = integerValues[j]
        if (a + b === 2020) {
          return a * b
        }
      }
    }
  }
}
module.exports.computeLevel2 = (values) => {
  const integerValues = values.map(a => +a)
  for (let i = 0; i < integerValues.length; i++) {
    const a = integerValues[i]
    for (let j = 0; j < integerValues.length; j++) {
      if (i !== j) {
        const b = integerValues[j]
        for (let k = 0; k < integerValues.length; k++) {
          if (i !== k && j !== k) {
            const c = integerValues[k]
            if (a + b + c === 2020) {
              return a * b * c
            }
          }
        }
      }
    }
  }
}
