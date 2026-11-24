"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

function extractNumber(str) {
  return parseInt(str.replace(/\D/g, "")) || 0
}

function extractSuffix(str) {
  return str.includes("+") ? "+" : ""
}

export default function CountUp({ value, className, style, isMobile }) {
  const num = extractNumber(value)
  const suffix = extractSuffix(value)
  const [displayValue, setDisplayValue] = useState(num)
  const elementRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !elementRef.current) return
    let observer
    let animationFrame
    let startTime = null
    const duration = isMobile ? 1.2 : 2
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

    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setDisplayValue(0)
      animationFrame = requestAnimationFrame(animate)
    }, { threshold: 0.35 })
    observer.observe(elementRef.current)
    return () => {
      observer?.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [num, isMobile, reducedMotion])

  return (
    <motion.span
      ref={elementRef}
      className={className}
      style={style}
      layout
    >
      {displayValue}{suffix}
    </motion.span>
  )
}
