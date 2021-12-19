const sample = [
  "[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]",
  "[[[5,[2,8]],4],[5,[[9,9],0]]]",
  "[6,[[[6,2],[5,6]],[[7,6],[4,7]]]]",
  "[[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]",
  "[[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]",
  "[[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]",
  "[[[[5,4],[7,7]],8],[[8,3],8]]",
  "[[9,3],[[9,9],[6,[4,9]]]]",
  "[[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]",
  "[[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]",
]

const code = require('./index')

describe('2021 day 18', () => {
  it('test extract', () => {
    const rst = code.extractLine("[[[0,[4,5]],[0,0]],[[[4,5],[2,6]],[9,5]]]")
    expect(rst).toEqual([{
      val: 0, depth: 3
    }, {
      val: 4, depth: 4
    }, {
      val: 5, depth: 4
    }, {
      val: 0, depth: 3
    }, {
      val: 0, depth: 3
    }, {
      val: 4, depth: 4
    }, {
      val: 5, depth: 4
    }, {
      val: 2, depth: 4
    }, {
      val: 6, depth: 4
    }, {
      val: 9, depth: 3
    }, {
      val: 5, depth: 3
    }])
  })
  it('valid reduce fct1', () => {
    const e = code.extractLine("[[[[[9,8],1],2],3],4]")
    const r = code.reduce(e)
    // console.log(r)
    const rst = code.extractLine("[[[[0,9],2],3],4]")
    expect(r).toEqual(rst)
  })
  it('valid reduce fct2', () => {
    const e = code.extractLine("[7,[6,[5,[4,[3,2]]]]]")
    const r = code.reduce(e)
    // console.log(r)
    const rst = code.extractLine("[7,[6,[5,[7,0]]]]")
    expect(r).toEqual(rst)
  })
  it('valid reduce fct3', () => {
    const e = code.extractLine("[[6,[5,[4,[3,2]]]],1]")
    const r = code.reduce(e)
    // console.log(r)
    const rst = code.extractLine("[[6,[5,[7,0]]],3]")
    expect(r).toEqual(rst)
  })
  it('valid reduce fct4', () => {
    const e = code.extractLine("[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]")
    const r = code.reduce(e)
    // console.log(r)
    const rst = code.extractLine("[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]")
    expect(r).toEqual(rst)
  })
  it('valid reduce fct5', () => {
    const e = code.extractLine("[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]")
    const r = code.reduce(e)
    // console.log(r)
    const rst = code.extractLine("[[3,[2,[8,0]]],[9,[5,[7,0]]]]")
    expect(r).toEqual(rst)
  })
  it('valid reduce fct6', () => {
    const e = code.extractLine("[[[[[4,3],4],4],[7,[[8,4],9]]],[1,1]]")
    const r = code.reduce(e, true)
    // console.log(r)
    const rst = code.extractLine("[[[[0,7],4],[[7,8],[6,0]]],[8,1]]")
    expect(r).toEqual(rst)
  })
  it('valid magnitude', () => {
    const e = code.extractLine("[9,1]")
    const rst = code.magnitude(e)
    expect(rst).toEqual(29)
  })
  it('valid magnitude', () => {
    const e = code.extractLine("[[1,2],[[3,4],5]]")
    const rst = code.magnitude(e)
    expect(rst).toEqual(143)
  })
  it('valid magnitude', () => {
    const e = code.extractLine("[[[[0,7],4],[[7,8],[6,0]]],[8,1]]")
    const rst = code.magnitude(e)
    expect(rst).toEqual(1384)
  })
  it('valid fct add', () => {
    const a = code.extractLine("[1,2]")
    const b = code.extractLine("[9,[8,7]]")
    code.add(a, b)
    const rst = code.extractLine("[[1,2],[9,[8,7]]]")
    expect(a).toEqual(rst)
  })
  it('valid basic example', () => {
    const a = code.extractLine("[[[[[1,1],[2,2]],[3,3]],[4,4]],[5,5]]")
    const r = code.reduce(a, true)
    console.log(r)
    const rst = code.extractLine("[[[[3,0],[5,3]],[4,4]],[5,5]]")
    expect(r).toEqual(rst)
  })
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    console.log(rst)
    expect(rst).toEqual(4140)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    console.log(rst)
    expect(rst).toEqual(3993)
  })
})