import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  UtensilsCrossed,
  Users,
  TrendingUp,
  Calendar,
  Plus,
  ArrowUpRight,
} from "lucide-react";

const traderStats = [
  {
    title: "Active Traders",
    value: "24",
    change: 4,
    trend: "up" as const,
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Revenue (MTD)",
    value: "£67,156",
    change: 12.3,
    trend: "up" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Upcoming Events",
    value: "8",
    trend: "neutral" as const,
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Avg Per Head",
    value: "£8.45",
    change: 5.2,
    trend: "up" as const,
    icon: <UtensilsCrossed className="h-5 w-5" />,
  },
];

const traders = [
  { name: "Burger Bros", cuisine: "American", events: 12, revenue: "£18,450", rating: 4.8 },
  { name: "Taco Loco", cuisine: "Mexican", events: 8, revenue: "£12,340", rating: 4.6 },
  { name: "Pizza Palace", cuisine: "Italian", events: 15, revenue: "£21,890", rating: 4.9 },
  { name: "Wok This Way", cuisine: "Asian Fusion", events: 6, revenue: "£8,456", rating: 4.5 },
];

export default function FoodTradersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Food Traders"
        subtitle="Manage food vendors and event assignments"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traderStats.map((stat) => (
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

        {/* Traders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Trader Directory</CardTitle>
            <Button size="sm">
              <Plus className="h-4 w-4" />
              Add Trader
            </Button>
          </CardHeader>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Trader
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Cuisine
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Events
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Revenue
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {traders.map((trader) => (
                  <tr key={trader.name} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                          <UtensilsCrossed className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-900">{trader.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{trader.cuisine}</td>
                    <td className="px-6 py-4 text-center text-sm font-mono text-slate-900">{trader.events}</td>
                    <td className="px-6 py-4 text-right text-sm font-mono font-semibold text-slate-900">{trader.revenue}</td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant="success">{trader.rating}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
