// components/color-spinner.tsx
import { useState, useEffect } from 'react'

interface ColorSpinnerProps {
  className?: string
}

export function ColorSpinner({ className }: ColorSpinnerProps = { className: '' }) {
  const [rotation, setRotation] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ['#3b82f6', '#16a34a', '#ffffff'] // Cores: azul, verde e branco

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 360)
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 200) // Gira e muda de cor a cada segundo

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`relative rounded-full border-4 w-8 h-8 ${className}`}
      style={{
        borderColor: colors[colorIndex],
        borderBottomColor: 'transparent',
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 1s linear',
      }}
    />
  )
}