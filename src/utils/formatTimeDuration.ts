/*
Usage
console.log(formatDuration('01 April 2021'))
console.log(formatDuration(3500000))
*/

export const formatTimeDuration = (date: string | number, isAgo: boolean) => {
  if (!date) return

  let difference
  if (typeof date === 'string') {
    difference = Date.now() - Date.parse(date)
  } else {
    difference = date
  }

  if (difference <= 60000) return 'now'

  let time = difference
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR
  const YEAR = 365 * DAY

  const year = Math.floor(time / YEAR)
  time = year > 0 ? difference - year * YEAR : difference
  let yearsStr = year > 1 ? `${year} years, ` : `${year} year, `
  yearsStr = year > 0 ? yearsStr : ''

  const day = Math.floor(time / DAY)
  time = day > 0 ? time - day * DAY : time
  let daysStr = day > 1 ? `${day} days, ` : `${day} day, `
  daysStr = day > 0 ? daysStr : ''

  const hour = Math.floor(time / HOUR)
  time = hour > 0 ? time - hour * HOUR : time
  let hoursStr = hour > 1 ? `${hour} hours, ` : `${hour} hour, `
  hoursStr = hour > 0 ? hoursStr : ''

  const minute = Math.floor(time / MINUTE)
  time = minute > 0 ? time - minute * MINUTE : time
  let minutesStr = minute > 1 ? `${minute} minutes, ` : `${minute} minute, `
  minutesStr = minute > 0 ? minutesStr : ''

  const second = Math.floor(time / SECOND)
  let secondsStr = second > 1 ? `${second} seconds` : `${second} second`
  secondsStr = second > 0 ? secondsStr : ''

  const agoStr = isAgo ? ' ago' : ''
  const result =
    yearsStr + daysStr + hoursStr + minutesStr + secondsStr + agoStr

  return result
    .trim()
    .replace(/,$/, '')
    .replace(/(, )(\d+.\w+.\w+)$/, ' and $2')
}
