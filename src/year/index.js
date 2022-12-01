const adventofcode = require('../services/adventofcode')
const { JSDOM } = require('jsdom')

module.exports.execute = async (year, day, level) => {
  const answer = await this.simulate(year, day, level)
  const response = (await adventofcode.postAnswer(year, day, level, answer)).data
  const dom = new JSDOM(response)
  console.log(dom.window.document.querySelector('article').textContent)
}

module.exports.simulate = async (year, day, level) => {
  const input = await adventofcode.getInput(year, day)
  const values = input.split('\n')
  const dayCode = require(`./${year}/day/${day}`)
  const answer = dayCode['computeLevel' + level](values)
  console.log(answer)
  return answer
}