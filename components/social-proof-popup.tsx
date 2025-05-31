"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false)
  const [currentProof, setCurrentProof] = useState({
    name: "Robert",
    location: "United Kingdom",
    time: "7 minutes ago",
  })

  useEffect(() => {
    // Enhanced array of social proof data with more diverse names and locations
    const proofs = [
      {
        name: "Sarah",
        location: "Canada",
        time: "2 minutes ago",
      },
      {
        name: "Robert",
        location: "United Kingdom",
        time: "5 minutes ago",
      },
      {
        name: "Maria",
        location: "Australia",
        time: "7 minutes ago",
      },
      {
        name: "John",
        location: "Germany",
        time: "Just now",
      },
      {
        name: "Lisa",
        location: "United States",
        time: "3 minutes ago",
      },
      {
        name: "Thomas",
        location: "France",
        time: "8 minutes ago",
      },
      {
        name: "Karen",
        location: "Spain",
        time: "4 minutes ago",
      },
      {
        name: "David",
        location: "Italy",
        time: "1 minute ago",
      },
      {
        name: "Emma",
        location: "Sweden",
        time: "6 minutes ago",
      },
      {
        name: "Richard",
        location: "Netherlands",
        time: "Just now",
      },
      // Additional diverse names and locations
      {
        name: "Priya",
        location: "India",
        time: "Just now",
      },
      {
        name: "Carlos",
        location: "Mexico",
        time: "3 minutes ago",
      },
      {
        name: "Yuki",
        location: "Japan",
        time: "5 minutes ago",
      },
      {
        name: "Ahmed",
        location: "UAE",
        time: "2 minutes ago",
      },
      {
        name: "Sofia",
        location: "Brazil",
        time: "Just now",
      },
      {
        name: "Olga",
        location: "Russia",
        time: "7 minutes ago",
      },
      {
        name: "Kwame",
        location: "Ghana",
        time: "4 minutes ago",
      },
      {
        name: "Chen",
        location: "Singapore",
        time: "1 minute ago",
      },
      {
        name: "Isabella",
        location: "Argentina",
        time: "6 minutes ago",
      },
      {
        name: "Raj",
        location: "Malaysia",
        time: "Just now",
      },
      {
        name: "Emma",
        location: "Sweden",
        time: "Just now",
      },
    ]

    // Show first popup after 15 seconds
    const initialTimeout = setTimeout(() => {
      const randomProof = proofs[Math.floor(Math.random() * proofs.length)]
      setCurrentProof(randomProof)
      setVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false)
      }, 5000)
    }, 15000)

    // Show random popups periodically
    const interval = setInterval(() => {
      // Only show if not currently visible
      if (!visible) {
        const randomProof = proofs[Math.floor(Math.random() * proofs.length)]
        setCurrentProof(randomProof)
        setVisible(true)

        // Hide after 5 seconds
        setTimeout(() => {
          setVisible(false)
        }, 5000)
      }
    }, 45000) // Show every 45 seconds

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[250px] sm:max-w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 p-3 animate-slideUp text-sm">
      <button onClick={() => setVisible(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#22b97d]/20 flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="h-4 w-4 text-[#22b97d]" />
        </div>
        <div>
          <p className="text-xs">
            <span className="font-semibold">{currentProof.name}</span> from {currentProof.location} just purchased the
            Simple Budget Planner
          </p>
          <p className="text-xs text-gray-500">{currentProof.time}</p>
        </div>
      </div>
    </div>
  )
}
