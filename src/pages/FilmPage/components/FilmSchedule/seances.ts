interface Time {
  str: string
  secondsTime: number
}

export const seancesTime: Time[] = [
  { str: '10:00', secondsTime: 36000 },
  { str: '11:00', secondsTime: 39600 },
  { str: '12:00', secondsTime: 43200 },
  { str: '13:00', secondsTime: 46800 },
  { str: '14:00', secondsTime: 50400 },
  { str: '15:00', secondsTime: 54000 },
  { str: '16:00', secondsTime: 57600 },
  { str: '17:00', secondsTime: 61200 },
  { str: '18:00', secondsTime: 64800 },
  { str: '19:00', secondsTime: 68400 },
  { str: '20:00', secondsTime: 72000 },
  { str: '21:00', secondsTime: 75600 },
  { str: '22:00', secondsTime: 79200 },
  { str: '23:00', secondsTime: 82800 },
  { str: '00:00', secondsTime: 86400 }
]

export const maxTimeDifference =
  seancesTime[seancesTime.length - 1].secondsTime - seancesTime[0].secondsTime
export const minTime = seancesTime[0].secondsTime

export const secondsFromTimeString = (time: string): number => {
  const timeArray = time.split(':')
  const hours = +timeArray[0]
  const minutes = +timeArray[1]
  const seconds = hours * 3600 + minutes * 60
  return seconds
}

export const seanceStyle = (time: string, index = 0, num = 0) => {
  const leftStyle = `${((secondsFromTimeString(time) - minTime) / maxTimeDifference) * 100}%`
  const topStyle = `${(index / num) * 50}%`

  return { left: leftStyle, top: topStyle }
}
