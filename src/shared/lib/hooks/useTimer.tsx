import { useEffect, useState } from 'react'

const DEFAULT_INITIAL_TIME = -1

export const useTimer = () => {
  const [time, setTime] = useState(DEFAULT_INITIAL_TIME)

  const start = (initial: number) => {
    setTime(initial)
  }

  useEffect(() => {
    if (time === DEFAULT_INITIAL_TIME) return

    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 950)

    return () => clearInterval(interval)
  }, [time])

  return { time, timesUp: time === 0, start }
}
