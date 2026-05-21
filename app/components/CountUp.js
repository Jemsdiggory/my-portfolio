"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function extractNumber(str) {
  return parseInt(str.replace(/\D/g, "")) || 0
}

function extractSuffix(str) {
  return str.includes("+") ? "+" : ""
}

export default function CountUp({ value, className, style, isMobile }) {
  const num = extractNumber(value)
  const suffix = extractSuffix(value)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = isMobile ? 1.2 : 2
    let animationFrame
    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000

      if (elapsed < duration) {
        const progress = elapsed / duration
        const easeOutQuad = 1 - (1 - progress) * (1 - progress)
        setDisplayValue(Math.floor(easeOutQuad * num))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(num)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [num, isMobile])

  return (
    <motion.span
      className={className}
      style={style}
      layout
    >
      {displayValue}{suffix}
    </motion.span>
  )
}
