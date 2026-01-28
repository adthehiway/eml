import { Header } from "@/components/layout/Header";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FileBarChart,
  Download,
  Calendar,
  Clock,
  Plus,
  TrendingUp,
  Package,
  Wallet,
  Users,
} from "lucide-react";

const reportCategories = [
  {
    name: "Sales Reports",
    description: "Revenue, orders, and sales analytics",
    icon: TrendingUp,
    color: "bg-emerald-500",
    reports: ["Daily Sales", "Weekly Summary", "Monthly Report", "YoY Comparison"],
  },
  {
    name: "Product Reports",
    description: "Product performance and ROI analysis",
    icon: Package,
    color: "bg-indigo-500",
    reports: ["Product ROI", "Best Sellers", "Slow Movers", "Stock Aging"],
  },
  {
    name: "Finance Reports",
    description: "Revenue, P&L, and settlements",
    icon: Wallet,
    color: "bg-amber-500",
    reports: ["Revenue Summary", "P&L Statement", "Commission Report", "VAT Report"],
  },
  {
    name: "Customer Reports",
    description: "Customer analytics and segments",
    icon: Users,
    color: "bg-rose-500",
    reports: ["Customer LTV", "Cohort Analysis", "Acquisition", "Retention"],
  },
];

const scheduledReports = [
  { name: "Weekly Sales Summary", frequency: "Weekly", nextRun: "Mon 9:00 AM", format: "Excel" },
  { name: "Monthly P&L", frequency: "Monthly", nextRun: "Feb 1, 9:00 AM", format: "PDF" },
  { name: "Daily Stock Alert", frequency: "Daily", nextRun: "Tomorrow 7:00 AM", format: "Email" },
];

const recentExports = [
  { name: "January Sales Report", date: "Jan 28, 2025", size: "2.4 MB", format: "Excel" },
  { name: "Q4 2024 Summary", date: "Jan 15, 2025", size: "5.1 MB", format: "PDF" },
  { name: "Product ROI Analysis", date: "Jan 10, 2025", size: "1.8 MB", format: "Excel" },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Reports"
        subtitle="Generate and schedule business reports"
      />

      <div className="p-6 space-y-6">
        {/* Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportCategories.map((category) => (
            <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardBody>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${category.color} text-white mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.reports.slice(0, 2).map((report) => (
                    <Badge key={report} variant="default">{report}</Badge>
                  ))}
                  {category.reports.length > 2 && (
                    <Badge variant="default">+{category.reports.length - 2} more</Badge>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Scheduled Reports */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Scheduled Reports</CardTitle>
              <Button variant="secondary" size="sm">
                <Plus className="h-4 w-4" />
                Schedule
              </Button>
            </CardHeader>
            <CardBody className="space-y-3">
              {scheduledReports.map((report) => (
                <div
                  key={report.name}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{report.name}</p>
                      <p className="text-xs text-slate-500">{report.frequency} · {report.format}</p>
                    </div>
                  </div>
                  <Badge variant="info">{report.nextRun}</Badge>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Recent Exports */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Exports</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardBody className="space-y-3">
              {recentExports.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <FileBarChart className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{file.name}</p>
                      <p className="text-xs text-slate-500">{file.date} · {file.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Quick Generate */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Generate</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">
                <Calendar className="h-4 w-4" />
                Daily Report
              </Button>
              <Button variant="secondary">
                <Calendar className="h-4 w-4" />
                Weekly Report
              </Button>
              <Button variant="secondary">
                <Calendar className="h-4 w-4" />
                Monthly Report
              </Button>
              <Button variant="secondary">
                <TrendingUp className="h-4 w-4" />
                YoY Comparison
              </Button>
              <Button variant="secondary">
                <Package className="h-4 w-4" />
                Inventory Status
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
