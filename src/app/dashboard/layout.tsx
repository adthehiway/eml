import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white p-4 overflow-hidden">
      {/* Outer sage box - the "frame" that wraps everything */}
      <div className="h-full w-full bg-sage-300 rounded-[2rem] p-4 flex gap-4">
        {/* Sidebar area - left side of the sage frame */}
        <div className="w-60 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main content - white card floating inside the sage frame */}
        <main className="flex-1 bg-white rounded-[1.5rem] shadow-xl overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
