const sample = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
]

const code = require('./index')

describe('day 2', () => {
  it('valid sample step 1', () => {
    const rst = code.computeStep1(sample)
    expect(rst).toEqual(150)
  })
  it('valid sample step 2', () => {
    const rst = code.computeStep2(sample)
    expect(rst).toEqual(900)
  })
})