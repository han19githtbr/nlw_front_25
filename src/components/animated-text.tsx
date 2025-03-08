"use client"
// components/animated-text.tsx
import { useState, useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  colors: string[]
}

export function AnimatedText({ text, colors }: AnimatedTextProps) {
  const [colorIndices, setColorIndices] = useState(text.split('').map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndices((prevIndices) =>
        prevIndices.map((index) => (index + 1) % colors.length)
      )
    }, 500) // Muda a cor a cada 500ms

    return () => clearInterval(interval)
  }, [colors.length, text])

  return (
    <span className="flex">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{ color: colors[colorIndices[index]], transition: 'color 0.5s linear' }}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}