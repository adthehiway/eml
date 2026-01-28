import { Header } from "@/components/layout/Header";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  MapPin,
  CreditCard,
  Plug,
  Settings,
  Users,
  Plus,
  ChevronRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const adminSections = [
  {
    name: "Companies / Clients",
    description: "Manage client accounts and tiers",
    icon: Building2,
    href: "/admin/companies",
    count: 47,
  },
  {
    name: "Locations",
    description: "Stores, warehouses, and venues",
    icon: MapPin,
    href: "/admin/locations",
    count: 156,
  },
  {
    name: "POS Systems",
    description: "Payment system connections",
    icon: CreditCard,
    href: "/admin/pos",
    count: 12,
  },
  {
    name: "Integrations",
    description: "External service connections",
    icon: Plug,
    href: "/admin/integrations",
    count: 8,
  },
  {
    name: "System Settings",
    description: "Tax rates, currencies, defaults",
    icon: Settings,
    href: "/admin/settings",
    count: null,
  },
];

const integrationStatus = [
  { name: "Shopify", status: "connected", lastSync: "2 min ago" },
  { name: "NOQ", status: "connected", lastSync: "5 min ago" },
  { name: "Square", status: "connected", lastSync: "10 min ago" },
  { name: "Xero", status: "connected", lastSync: "5 min ago" },
  { name: "Google Analytics", status: "error", lastSync: "Failed" },
  { name: "Meta Ads", status: "connected", lastSync: "1 hour ago" },
];

const recentUsers = [
  { name: "John Doe", email: "john@eml.com", role: "Admin", lastActive: "Now" },
  { name: "Sarah Smith", email: "sarah@eml.com", role: "Manager", lastActive: "2 hours ago" },
  { name: "Mike Johnson", email: "mike@eml.com", role: "Staff", lastActive: "Today" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Admin / Setup"
        subtitle="System configuration and management"
      />

      <div className="p-6 space-y-6">
        {/* Admin Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section) => (
            <Card key={section.name} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardBody>
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <section.icon className="h-6 w-6" />
                  </div>
                  {section.count !== null && (
                    <Badge variant="default">{section.count}</Badge>
                  )}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mt-4">{section.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{section.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 -ml-2">
                  Manage <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Integration Status */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Integration Status</CardTitle>
              <Button variant="ghost" size="sm">
                <Plug className="h-4 w-4 mr-1" />
                Manage
              </Button>
            </CardHeader>
            <CardBody className="space-y-3">
              {integrationStatus.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    {integration.status === "connected" ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-rose-500" />
                    )}
                    <span className="text-sm font-medium text-slate-900">{integration.name}</span>
                  </div>
                  <span className="text-xs text-slate-500">{integration.lastSync}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Recent Users */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Users</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4" />
                Add User
              </Button>
            </CardHeader>
            <CardBody className="space-y-3">
              {recentUsers.map((user) => (
                <div
                  key={user.email}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-slate-600">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">{user.role}</Badge>
                    <p className="text-xs text-slate-400 mt-1">{user.lastActive}</p>
                  </div>
                </div>
              ))}
              <Button variant="secondary" className="w-full">
                <Users className="h-4 w-4" />
                View All Users
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
