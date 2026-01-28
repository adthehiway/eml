import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Megaphone,
  TrendingUp,
  MousePointer,
  DollarSign,
  Mail,
  Globe,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

const marketingStats = [
  {
    title: "Total Spend (MTD)",
    value: "£12,847",
    change: -5.2,
    trend: "down" as const,
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    title: "Revenue Attributed",
    value: "£89,456",
    change: 18.4,
    trend: "up" as const,
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "ROAS",
    value: "6.96x",
    change: 24.8,
    trend: "up" as const,
    icon: <MousePointer className="h-5 w-5" />,
  },
  {
    title: "Email Open Rate",
    value: "42.3%",
    change: 3.2,
    trend: "up" as const,
    icon: <Mail className="h-5 w-5" />,
  },
];

const channelPerformance = [
  { name: "Google Ads", spend: "£4,892", revenue: "£32,456", roas: "6.63x", icon: Globe },
  { name: "Meta Ads", spend: "£5,234", revenue: "£41,892", roas: "8.00x", icon: Facebook },
  { name: "Email", spend: "£450", revenue: "£12,340", roas: "27.42x", icon: Mail },
  { name: "Organic Search", spend: "£2,271", revenue: "£2,768", roas: "1.22x", icon: TrendingUp },
];

const recentCampaigns = [
  { name: "Arctic Monkeys Tour Launch", status: "active", spend: "£2,450", conversions: 847 },
  { name: "Spring Sale 2025", status: "scheduled", spend: "£0", conversions: 0 },
  { name: "New Collection Email", status: "completed", spend: "£125", conversions: 234 },
];

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Marketing"
        subtitle="Campaign performance and analytics"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingStats.map((stat) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Channel Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Channel Performance</CardTitle>
            </CardHeader>
            <CardBody className="space-y-4">
              {channelPerformance.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                      <channel.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{channel.name}</p>
                      <p className="text-xs text-slate-500">Spend: {channel.spend}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono font-semibold text-slate-900">{channel.revenue}</p>
                    <p className="text-xs text-emerald-600 font-medium">{channel.roas} ROAS</p>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Recent Campaigns */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Campaigns</CardTitle>
              <Button variant="ghost" size="sm">
                View All <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardBody className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.name}
                  className="flex items-center justify-between p-4 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <Megaphone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{campaign.name}</p>
                      <p className="text-xs text-slate-500">
                        {campaign.conversions > 0 ? `${campaign.conversions} conversions` : "Not started"}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      campaign.status === "active"
                        ? "success"
                        : campaign.status === "scheduled"
                        ? "info"
                        : "default"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </div>
              ))}
              <Button className="w-full">
                <Megaphone className="h-4 w-4" />
                Create Campaign
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
