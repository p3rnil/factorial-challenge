import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  value: number
  duration?: number
}

function AnimatedNumber({ value, duration = 0.5 }: Props) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const previousValue = useRef(value)

  useEffect(() => {
    if (numberRef.current) {
      const obj = { val: previousValue.current }

      gsap.to(obj, {
        val: value,
        duration,
        ease: 'power1.out',
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = obj.val.toFixed(2)
          }
        },
      })

      previousValue.current = value
    }
  }, [value, duration])

  return <span ref={numberRef}>{value}</span>
}

export default AnimatedNumber
