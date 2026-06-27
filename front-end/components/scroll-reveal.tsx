"use client"

import * as React from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "scale-up"
  delay?: number
}

export function ScrollReveal({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const domRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

    const currentRef = domRef.current
    if (currentRef) observer.observe(currentRef)
    
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [delay])

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return `transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`
      case "fade-in":
        return `transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`
      case "scale-up":
        return `transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`
      default:
        return ""
    }
  }

  return (
    <div 
      ref={domRef} 
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}
