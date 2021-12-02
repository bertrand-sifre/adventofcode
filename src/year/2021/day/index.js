const adventofcode = require('../../../services/adventofcode')

const days = {
  1: require('./1/index'),
  2: require('./2/index'),
}

module.exports.execute = async (day, level) => {
  const input = await adventofcode.getInput(day)
  const values = input.split('\n')
  const answer = days[day]['computeLevel' + level](values)
  console.log(answer)
  // await adventofcode.postAnswer(day, level, answer)
}