/**
 * 格式化时间
 * @param {String} date 时间 2020/11/11
 */
const formatTime = date => {
  // const year = date.getFullYear()
  // const month = date.getMonth() + 1
  // const day = date.getDate()
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()
  const day = Math.floor(date / 1000 / 60 / 60 / 24)
  const hour = Math.floor(date / 1000 / 60 / 60 - (24 * day))
  const minute = Math.floor(date / 1000 / 60 - (day * 24 * 60) - (hour * 60))
  const second = Math.floor(date / 1000 - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60))

  return [...[day, hour, minute, second].map(formatNumber)]
  // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 补0
 * @param {String} n 数字
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
