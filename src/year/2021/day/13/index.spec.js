const sample = [
  "6,10",
  "0,14",
  "9,10",
  "0,3",
  "10,4",
  "4,11",
  "6,0",
  "6,12",
  "4,1",
  "0,13",
  "10,12",
  "3,4",
  "3,0",
  "8,4",
  "1,10",
  "2,14",
  "8,10",
  "9,0",
  "",
  "fold along y=7",
  "fold along x=5",
]

const code = require('./index')

describe('2021 day 13', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(17)
  })
  it('valid sample level 2', () => {

  })
})