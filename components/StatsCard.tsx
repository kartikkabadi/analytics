import React from 'react'
import { Card, Badge } from '@frosted-ui/core'
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
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          {icon}
        </div>
        {trend !== undefined && (
          <Badge 
            variant={isPositiveTrend ? 'success' : isNegativeTrend ? 'destructive' : 'secondary'}
            className="flex items-center gap-1"
          >
            {isPositiveTrend && <TrendingUp className="h-3 w-3" />}
            {isNegativeTrend && <TrendingDown className="h-3 w-3" />}
            {Math.abs(trend)}%
          </Badge>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
        {trendLabel && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {trendLabel}
          </p>
        )}
      </div>
    </Card>
  )
}
