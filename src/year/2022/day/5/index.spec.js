const sample = ["    [D]    ", "[N] [C]    ", "[Z] [M] [P]", " 1   2   3 ", "", "move 1 from 2 to 1", "move 3 from 1 to 3", "move 2 from 2 to 1", "move 1 from 1 to 2"]

const code = require('./index')

describe('2022 day 5', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual('CMZ')
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual('MCD')
  })
})