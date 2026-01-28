import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  DollarSign,
  CreditCard,
  ArrowUpRight,
  Filter,
  Download,
  Calendar,
} from "lucide-react";

const salesStats = [
  {
    title: "Today's Revenue",
    value: "£24,847",
    change: 18.2,
    trend: "up" as const,
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    title: "Orders Today",
    value: "342",
    change: 12.5,
    trend: "up" as const,
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: "Avg Order Value",
    value: "£72.65",
    change: 4.8,
    trend: "up" as const,
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: -0.8,
    trend: "down" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

const topProducts = [
  { name: "Arctic Monkeys Tour Tee", sku: "AM-TEE-001", sales: 847, revenue: "£21,175" },
  { name: "Festival Bundle Pack", sku: "FBP-001", sales: 523, revenue: "£15,690" },
  { name: "Artist Hoodie - Black", sku: "AH-BLK-M", sales: 412, revenue: "£20,600" },
  { name: "Limited Edition Vinyl", sku: "LEV-2024", sales: 298, revenue: "£8,940" },
  { name: "Event Poster Collection", sku: "EPC-SET", sales: 256, revenue: "£3,840" },
];

const salesByChannel = [
  { channel: "E-Commerce", sales: "£12,456", percentage: 42, color: "bg-indigo-500" },
  { channel: "Retail Stores", sales: "£8,234", percentage: 28, color: "bg-emerald-500" },
  { channel: "Live Events", sales: "£6,892", percentage: 23, color: "bg-amber-500" },
  { channel: "Food Traders", sales: "£2,065", percentage: 7, color: "bg-rose-500" },
];

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Sales Dashboard"
        subtitle="Track your sales performance across all channels"
      />

      <div className="p-6 space-y-6">
        {/* Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm">
              <Calendar className="h-4 w-4" />
              Today
            </Button>
            <Button variant="ghost" size="sm">
              This Week
            </Button>
            <Button variant="ghost" size="sm">
              This Month
            </Button>
            <Button variant="ghost" size="sm">
              Custom Range
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="secondary" size="sm">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salesStats.map((stat) => (
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
          {/* Sales by Channel */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Channel</CardTitle>
            </CardHeader>
            <CardBody className="space-y-4">
              {salesByChannel.map((item) => (
                <div key={item.channel} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">
                      {item.channel}
                    </span>
                    <span className="text-sm font-mono text-slate-900">
                      {item.sales}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Top Products */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Top Products</CardTitle>
              <Button variant="ghost" size="sm">
                View All <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardBody className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Product
                    </th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      SKU
                    </th>
                    <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Sales
                    </th>
                    <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topProducts.map((product, idx) => (
                    <tr
                      key={product.sku}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                            {idx + 1}
                          </span>
                          <span className="text-sm font-medium text-slate-900">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-mono">
                        {product.sku}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900 text-right font-mono">
                        {product.sales.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900 text-right font-mono">
                        {product.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>

        {/* Sales Chart Placeholder */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Revenue Over Time</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="info">E-Commerce</Badge>
              <Badge variant="success">Retail</Badge>
              <Badge variant="warning">Live Events</Badge>
            </div>
          </CardHeader>
          <CardBody>
            <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-200">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-500">
                  Chart visualization will be rendered here
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Integrate with Recharts for interactive charts
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
