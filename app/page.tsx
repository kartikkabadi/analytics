'use client'
import { useEffect, useState } from 'react'
import { BarChart3, Users, DollarSign, TrendingUp, Eye, Clock, ArrowRight } from 'lucide-react'
import { StatsCard } from '../components/StatsCard'
import { ChartCard } from '../components/ChartCard'

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
        growthRate: 23.5,
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your community.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            View Reports
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={<DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />}
          trend={15.3}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Total Members"
          value={stats.totalMembers.toLocaleString()}
          icon={<Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
          trend={12.5}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Active Members"
          value={stats.activeMembers.toLocaleString()}
          icon={<TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
          trend={8.2}
          trendLabel="vs last month"
        />
        <StatsCard
          title="Content Views"
          value={stats.contentViews.toLocaleString()}
          icon={<Eye className="h-5 w-5 text-orange-600 dark:text-orange-400" />}
          trend={stats.growthRate}
          trendLabel="vs last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue Trends"
          description="Monthly recurring revenue over the past 6 months"
        />
        <ChartCard
          title="Member Growth"
          description="New members and churn rate"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard
            title="Content Engagement"
            description="Views, likes, and comments over time"
          />
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Performing Content
          </h3>
          <div className="space-y-4">
            <ContentItem title="Getting Started Guide" views={2847} engagement={85} />
            <ContentItem title="Advanced Strategies" views={1923} engagement={78} />
            <ContentItem title="Community Q&A" views={1456} engagement={92} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h3>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <ActivityItem
            icon={<Users className="h-5 w-5 text-blue-600" />}
            title="New member joined"
            description="John Doe joined your community"
            time="2 minutes ago"
          />
          <ActivityItem
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
            title="New subscription"
            description="Premium plan - $29.99"
            time="15 minutes ago"
          />
          <ActivityItem
            icon={<Eye className="h-5 w-5 text-purple-600" />}
            title="Content viewed"
            description="'Getting Started Guide' viewed 47 times"
            time="1 hour ago"
          />
        </div>
      </div>
    </div>
  )
}

function ContentItem({ title, views, engagement }: { title: string; views: number; engagement: number }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{views.toLocaleString()} views</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${engagement}%` }}
          />
        </div>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{engagement}%</span>
      </div>
    </div>
  )
}

function ActivityItem({ icon, title, description, time }: { icon: React.ReactNode; title: string; description: string; time: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
        <Clock className="h-3 w-3" />
        {time}
      </div>
    </div>
  )
}
