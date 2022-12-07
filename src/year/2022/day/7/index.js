/**
 * @param {string[]} values
 */
const getFolder = (values) => {
  const folders = { "": 0 }
  const cwd = ['']
  // skip first it's a '$ cd /'
  values.slice(1).forEach(line => {
    if (line.startsWith('dir')) {
      // push a dir
      const fullName = [...cwd, line.slice(4)].join('/')
      folders[fullName] = 0
    } else if (line.startsWith('$')) {
      // change directory
      if (line.startsWith('$ cd ..')) {
        // go back
        cwd.pop()
      } else if (line.startsWith('$ cd')) {
        // go next
        const name = line.slice(5)
        cwd.push(name)
      }
    } else {
      // push a file recursivly with all other folder
      const size = +line.split(' ')[0]
      for (let i = cwd.length; i > 0; i--) {
        const fullName = cwd.slice(0, i).join('/')
        folders[fullName] += size
      }
    }
  })
  return folders
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel1 = (values) => {
  const folders = getFolder(values)
  return Object.values(folders)
    .filter(v => v < 100000)
    .reduce((acc, v) => {
      return acc + v
    }, 0)
}

/**
 * @param {string[]} values
 */
module.exports.computeLevel2 = (values) => {
  const folders = getFolder(values)
  const totalSpace = 70000000
  const spaceNeeded = 30000000
  const rootSpace = folders['']
  const unusedSpace = totalSpace - rootSpace
  const removeSpace = spaceNeeded - unusedSpace
  return Object.values(folders).filter(v => {
    return v > removeSpace
  }).map(v => {
    return v
  }).sort((a, b) => a - b)[0]
}
