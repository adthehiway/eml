import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sage-100 p-4">
      <Sidebar />
      {/* Main content - floating panel */}
      <main className="ml-80 min-h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-card overflow-hidden">
        {children}
      </main>
    </div>
  );
}
