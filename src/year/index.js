const adventofcode = require('../services/adventofcode')

module.exports.execute = async (year, day, level) => {
  const input = await adventofcode.getInput(year, day)
  const values = input.split('\n')
  const dayCode = require(`./${year}/day/${day}`)
  const answer = dayCode['computeLevel' + level](values)
  console.log(answer)
  // await adventofcode.postAnswer(year, day, level, answer)
}