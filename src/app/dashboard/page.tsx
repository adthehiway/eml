import { Header } from "@/components/layout/Header";
import {
  TrendingUp,
  ShoppingCart,
  Users,
  Package,
  Calendar,
  Store,
  Music,
  UtensilsCrossed,
  MoreVertical,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <Header title="Dashboard" />

      <div className="px-8 pb-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-5">

          {/* Energy/Revenue Card - Large with donut chart */}
          <div className="col-span-5 row-span-2 card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-600">Total Revenue</span>
              </div>
              <button className="p-1 hover:bg-slate-100 rounded-lg">
                <MoreVertical className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-4xl font-bold text-slate-900">£847k</span>
              <span className="stat-trend-up">+8%</span>
            </div>

            {/* Donut Chart Visualization */}
            <div className="relative flex items-center justify-center my-8">
              <svg className="w-48 h-48 -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E2ECDA" strokeWidth="12" />
                {/* E-Commerce - Purple */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="12"
                  strokeDasharray="100.53 251.33" strokeDashoffset="0" />
                {/* Retail - Lime */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#BEF264" strokeWidth="12"
                  strokeDasharray="62.83 251.33" strokeDashoffset="-100.53" />
                {/* Live Events - Amber */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FBBF24" strokeWidth="12"
                  strokeDasharray="50.27 251.33" strokeDashoffset="-163.36" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">£324k</span>
                <span className="text-sm text-slate-500">E-Comm</span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span className="text-sm text-slate-600">E-Commerce</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">£324,892</span>
                  <span className="text-xs text-emerald-600">+15%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lime-400"></div>
                  <span className="text-sm text-slate-600">Retail</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">£198,456</span>
                  <span className="text-xs text-emerald-600">+8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warm-400"></div>
                  <span className="text-sm text-slate-600">Live Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">£256,789</span>
                  <span className="text-xs text-emerald-600">+22%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Card */}
          <div className="col-span-4 card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-600">Orders Today</span>
              </div>
              <span className="stat-trend-up">+12%</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-900">1,284</span>
              <span className="text-sm text-slate-500">orders</span>
            </div>
          </div>

          {/* Wellness/Customers Card */}
          <div className="col-span-3 card p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-slate-600">Active Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-slate-900">24.5k</span>
              <span className="stat-trend-up">+8%</span>
            </div>
          </div>

          {/* Activity/Channels Card */}
          <div className="col-span-4 card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-600">Channel Mix</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: "E-Commerce", value: 45, color: "bg-primary-500" },
                { name: "Retail", value: 30, color: "bg-lime-400" },
                { name: "Live Events", value: 25, color: "bg-warm-400" },
              ].map((channel) => (
                <div key={channel.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{channel.name}</span>
                    <span className="font-semibold text-slate-900">{channel.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${channel.color} rounded-full`}
                      style={{ width: `${channel.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleep/Events Analysis Card */}
          <div className="col-span-3 card p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-600">Live Events</span>
              <select className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1">
                <option>Monthly</option>
              </select>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div>
                <div className="flex items-center gap-1">
                  <Music className="h-4 w-4 text-primary-500" />
                  <span className="text-2xl font-bold text-slate-900">8</span>
                </div>
                <span className="text-xs text-slate-500">Active Tours</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-lime-500" />
                  <span className="text-2xl font-bold text-slate-900">47</span>
                </div>
                <span className="text-xs text-slate-500">Shows Left</span>
              </div>
            </div>

            {/* Mini bar chart */}
            <div className="flex items-end gap-2 h-20">
              {[40, 65, 45, 80, 55, 70, 50].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t-lg ${i === 3 ? 'bg-primary-500' : 'bg-sage-300'}`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] text-slate-400">
                    {['Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="col-span-8 card">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">Recent Orders</h3>
              <button className="text-sm text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1">
                View All <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Order</th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Customer</th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Channel</th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Amount</th>
                    <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: "ORD-001", customer: "Sarah Wilson", channel: "E-Commerce", amount: "£124.99", status: "completed" },
                    { id: "ORD-002", customer: "James Brown", channel: "Retail", amount: "£89.50", status: "processing" },
                    { id: "ORD-003", customer: "Emily Davis", channel: "Live Event", amount: "£256.00", status: "completed" },
                    { id: "ORD-004", customer: "Michael Chen", channel: "E-Commerce", amount: "£45.99", status: "pending" },
                  ].map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{order.channel}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{order.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`badge ${
                          order.status === 'completed' ? 'badge-success' :
                          order.status === 'processing' ? 'badge-warning' : 'badge-info'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="col-span-4 card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-900">Upcoming Events</h3>
              <button className="p-2 hover:bg-slate-100 rounded-xl">
                <Calendar className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            <div className="space-y-3">
              {[
                { name: "Arctic Monkeys Tour", date: "Feb 15-28", venues: 8, status: "active" },
                { name: "Reading Festival", date: "Aug 23-25", venues: 1, status: "planning" },
                { name: "Coldplay Tour", date: "Jun 10-30", venues: 12, status: "planning" },
              ].map((event) => (
                <div key={event.name} className="flex items-center gap-3 p-3 rounded-2xl bg-sage-50 hover:bg-sage-100 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
                    <Music className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{event.name}</p>
                    <p className="text-xs text-slate-500">{event.date} · {event.venues} venues</p>
                  </div>
                  <span className={`badge ${event.status === 'active' ? 'badge-success' : 'badge-purple'}`}>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-12 card p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Package, label: "Add Product" },
                { icon: ShoppingCart, label: "New Order" },
                { icon: Calendar, label: "Create Event" },
                { icon: Users, label: "Add Customer" },
                { icon: TrendingUp, label: "Generate Report" },
              ].map((action) => (
                <button key={action.label} className="btn btn-secondary">
                  <action.icon className="h-4 w-4" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
