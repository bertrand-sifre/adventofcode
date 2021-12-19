const allAjust = [
  0, 32, 48, 56, 62, 63, 64, 96, 112,
  120, 126, 127, 128, 160, 176, 184, 190, 191,
  192, 224, 240, 248, 254, 255, 256, 288, 304,
  312, 318, 319, 320, 352, 368, 376, 382, 383,
  384, 416, 432, 440, 446, 447, 448, 480, 496,
  504, 510, 511
]

const dictionnaryApplyVector = {}

/**
 * @param {string[]} values 
 * @returns {{x:number, y:number, z:number}[][]}
 */
module.exports.extract = values => {
  const scanners = values.join('\n').split('\n\n')
  /** @type {{x:number, y:number, z:number}[][]} */
  const B = []
  scanners.forEach(scan => {
    /** @type {{x:number, y:number, z:number}[]} */
    const beacons = []
    scan.split('\n').forEach(line => {
      if (!line.startsWith('--')) {
        const values = line.split(',')
        beacons.push({
          x: +values[0],
          y: +values[1],
          z: +values[2],
        })
      }
    })
    B.push(beacons)
  })
  return B
}

const beaconToStr = (b) => {
  return `${b.x},${b.y},${b.z}`
}

/**
 * @param {{x:number, y:number, z:number}[]} b
 * @returns {{x:number, y:number, z:number}}
 */
const min = b => {
  const xs = b.map(a => a.x)
  const ys = b.map(a => a.y)
  const zs = b.map(a => a.z)
  return {
    x: Math.min(...xs),
    y: Math.min(...ys),
    z: Math.min(...zs),
  }
}

/**
 * @param {{x:number, y:number, z:number}} beacon 
 * @param {{x:number, y:number, z:number}} vector 
 * @returns 
 */
const applyVector = (beacon, vector) => {
  // const src = beaconToStr(beacon) + ";" + beaconToStr(vector)
  // if (dictionnaryApplyVector[src]) {
  //   return dictionnaryApplyVector[src]
  // }
  const val = {
    x: beacon.x - vector.x,
    y: beacon.y - vector.y,
    z: beacon.z - vector.z,
  }
  // dictionnaryApplyVector[src] = val
  return val
}
/**
 * @param {{x:number, y:number, z:number}[]} b
 * @param {number} i
 * */
module.exports.ajust = (b, i) => {
  return b.map(a => this.ajustbeacon(a, i))
}

module.exports.computeLevel1 = (values) => {
  const scanners = this.extract(values)
  const bad = [...scanners]
    .map(b => allAjust.map(a => this.ajust(b, a)))
  // remove first 
  bad.shift()
  const good = [...scanners[0]]
  while (bad.length > 0) {
    let found = false
    for (let i = 0; i < bad.length && !found; i++) {
      console.log('bad', bad.length, i)
      // for all rotate and invert captor
      const srcBeacons = bad[i]
      for (let j = 0; j < srcBeacons.length && !found; j++) {
        const beaconsAjust = srcBeacons[j]
        for (let goodIndex = 0; goodIndex < good.length && !found; goodIndex++) {
          const goodBeacons = good[goodIndex] // vector good
          const distanceGood = good.map(g => applyVector(g, goodBeacons))
          const distanceGoodStr = distanceGood.map(beaconToStr)
          for (let ajustIndex = 0; ajustIndex < beaconsAjust.length && !found; ajustIndex++) {
            const b = beaconsAjust[ajustIndex] // vector b
            const distanceB = beaconsAjust.map(e => applyVector(e, b))
            const distanceBstr = distanceB.map(beaconToStr)
            const ff = distanceGoodStr.filter(s => distanceBstr.includes(s))
            if (ff.length >= 12) {
              found = true
              // remove from bad
              bad.splice(i, 1)
              // insert all not found
              const notff = distanceBstr
                .filter(s => !distanceGoodStr.includes(s))
                .map(s => {
                  const split = s.split(',')
                  return { x: +split[0], y: +split[1], z: +split[2] }
                })
              // compute coordonate
              const toInsertion = notff
                .map(g => applyVector(g, { x: -goodBeacons.x, y: -goodBeacons.y, z: -goodBeacons.z }))
              good.push(...toInsertion)
              console.log('FOUND------------------', bad.length, good.length, ff.length)
              console.log(good.sort((a, b) => a.x - b.x).map(beaconToStr).join('\n'))
            }
          }
        }
      }
    }
  }
  return good.length
}
module.exports.computeLevel2 = (values) => {
}
/**
 * 
 * @param {{x:number, y:number, z:number}} e 
 * @param {number} i 
 */
module.exports.ajustbeacon = (e, i) => {
  let bin = i.toString(2)
  while (bin.length < 9) {
    bin = "0" + bin;
  }
  // console.log(bin)
  const x = bin.charAt(0) === '0' ? e.x : -e.x
  const y = bin.charAt(1) === '0' ? e.y : -e.y
  const z = bin.charAt(2) === '0' ? e.z : -e.z
  if (bin.charAt(3) === '0') {
    return { x, y, z }
  }
  if (bin.charAt(4) === '0') {
    return { x: y, y: x, z }
  }
  if (bin.charAt(5) === '0') {
    return { x, y: z, z: y }
  }
  if (bin.charAt(6) === '0') {
    return { x: z, y, z: x }
  }
  if (bin.charAt(7) === '0') {
    return { x: y, y: x, z }
  }
  if (bin.charAt(8) === '0') {
    return { x: y, y: z, z: x }
  }
  // if (bin.charAt(9) === '0') {
  return { x: z, y: x, z: y }
  // }

}