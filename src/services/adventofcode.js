const { default: axios } = require('axios')

const axiosInstance = axios.create({
  baseURL: 'https://adventofcode.com/2021/day/',
  timeout: 0,
  headers: {
    Cookie: process.env.cookie,
  },
})

/**
 * @returns {Promise<string>}
 */
module.exports.getInput = async (day) => {
  try {
    return (await axiosInstance.get(`${day}/input`)).data
  } catch (e) {
    console.log(e)
  }
}

module.exports.postAnswer = async (day, level, answer) => {
  return axiosInstance.post(`${day}/answer`, { level, answer })
}