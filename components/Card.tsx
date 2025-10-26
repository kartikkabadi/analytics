import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-xl bg-white/70 dark:bg-gray-900/70',
        'border border-white/20 dark:border-gray-700/30',
        'rounded-xl shadow-xl',
        'transition-all duration-300',
        'hover:shadow-2xl hover:bg-white/80 dark:hover:bg-gray-900/80',
        className
      )}
    >
      {children}
    </div>
  )
}
