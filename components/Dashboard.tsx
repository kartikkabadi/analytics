import React from "react";
import StatsCard from "./StatsCard";
import ChartCard from "./ChartCard";
import Sidebar from "./Sidebar";

const Dashboard = ({ experienceId }: { experienceId: string }) => (
  <Sidebar>
    <StatsCard title="Total Members" value={130} />
    <StatsCard title="MRR" value="$2,400" />
    <ChartCard title="Engagement" />
    <p>Experience ID: {experienceId}</p>
    {/* Add more UI as needed */}
  </Sidebar>
);

export default Dashboard;
