module.exports.computeLevel1 = (values) => {
  const passwords = values.map(a => a.split(': '))
  return passwords.reduce((acc, curr) => {
    const min = +curr[0].split(' ')[0].split('-')[0]
    const max = +curr[0].split(' ')[0].split('-')[1]
    const letter = curr[0].split(' ')[1]
    const o = ((curr[1] || '').match(new RegExp(letter, 'g')) || []).length
    if (o >= min && o <= max) {
      return acc + 1
    }
    return acc
  }, 0)

}
module.exports.computeLevel2 = (values) => {
  const passwords = values.map(a => a.split(': '))
  return passwords.reduce((acc, curr) => {
    const min = +curr[0].split(' ')[0].split('-')[0] - 1
    const max = +curr[0].split(' ')[0].split('-')[1] - 1
    const letter = curr[0].split(' ')[1]
    const pass = (curr[1] || '')
    const a = pass.charAt(min)
    const b = pass.charAt(max)
    if (pass && (a == letter && b != letter) || (a != letter && b == letter)) {
      // console.log(min, max, letter, pass, a, b, true)
      return acc + 1
    }
    // console.log(min, max, letter, pass, a, b, false)
    return acc
  }, 0)
}
