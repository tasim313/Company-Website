"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  speed?: number // milliseconds per character
  delay?: number // delay before starting next word
}

export default function TypewriterEffect({ words, speed = 100, delay = 1500 }: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex]

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setCurrentText(currentWord.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        if (charIndex === currentWord.length) {
          setIsDeleting(true)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex, words, speed, delay])

  return (
    <span className="font-mono text-primary-foreground">
      {currentText}
      <span className="animate-blink inline-block w-1 h-full bg-primary-foreground ml-1" />
    </span>
  )
}
