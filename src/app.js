require('dotenv').config()
const { program } = require('commander')
const version = require('../package.json').version
const day = require('./day')

program
  .version(version)

program
  .command('solve')
  .requiredOption('-d, --day <number>', 'day of calendar')
  .requiredOption('-l, --level <number>', 'level of day')
  .action(async (options) => {
    await day.execute(options.day, options.level)
  })

program.parse(process.argv)