import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sage-100">
      <Sidebar />
      <main className="ml-72 min-h-screen">{children}</main>
    </div>
  );
}
