const sample = [
  '199',
  '200',
  '208',
  '210',
  '200',
  '207',
  '240',
  '269',
  '260',
  '263'
]

const code = require('./index')

describe('day 1', () => {
  it('valid sample Level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(7)
  })
  it('valid sample Level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(5)
  })
})