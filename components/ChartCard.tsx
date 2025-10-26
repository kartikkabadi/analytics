import React from 'react'
import { Card } from './Card'
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
        <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-center">
            <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Chart placeholder</p>
          </div>
        </div>
      )}
    </Card>
  )
}
