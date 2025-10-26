import React from 'react'
import { Card } from '@frosted-ui/core'
import { BarChart3, LineChart } from 'lucide-react'

interface ChartCardProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function ChartCard({ 
  title, 
  description, 
  children, 
  className = '' 
}: ChartCardProps) {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      
      {children ? (
        <div className="h-80">
          {children}
        </div>
      ) : (
        <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <LineChart className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Chart Placeholder
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              This area is reserved for chart visualization. 
              Integrate with your preferred charting library like Chart.js, Recharts, or D3.
            </p>
            <div className="mt-4 space-y-2">
              <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded animate-pulse"></div>
              <div className="h-2 bg-blue-100 dark:bg-blue-900 rounded animate-pulse w-3/4"></div>
              <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Updated 2 minutes ago</span>
          <button className="hover:text-gray-900 dark:hover:text-white transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Card>
  )
}
