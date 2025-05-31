"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  light?: boolean
  small?: boolean
}

export default function CountdownTimer({ light = false, small = false }: CountdownTimerProps) {
  const [hours, setHours] = useState(24)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    // Check if we have a saved end time in localStorage
    const savedEndTime = localStorage.getItem("countdownEndTime")
    let endTime: number

    if (savedEndTime) {
      endTime = Number.parseInt(savedEndTime, 10)

      // If the saved end time is in the past, set a new one
      if (endTime < Date.now()) {
        endTime = Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
        localStorage.setItem("countdownEndTime", endTime.toString())
      }
    } else {
      // No saved end time, set one for 24 hours from now
      endTime = Date.now() + 24 * 60 * 60 * 1000
      localStorage.setItem("countdownEndTime", endTime.toString())
    }

    const totalDuration = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    const updateCountdown = () => {
      const now = Date.now()
      const timeLeft = endTime - now

      if (timeLeft <= 0) {
        // Reset the countdown if it reaches zero
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        setProgress(0)

        // Set a new end time
        const newEndTime = Date.now() + 24 * 60 * 60 * 1000
        localStorage.setItem("countdownEndTime", newEndTime.toString())
        return
      }

      // Calculate hours, minutes, seconds
      const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60))
      const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)

      // Calculate progress percentage
      const elapsed = totalDuration - timeLeft
      const progressPercentage = 100 - (elapsed / totalDuration) * 100

      setHours(hoursLeft)
      setMinutes(minutesLeft)
      setSeconds(secondsLeft)
      setProgress(progressPercentage)
    }

    // Update immediately
    updateCountdown()

    // Then update every second
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (small) {
    return (
      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
        <Clock className="h-4 w-4 mr-1 text-[#22b97d]" />
        <span className="text-sm font-medium">
          {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </span>
      </div>
    )
  }

  const textColor = light ? "text-white" : "text-gray-900"
  const boxBgColor = light ? "bg-white/20" : "bg-gray-900"
  const boxTextColor = light ? "text-white" : "text-yellow-400"
  const progressBgColor = light ? "bg-white/20" : "bg-gray-200"
  const progressFillColor = light ? "bg-white" : "bg-[#22b97d]"

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-center mb-2">
        <Clock className={`h-5 w-5 mr-2 ${light ? "text-white" : "text-[#22b97d]"}`} />
        <h3 className={`font-bold ${textColor}`}>Special Offer Ends In:</h3>
      </div>

      <div className="flex justify-center gap-2 mb-3">
        <div className={`${boxBgColor} rounded-lg p-3 min-w-[70px] text-center`}>
          <span className={`text-2xl font-bold ${boxTextColor}`}>{hours.toString().padStart(2, "0")}</span>
          <p className={`text-xs uppercase opacity-80 ${light ? "text-white" : "text-gray-400"}`}>Hours</p>
        </div>
        <div className="flex items-center">
          <span className={`text-2xl font-bold ${textColor}`}>:</span>
        </div>
        <div className={`${boxBgColor} rounded-lg p-3 min-w-[70px] text-center`}>
          <span className={`text-2xl font-bold ${boxTextColor}`}>{minutes.toString().padStart(2, "0")}</span>
          <p className={`text-xs uppercase opacity-80 ${light ? "text-white" : "text-gray-400"}`}>Minutes</p>
        </div>
        <div className="flex items-center">
          <span className={`text-2xl font-bold ${textColor}`}>:</span>
        </div>
        <div className={`${boxBgColor} rounded-lg p-3 min-w-[70px] text-center`}>
          <span className={`text-2xl font-bold ${boxTextColor}`}>{seconds.toString().padStart(2, "0")}</span>
          <p className={`text-xs uppercase opacity-80 ${light ? "text-white" : "text-gray-400"}`}>Seconds</p>
        </div>
      </div>

      <div className={`h-2 ${progressBgColor} rounded-full overflow-hidden`}>
        <div
          className={`h-full ${progressFillColor} transition-all duration-1000 ease-linear`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
