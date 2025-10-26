import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend?: number
  trendLabel?: string
  className?: string
}

export function StatsCard({
  title,
  value,
  icon,
  trend,
  trendLabel,
  className = ''
}: StatsCardProps) {
  const isPositiveTrend = trend && trend > 0
  const isNegativeTrend = trend && trend < 0

  return (
    <div className={`p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          {icon}
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
            isPositiveTrend 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
              : isNegativeTrend 
              ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
              : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
          }`}>
            {isPositiveTrend && <TrendingUp className="h-3 w-3" />}
            {isNegativeTrend && <TrendingDown className="h-3 w-3" />}
            {trend > 0 && '+'}{trend}%
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        {trendLabel && (
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{trendLabel}</p>
        )}
      </div>
    </div>
  )
}
