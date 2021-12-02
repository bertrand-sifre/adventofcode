const { default: axios } = require('axios')

const axiosInstance = axios.create({
  baseURL: 'https://adventofcode.com/',
  timeout: 0,
  headers: {
    Cookie: process.env.cookie,
  },
})

/**
 * @returns {Promise<string>}
 */
module.exports.getInput = async (year, day) => {
  return (await axiosInstance.get(`${year}/day/${day}/input`)).data
}

module.exports.postAnswer = async (year, day, level, answer) => {
  return axiosInstance.post(`${year}/day/${day}/answer`, { level, answer })
}

module.exports.getSource = async (year, day) => {
  return (await axiosInstance.get(`${year}/day/${day}`)).data
}