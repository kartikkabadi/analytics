import React from "react";
import { StatsCard } from "./StatsCard";
import { ChartCard } from "./ChartCard";
import { Sidebar } from "./Sidebar";
import { Users, DollarSign, TrendingUp, Activity } from "lucide-react";

const Dashboard = ({ experienceId }: { experienceId: string }) => (
  <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
    <Sidebar />
    <main className="flex-1 overflow-y-auto p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Experience ID: {experienceId}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Members"
            value="130"
            icon={<Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
            trend={12}
            trendLabel="vs last month"
          />
          <StatsCard
            title="MRR"
            value="$2,400"
            icon={<DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />}
            trend={8}
            trendLabel="vs last month"
          />
          <StatsCard
            title="Active Users"
            value="98"
            icon={<Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
            trend={-3}
            trendLabel="vs last month"
          />
          <StatsCard
            title="Growth Rate"
            value="15%"
            icon={<TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />}
            trend={5}
            trendLabel="vs last month"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Engagement"
            description="User engagement over time"
          />
          <ChartCard
            title="Revenue"
            description="Monthly revenue trends"
          />
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
