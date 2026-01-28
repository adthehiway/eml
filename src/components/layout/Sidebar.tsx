"use client";

import Link from "next/link";
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
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
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
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-slate-200">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 px-6 border-b border-slate-200">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
            <span className="text-sm font-bold text-white">E</span>
          </div>
          <span className="text-lg font-semibold text-slate-900">EML Admin</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={cn(
                        "w-full nav-link justify-between",
                        isActive(item.href) && "nav-link-active"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItems.includes(item.name) && "rotate-180"
                        )}
                      />
                    </button>
                    {expandedItems.includes(item.name) && (
                      <ul className="mt-1 ml-8 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900",
                                pathname === child.href &&
                                  "bg-primary-50 text-primary-700"
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
                      "nav-link",
                      isActive(item.href) && "nav-link-active"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center">
              <span className="text-sm font-medium text-slate-600">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-slate-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
