'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Badge, Progress } from '@frosted-ui/core'
import { BarChart3, Users, DollarSign, TrendingUp, Eye, Clock } from 'lucide-react'
import { StatsCard } from '../components/StatsCard'
import { ChartCard } from '../components/ChartCard'
import { RecentActivity } from '../components/RecentActivity'

interface DashboardStats {
  totalRevenue: number
  totalMembers: number
  activeMembers: number
  contentViews: number
  growthRate: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalRevenue: 0,
    totalMembers: 0,
    activeMembers: 0,
    contentViews: 0,
    growthRate: 0,
  })
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to Whop
    setTimeout(() => {
      setStats({
        totalRevenue: 48692.35,
        totalMembers: 1247,
        activeMembers: 892,
        contentViews: 15742,
        growthRate: 12.5,
      })
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Track your Whop app performance and engagement metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Last 30 days
          </Button>
          <Button className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={<DollarSign className="h-5 w-5" />}
          trend={+8.2}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Total Members"
          value={stats.totalMembers.toLocaleString()}
          icon={<Users className="h-5 w-5" />}
          trend={+12.5}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Active Members"
          value={stats.activeMembers.toLocaleString()}
          icon={<Users className="h-5 w-5 text-green-500" />}
          trend={+5.1}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Content Views"
          value={stats.contentViews.toLocaleString()}
          icon={<Eye className="h-5 w-5" />}
          trend={+15.3}
          trendLabel="vs last month"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue Trend"
          description="Monthly revenue growth over time"
        />
        <ChartCard
          title="Member Activity"
          description="Daily active members and engagement"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Performance Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Member Retention</span>
                  <span>89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Content Engagement</span>
                  <span>76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Revenue Growth</span>
                  <span>94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
