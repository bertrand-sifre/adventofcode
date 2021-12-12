const sample = ["start-A", "b-start", "A-c", "A-b", "b-d", "A-end", "b-end"]
const sample2 = [
  "dc-end",
  "HN-start",
  "start-kj",
  "dc-start",
  "dc-HN",
  "LN-dc",
  "HN-end",
  "kj-sa",
  "kj-HN",
  "kj-dc",
]
const sample3 = [
  "fs-end",
  "he-DX",
  "fs-he",
  "start-DX",
  "pj-DX",
  "end-zg",
  "zg-sl",
  "zg-pj",
  "pj-he",
  "RW-he",
  "fs-DX",
  "pj-RW",
  "zg-RW",
  "start-pj",
  "he-WI",
  "zg-he",
  "pj-fs",
  "start-RW",
]

const code = require('./index')

describe('2021 day 12', () => {
  it('valid sample level 1', () => {
    const rst = code.computeLevel1(sample)
    expect(rst).toEqual(10)
  })
  it('valid sample 2 level 1', () => {
    const rst = code.computeLevel1(sample2)
    expect(rst).toEqual(19)
  })
  it('valid sample 3 level 1', () => {
    const rst = code.computeLevel1(sample3)
    expect(rst).toEqual(226)
  })
  it('valid sample level 2', () => {
    const rst = code.computeLevel2(sample)
    expect(rst).toEqual(36)
  })
})

// start,A,b,A,c,A,end
//! start,A,b,A,end
//! start,A,b,end
// start,A,c,A,b,A,end
// start,A,c,A,b,end
//! start,A,c,A,end
//! start,A,end 
// start,b,A,c,A,end
//! start,b,A,end
//! start,b,end