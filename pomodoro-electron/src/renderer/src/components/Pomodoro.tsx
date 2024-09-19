import { useState, useEffect, useRef } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'

import audio from '../assets/digital-alarm.mp3'

export function Pomodoro() {
  const [mode, setMode] = useState('work')
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [count, setCount] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const modes = {
    work: {
      label: 'Work! 🤓',
      time: 25 * 60,
      textColor: 'text-violet-500',
      bgColor: 'bg-violet-500'
    },
    shortBreak: {
      label: 'Short Break! 🥱',
      time: 5 * 60,
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-600'
    },
    longBreak: {
      label: 'Long Break! 🛏️',
      time: 15 * 60,
      textColor: 'text-green-600',
      bgColor: 'bg-green-600'
    }
  }

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        console.log('playing')
      }).catch((error) => {
        console.log('error', error)
      })
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      if (mode === 'work') {
        setCount(count + 1)
        if (count === 3) {
          setMode('longBreak')
          setTime(modes.longBreak.time)
          setCount(0)
        } else {
          setMode('shortBreak')
          setTime(modes.shortBreak.time)
        }
      } else {
        setMode('work')
        setTime(modes.work.time)
      }
      playSound()
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setMode('work')
    setTime(modes['work'].time)
    setCount(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60) // floor = arredonda para baixo
    const secs = seconds % 60 // restante da divisão
    // padStart = adiciona 0 a esquerda, primeiro argumento é o tamanho da string
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress =
    ((modes[mode].time - time) / modes[mode].time) * 100

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <audio ref={audioRef} src={audio} preload="auto" />
      <div className="flex flex-col items-center justify-between">
        <div className="relative">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-white stroke-current"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="35"
              fill="transparent"
            ></circle>
            <circle
              className={`${modes[mode].textColor} text-violet-600 stroke-current`}
              strokeWidth="5"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="35"
              fill="transparent"
              strokeDasharray="219.8"
              strokeDashoffset={219.8 * (1 - progress / 100)}
              transform="rotate(-90 50 50)"
            ></circle>
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2">
            <p className="text-5xl font-bold text-white">{formatTime(time)}</p>
            <p className="text-lg text-center text-white">
              {modes[mode].label}
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <button
            onClick={toggleTimer}
            className={`rounded-full p-4 hover:scale-105 transition-all ${modes[mode].bgColor}`}
          >
            {isActive ? (
              <Pause className="fill-current text-white" size={24} />
            ) : (
              <Play className="fill-current text-white" size={24} />
            )}
          </button>
          <button
            onClick={resetTimer}
            className={`rounded-full p-4 hover:scale-105 transition-all`}
          >
            <RotateCcw className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
