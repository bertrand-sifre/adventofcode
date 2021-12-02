const adventofcode = require('./adventofcode')
const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

module.exports.build = async (year, day) => {
  const html = await adventofcode.getSource(year, day)
  const dom = new JSDOM(html)
  const sample = dom.window.document.querySelector('pre>code').textContent.replace(/\n$/, '')
  let answers = dom.window.document.querySelectorAll('code>em')
  if (answers.length > 2) {
    answers = dom.window.document.querySelectorAll('em>code')
  }
  // now write test file
  const source =
    `const sample = ${JSON.stringify(sample.split('\n'))}

const code = require('./index')

describe('${year} day ${day}', () => {
  it('valid sample level 1', () => {
    ${this.sample(answers, 1)}
  })
  it('valid sample level 2', () => {
    ${this.sample(answers, 2)}
  })
})`
  fs.writeFileSync(path.resolve(__dirname, '../year', year, 'day', day, 'index.spec.js'), source)
}

module.exports.sample = (answers, level) => {
  if (level > answers.length) {
    return ''
  }
  return `const rst = code.computeLevel${level}(sample)
    expect(rst).toEqual(${answers[level - 1].textContent})`
}