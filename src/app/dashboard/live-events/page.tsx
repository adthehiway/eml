import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Music,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Plus,
  ArrowRight,
  Upload,
} from "lucide-react";

const eventStats = [
  {
    title: "Active Tours",
    value: "8",
    change: 2,
    trend: "up" as const,
    icon: <Music className="h-5 w-5" />,
  },
  {
    title: "Upcoming Shows",
    value: "47",
    change: 12,
    trend: "up" as const,
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Total Revenue (MTD)",
    value: "£256,789",
    change: 22.1,
    trend: "up" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Staff Assigned",
    value: "124",
    change: 8,
    trend: "up" as const,
    icon: <Users className="h-5 w-5" />,
  },
];

const activeTours = [
  {
    name: "Arctic Monkeys - UK Tour 2025",
    artist: "Arctic Monkeys",
    dates: "Feb 15 - Mar 28",
    venues: 12,
    showsComplete: 4,
    revenue: "£89,456",
    status: "active",
  },
  {
    name: "Coldplay - World Tour",
    artist: "Coldplay",
    dates: "Jun 10 - Aug 30",
    venues: 24,
    showsComplete: 0,
    revenue: "£0",
    status: "planning",
  },
  {
    name: "Ed Sheeran - Stadium Tour",
    artist: "Ed Sheeran",
    dates: "Apr 5 - May 20",
    venues: 8,
    showsComplete: 0,
    revenue: "£0",
    status: "planning",
  },
  {
    name: "The 1975 - Club Tour",
    artist: "The 1975",
    dates: "Mar 1 - Mar 15",
    venues: 6,
    showsComplete: 2,
    revenue: "£34,892",
    status: "active",
  },
];

const upcomingShows = [
  {
    tour: "Arctic Monkeys - UK Tour 2025",
    venue: "O2 Arena, London",
    date: "Feb 18, 2025",
    capacity: 20000,
    staff: 12,
  },
  {
    tour: "Arctic Monkeys - UK Tour 2025",
    venue: "Manchester Arena",
    date: "Feb 20, 2025",
    capacity: 21000,
    staff: 10,
  },
  {
    tour: "The 1975 - Club Tour",
    venue: "Brixton Academy",
    date: "Mar 5, 2025",
    capacity: 4900,
    staff: 6,
  },
  {
    tour: "The 1975 - Club Tour",
    venue: "O2 Academy Birmingham",
    date: "Mar 8, 2025",
    capacity: 3000,
    staff: 5,
  },
];

export default function LiveEventsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Live Events"
        subtitle="Manage tours, festivals, and live merchandise"
      />

      <div className="p-6 space-y-6">
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button>
              <Plus className="h-4 w-4" />
              Create Tour
            </Button>
            <Button variant="secondary">
              <Upload className="h-4 w-4" />
              Upload Report
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventStats.map((stat) => (
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

        {/* Active Tours */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active & Upcoming Tours</CardTitle>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Tour
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Dates
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Venues
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Progress
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Revenue
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activeTours.map((tour) => (
                  <tr
                    key={tour.name}
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                          <Music className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {tour.name}
                          </p>
                          <p className="text-xs text-slate-500">{tour.artist}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {tour.dates}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-900 text-center font-mono">
                      {tour.venues}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{
                              width: `${(tour.showsComplete / tour.venues) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-xs text-slate-500">
                          {tour.showsComplete}/{tour.venues}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 text-right font-mono">
                      {tour.revenue}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge
                        variant={tour.status === "active" ? "success" : "info"}
                      >
                        {tour.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>

        {/* Upcoming Shows */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Shows</CardTitle>
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4 mr-1" />
              View Calendar
            </Button>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingShows.map((show, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {show.venue}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {show.tour}
                      </p>
                    </div>
                    <Badge variant="info">{show.date}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {show.capacity.toLocaleString()} capacity
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {show.staff} staff
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
