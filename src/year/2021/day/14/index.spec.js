const sample = ["NNCB", "", "CH -> B", "HH -> N", "CB -> H", "NH -> C", "HB -> C", "HC -> B", "HN -> C", "NN -> C", "BH -> H", "NC -> B", "NB -> B", "BN -> B", "BB -> N", "BC -> B", "CC -> N", "CN -> C"]

const code = require('./index')

describe('2021 day 14', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(1588)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(2188189693529)
  })
})