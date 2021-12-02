const sampleStep1 = [
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
  it('valid sample step1', () => {
    const rst = code.computeStep1(sampleStep1)
    expect(rst).toEqual(7)
  })
  it('valid sample step2', () => {
    const rst = code.computeStep2(sampleStep1)
    expect(rst).toEqual(5)
  })
})