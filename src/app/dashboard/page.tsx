import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  TrendingUp,
  ShoppingCart,
  Users,
  Package,
  ArrowRight,
  Calendar,
  Store,
  Music,
  UtensilsCrossed,
} from "lucide-react";

// Mock data for demonstration
const stats = [
  {
    title: "Total Revenue",
    value: "£847,293",
    change: 12.5,
    trend: "up" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Orders Today",
    value: "1,284",
    change: 8.2,
    trend: "up" as const,
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: "Active Customers",
    value: "24,589",
    change: -2.4,
    trend: "down" as const,
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Products",
    value: "3,847",
    change: 0,
    trend: "neutral" as const,
    icon: <Package className="h-5 w-5" />,
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Sarah Wilson",
    channel: "E-Commerce",
    amount: "£124.99",
    status: "completed",
  },
  {
    id: "ORD-002",
    customer: "James Brown",
    channel: "Retail",
    amount: "£89.50",
    status: "processing",
  },
  {
    id: "ORD-003",
    customer: "Emily Davis",
    channel: "Live Event",
    amount: "£256.00",
    status: "completed",
  },
  {
    id: "ORD-004",
    customer: "Michael Chen",
    channel: "E-Commerce",
    amount: "£45.99",
    status: "pending",
  },
  {
    id: "ORD-005",
    customer: "Lisa Anderson",
    channel: "Food Trader",
    amount: "£18.50",
    status: "completed",
  },
];

const channels = [
  {
    name: "E-Commerce",
    revenue: "£324,892",
    orders: 2847,
    growth: 15.3,
    icon: <Store className="h-5 w-5" />,
    color: "bg-indigo-500",
  },
  {
    name: "Retail",
    revenue: "£198,456",
    orders: 1523,
    growth: 8.7,
    icon: <ShoppingCart className="h-5 w-5" />,
    color: "bg-emerald-500",
  },
  {
    name: "Live Events",
    revenue: "£256,789",
    orders: 892,
    growth: 22.1,
    icon: <Music className="h-5 w-5" />,
    color: "bg-amber-500",
  },
  {
    name: "Food Traders",
    revenue: "£67,156",
    orders: 3241,
    growth: 5.2,
    icon: <UtensilsCrossed className="h-5 w-5" />,
    color: "bg-rose-500",
  },
];

const upcomingEvents = [
  { name: "Arctic Monkeys Tour", date: "Feb 15-28", venues: 8, status: "active" },
  { name: "Reading Festival", date: "Aug 23-25", venues: 1, status: "planning" },
  { name: "Coldplay Tour", date: "Jun 10-30", venues: 12, status: "planning" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening today."
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
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

        {/* Channel Performance */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Channel Performance</CardTitle>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${channel.color} text-white`}
                    >
                      {channel.icon}
                    </div>
                    <span className="font-medium text-slate-900">
                      {channel.name}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-2xl font-semibold font-mono text-slate-900">
                        {channel.revenue}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        {channel.orders.toLocaleString()} orders
                      </span>
                      <span className="text-emerald-600 font-medium">
                        +{channel.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardBody className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Order
                    </th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Customer
                    </th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Channel
                    </th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Amount
                    </th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {order.channel}
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-900">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            order.status === "completed"
                              ? "success"
                              : order.status === "processing"
                              ? "warning"
                              : "info"
                          }
                        >
                          {order.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Events</CardTitle>
              <Button variant="ghost" size="sm">
                <Calendar className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardBody className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.name}
                  className="flex items-start gap-4 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <Music className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {event.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {event.date} · {event.venues} venues
                    </p>
                  </div>
                  <Badge
                    variant={event.status === "active" ? "success" : "info"}
                  >
                    {event.status}
                  </Badge>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">
                <Package className="h-4 w-4" />
                Add Product
              </Button>
              <Button variant="secondary">
                <ShoppingCart className="h-4 w-4" />
                New Order
              </Button>
              <Button variant="secondary">
                <Calendar className="h-4 w-4" />
                Create Event
              </Button>
              <Button variant="secondary">
                <Users className="h-4 w-4" />
                Add Customer
              </Button>
              <Button variant="secondary">
                <TrendingUp className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
