"use client"

import { useEffect, useState } from "react"
import { DollarSign } from "lucide-react"

interface FallingDollarsProps {
  count?: number
  containerClassName?: string
}

export default function FallingDollars({ count = 25, containerClassName = "" }: FallingDollarsProps) {
  const [dollars, setDollars] = useState<
    Array<{ id: number; size: number; left: number; delay: number; duration: number; type: string }>
  >([])

  useEffect(() => {
    // Generate random dollar signs with different properties
    const newDollars = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 15, // Size between 15px and 35px (larger)
      left: Math.floor(Math.random() * 100), // Position from 0% to 100% left
      delay: Math.random() * 8, // Random delay up to 8s
      duration: Math.random() * 8 + 12, // Animation duration between 12-20s
      type: Math.random() > 0.5 ? "text" : "icon", // Mix of text and icon dollars
    }))

    setDollars(newDollars)
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${containerClassName}`}>
      {dollars.map((dollar) =>
        dollar.type === "text" ? (
          <div
            key={dollar.id}
            className="absolute text-[#22b97d]/30 animate-fall font-bold"
            style={{
              left: `${dollar.left}%`,
              fontSize: `${dollar.size}px`,
              animationDelay: `${dollar.delay}s`,
              animationDuration: `${dollar.duration}s`,
            }}
          >
            $
          </div>
        ) : (
          <div
            key={`icon-${dollar.id}`}
            className="absolute animate-fall"
            style={{
              left: `${dollar.left}%`,
              animationDelay: `${dollar.delay}s`,
              animationDuration: `${dollar.duration}s`,
            }}
          >
            <DollarSign className="text-[#22b97d]/30" style={{ width: dollar.size, height: dollar.size }} />
          </div>
        ),
      )}
    </div>
  )
}
