import Dashboard from '@/components/Dashboard';

export default function ExperiencePage({
  params,
}: {
  params: { experienceId: string };
}) {
  return <Dashboard experienceId={params.experienceId} />;
}
