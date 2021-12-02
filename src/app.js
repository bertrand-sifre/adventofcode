const fs = require('fs')
const path = require('path')

require('dotenv').config()

const { program } = require('commander')
const version = require('../package.json').version

program
  .version(version)

program
  .command('solve')
  .requiredOption('-d, --day <number>', 'day of calendar')
  .requiredOption('-l, --level <number>', 'level of day')
  .option('-y, --year <number>', 'year of calendar (default current year)', new Date().getFullYear() + '')
  .action(async (options) => {
    const day = require(`./year/${options.year}/day`)
    await day.execute(options.day, options.level)
  })

program
  .command('make-folder-day')
  .option('-y, --year <number>', 'year of calendar (default current year)', new Date().getFullYear() + '')
  .action((options) => {
    const p = path.resolve(__dirname, 'year', options.year)
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p)
    }
    for (let i = 1; i <= 25; i++) {
      const d = path.resolve(p, 'day', i + '')
      if (!fs.existsSync(d)) {
        fs.mkdirSync(d)
      }
      const indexFile = path.resolve(d, 'index.js')
      if (!fs.existsSync(indexFile)) {
        fs.writeFileSync(indexFile, `module.exports.computeLevel1 = (values) => {\n}\nmodule.exports.computeLevel2 = (values) => {\n}\n`)
      }
    }
  })

program.parse(process.argv)