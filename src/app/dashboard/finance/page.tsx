import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  FileText,
  Plus,
  ArrowUpRight,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const financeStats = [
  {
    title: "Revenue (MTD)",
    value: "£847,293",
    change: 12.5,
    trend: "up" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Outstanding",
    value: "£45,892",
    change: -8.3,
    trend: "down" as const,
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Pending Settlements",
    value: "£23,456",
    trend: "neutral" as const,
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Invoices Due",
    value: "12",
    trend: "neutral" as const,
    icon: <FileText className="h-5 w-5" />,
  },
];

const recentInvoices = [
  { number: "INV-2025-001", client: "Arctic Monkeys Ltd", amount: "£12,456", status: "paid", due: "Jan 15" },
  { number: "INV-2025-002", client: "Coldplay Inc", amount: "£8,234", status: "pending", due: "Feb 1" },
  { number: "INV-2025-003", client: "O2 Arena", amount: "£3,456", status: "overdue", due: "Jan 20" },
  { number: "INV-2025-004", client: "Festival Republic", amount: "£15,678", status: "pending", due: "Feb 15" },
];

const pendingSettlements = [
  { type: "Venue", entity: "O2 Arena - London", amount: "£8,456", date: "Feb 1" },
  { type: "Artist", entity: "Arctic Monkeys", amount: "£12,340", date: "Feb 5" },
  { type: "Trader", entity: "Burger Bros", amount: "£2,660", date: "Feb 10" },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Finance"
        subtitle="Invoicing, payments, and settlements"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeStats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Invoices */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Invoices</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4" />
                Create Invoice
              </Button>
            </CardHeader>
            <CardBody className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Invoice
                    </th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Client
                    </th>
                    <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Amount
                    </th>
                    <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentInvoices.map((invoice) => (
                    <tr key={invoice.number} className="hover:bg-slate-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-slate-900">{invoice.number}</p>
                        <p className="text-xs text-slate-500">Due {invoice.due}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{invoice.client}</td>
                      <td className="px-6 py-4 text-sm font-mono font-semibold text-slate-900 text-right">
                        {invoice.amount}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge
                          variant={
                            invoice.status === "paid"
                              ? "success"
                              : invoice.status === "pending"
                              ? "warning"
                              : "error"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>

          {/* Pending Settlements */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Settlements</CardTitle>
            </CardHeader>
            <CardBody className="space-y-3">
              {pendingSettlements.map((settlement, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default">{settlement.type}</Badge>
                    </div>
                    <p className="text-sm font-medium text-slate-900">{settlement.entity}</p>
                    <p className="text-xs text-slate-500">Due {settlement.date}</p>
                  </div>
                  <span className="text-sm font-mono font-semibold text-slate-900">
                    {settlement.amount}
                  </span>
                </div>
              ))}
              <Button variant="secondary" className="w-full">
                Process Settlements
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Xero Integration */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Xero Integration</CardTitle>
            <Badge variant="success">
              <CheckCircle className="h-3 w-3 mr-1" />
              Connected
            </Badge>
          </CardHeader>
          <CardBody>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Last synced: 5 minutes ago</p>
                <p className="text-xs text-slate-400">Next sync in 25 minutes</p>
              </div>
              <Button variant="secondary">
                Sync Now
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
