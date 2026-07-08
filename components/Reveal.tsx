'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  y = 22,
  x = 0,
  className,
  id,
}: {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  className?: string
  id?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        show: {
          transition: reduce ? {} : { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  y = 18,
  x = 0,
}: {
  children: ReactNode
  className?: string
  y?: number
  x?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, y, x },
        show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
