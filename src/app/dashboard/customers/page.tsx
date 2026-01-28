import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Users,
  UserPlus,
  TrendingUp,
  ShoppingCart,
  Search,
  Filter,
  Mail,
} from "lucide-react";

const customerStats = [
  {
    title: "Total Customers",
    value: "24,589",
    change: 8.4,
    trend: "up" as const,
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "New This Month",
    value: "1,247",
    change: 12.3,
    trend: "up" as const,
    icon: <UserPlus className="h-5 w-5" />,
  },
  {
    title: "Avg Lifetime Value",
    value: "£156",
    change: 5.2,
    trend: "up" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Repeat Rate",
    value: "34.2%",
    change: 2.1,
    trend: "up" as const,
    icon: <ShoppingCart className="h-5 w-5" />,
  },
];

const recentCustomers = [
  { name: "Sarah Wilson", email: "sarah.w@email.com", orders: 12, spent: "£489", lastOrder: "2 days ago" },
  { name: "James Brown", email: "james.b@email.com", orders: 8, spent: "£312", lastOrder: "1 week ago" },
  { name: "Emily Davis", email: "emily.d@email.com", orders: 3, spent: "£156", lastOrder: "Today" },
  { name: "Michael Chen", email: "m.chen@email.com", orders: 24, spent: "£1,245", lastOrder: "3 days ago" },
  { name: "Lisa Anderson", email: "lisa.a@email.com", orders: 6, spent: "£234", lastOrder: "Yesterday" },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Customers"
        subtitle="Customer database and analytics"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerStats.map((stat) => (
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

        {/* Customer Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Customer Database</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="w-64 rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <Button variant="secondary" size="sm">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <UserPlus className="h-4 w-4" />
                Add Customer
              </Button>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Customer
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Orders
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Total Spent
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Last Order
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentCustomers.map((customer) => (
                  <tr key={customer.email} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                          <span className="text-sm font-medium text-slate-600">
                            {customer.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{customer.name}</p>
                          <p className="text-xs text-slate-500">{customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-mono text-slate-900">
                      {customer.orders}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-mono font-semibold text-slate-900">
                      {customer.spent}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {customer.lastOrder}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                      </Button>
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
