const sample = ["[({(<(())[]>[[{[]{<()<>>",
  "[(()[<>])]({[<{<<[]>>(",
  "{([(<{}[<>[]}>{[]{[(<(",
  "(((({<>}<{<{<>}{[]{[]{",
  "[[<[([]))<([[{}[[()]]]",
  "[{[{({}]{}}([{[{{{}}([",
  "{<[[]]>}<{[{[{[]{()[[[",
  "[<(<(<(<{}))><([]([]()",
  "<{([([[(<>()){}]>(<<{{",
  "<{([{{}}[<[[[<>{}]]]>[]]"
]

const code = require('./index')

describe('2021 day 10', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(26397)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(288957)
  })
})