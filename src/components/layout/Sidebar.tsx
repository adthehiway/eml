"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Package,
  Warehouse,
  TrendingUp,
  Calendar,
  UtensilsCrossed,
  Users,
  Megaphone,
  FileBarChart,
  Bot,
  Wallet,
  ChevronDown,
  Bell,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  children?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, badge: 3 },
  {
    name: "Admin / Setup",
    href: "/dashboard/admin",
    icon: Settings,
    children: [
      { name: "Companies", href: "/dashboard/admin/companies" },
      { name: "Locations", href: "/dashboard/admin/locations" },
      { name: "POS Systems", href: "/dashboard/admin/pos" },
      { name: "Integrations", href: "/dashboard/admin/integrations" },
      { name: "System Settings", href: "/dashboard/admin/settings" },
    ],
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: Package,
    children: [
      { name: "Catalogue", href: "/dashboard/products/catalogue" },
      { name: "Pricing", href: "/dashboard/products/pricing" },
      { name: "Suppliers", href: "/dashboard/products/suppliers" },
      { name: "Purchase Orders", href: "/dashboard/products/orders" },
    ],
  },
  {
    name: "Inventory",
    href: "/dashboard/inventory",
    icon: Warehouse,
    children: [
      { name: "Stock Overview", href: "/dashboard/inventory/overview" },
      { name: "Stock Movements", href: "/dashboard/inventory/movements" },
      { name: "Stock Takes", href: "/dashboard/inventory/stock-takes" },
      { name: "Reorder Management", href: "/dashboard/inventory/reorder" },
    ],
  },
  {
    name: "Sales",
    href: "/dashboard/sales",
    icon: TrendingUp,
    children: [
      { name: "Dashboard", href: "/dashboard/sales" },
      { name: "By Channel", href: "/dashboard/sales/channel" },
      { name: "By Product", href: "/dashboard/sales/product" },
      { name: "Orders", href: "/dashboard/sales/orders" },
      { name: "Transactions", href: "/dashboard/sales/transactions" },
    ],
  },
  {
    name: "Live Events",
    href: "/dashboard/live-events",
    icon: Calendar,
    badge: 2,
    children: [
      { name: "Overview", href: "/dashboard/live-events" },
      { name: "Tours", href: "/dashboard/live-events/tours" },
      { name: "Festivals", href: "/dashboard/live-events/festivals" },
      { name: "Venues", href: "/dashboard/live-events/venues" },
      { name: "Crew / Staff", href: "/dashboard/live-events/staff" },
      { name: "Reports", href: "/dashboard/live-events/reports" },
      { name: "Settlements", href: "/dashboard/live-events/settlements" },
    ],
  },
  {
    name: "Food Traders",
    href: "/dashboard/food-traders",
    icon: UtensilsCrossed,
    children: [
      { name: "Overview", href: "/dashboard/food-traders" },
      { name: "Traders", href: "/dashboard/food-traders/traders" },
      { name: "Menus", href: "/dashboard/food-traders/menus" },
      { name: "Sales", href: "/dashboard/food-traders/sales" },
      { name: "Settlements", href: "/dashboard/food-traders/settlements" },
    ],
  },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  {
    name: "Marketing",
    href: "/dashboard/marketing",
    icon: Megaphone,
    children: [
      { name: "Overview", href: "/dashboard/marketing" },
      { name: "Campaigns", href: "/dashboard/marketing/campaigns" },
      { name: "Email", href: "/dashboard/marketing/email" },
      { name: "CRM", href: "/dashboard/marketing/crm" },
    ],
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileBarChart,
    badge: 1,
    children: [
      { name: "Overview", href: "/dashboard/reports" },
      { name: "Standard", href: "/dashboard/reports/standard" },
      { name: "Sales", href: "/dashboard/reports/sales" },
      { name: "Products", href: "/dashboard/reports/products" },
      { name: "Finance", href: "/dashboard/reports/finance" },
      { name: "Custom", href: "/dashboard/reports/custom" },
    ],
  },
  { name: "AI Assistant", href: "/dashboard/ai", icon: Bot },
  {
    name: "Finance",
    href: "/dashboard/finance",
    icon: Wallet,
    children: [
      { name: "Overview", href: "/dashboard/finance" },
      { name: "Invoicing", href: "/dashboard/finance/invoicing" },
      { name: "Payments", href: "/dashboard/finance/payments" },
      { name: "Settlements", href: "/dashboard/finance/settlements" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Auto-expand menu items based on current path
  useEffect(() => {
    const activeParent = navigation.find(
      (item) =>
        item.children &&
        (pathname === item.href || pathname.startsWith(item.href + "/"))
    );
    if (activeParent && !expandedItems.includes(activeParent.name)) {
      setExpandedItems((prev) => [...prev, activeParent.name]);
    }
  }, [pathname]);

  const toggleExpanded = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="h-full flex flex-col py-2">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-3 px-4 py-3 mb-2">
        <Image
          src="/logo.png"
          alt="EML Logo"
          width={120}
          height={36}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className={cn(
                      "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium rounded-2xl transition-all duration-200",
                      isActive(item.href)
                        ? "bg-lime-400 text-slate-900"
                        : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.name}
                      {item.badge && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        expandedItems.includes(item.name) && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedItems.includes(item.name) && (
                    <ul className="mt-1 ml-4 space-y-1 border-l-2 border-slate-300 pl-4">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                              pathname === child.href
                                ? "bg-white/80 text-slate-900"
                                : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
                            )}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-2xl transition-all duration-200",
                    isActive(item.href)
                      ? "bg-lime-400 text-slate-900"
                      : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                  {item.badge && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Notifications Widget */}
      <div className="flex-shrink-0 mx-2 mb-2 rounded-3xl bg-lime-400 p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/10">
            <Bell className="h-5 w-5 text-slate-900" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-900">3 New Alerts</h3>
            <p className="text-xs text-slate-700 mt-0.5">
              Requires your attention
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-800">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>Low stock: Arctic Monkeys Tee</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-800">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>Payment pending: O2 Arena</span>
          </div>
        </div>
        <button className="w-full mt-4 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors">
          View All
        </button>
      </div>

      {/* User section */}
      <div className="flex-shrink-0 mx-2 mt-2 p-3 rounded-2xl bg-white/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center">
            <span className="text-sm font-bold text-slate-900">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">John Doe</p>
            <p className="text-xs text-slate-500 truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
