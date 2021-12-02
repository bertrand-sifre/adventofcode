const { default: axios } = require('axios')
require('dotenv').config()

const axiosInstance = axios.create({
  baseURL: 'https://adventofcode.com/2021/day',
  timeout: 0,
  headers: {
    Cookie: process.env.cookie,
  },
})

/**
 * @returns {Promise<string>}
 */
module.exports.getInput1 = async () => {
  return (await axiosInstance.get('1/input')).data
}

/**
 * @returns {Promise<string>}
 */
module.exports.getInput2 = async () => {
  return (await axiosInstance.get('2/input')).data
}