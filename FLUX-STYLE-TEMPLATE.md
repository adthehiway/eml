# Flux-Style Dashboard Template

A modern, layered dashboard layout with two curved boxes, sage/mint green frame, and clean white content area.

---

## Design Overview

```
┌─────────────────────────────────────────────────────┐  ← White background (p-4)
│  ┌───────────────────────────────────────────────┐  │
│  │  ┌──────┐  ┌──────────────────────────────┐   │  │  ← Sage frame (rounded-[2rem])
│  │  │      │  │                              │   │  │
│  │  │ Side │  │       White Content          │   │  │  ← White card (rounded-[1.5rem])
│  │  │ bar  │  │                              │   │  │
│  │  │      │  │                              │   │  │
│  │  └──────┘  └──────────────────────────────┘   │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

---

## 1. Tailwind Config (`tailwind.config.ts`)

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        sage: {
          50: '#F7FAF5',
          100: '#EEF4E8',
          200: '#E2ECDA',
          300: '#D4E4C9',
          400: '#B8D4A2',
          500: '#9BC47D',
          600: '#7DAD5A',
          700: '#5F8B42',
          800: '#476832',
          900: '#2F4522',
        },
        warm: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        primary: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6B21A8',
          900: '#581C87',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.06)',
        'elevated': '0 8px 24px -4px rgba(0, 0, 0, 0.1), 0 16px 48px -8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 2. Global CSS (`globals.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-sage-200;
  }

  body {
    @apply bg-white text-slate-900 antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer components {
  /* Cards */
  .card {
    @apply bg-white rounded-3xl border border-slate-200/60 shadow-soft;
  }

  .card-header {
    @apply px-6 py-5 border-b border-slate-100/50;
  }

  .card-body {
    @apply p-6;
  }

  /* Stats */
  .stat-value {
    @apply text-4xl font-bold tracking-tight text-slate-900;
  }

  .stat-label {
    @apply text-sm font-medium text-slate-500;
  }

  .stat-trend-up {
    @apply text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full;
  }

  .stat-trend-down {
    @apply text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full;
  }

  /* Navigation */
  .nav-link {
    @apply flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-2xl transition-all duration-200 hover:bg-white/60 hover:text-slate-900;
  }

  .nav-link-active {
    @apply bg-lime-400 text-slate-900 shadow-sm hover:bg-lime-400 hover:text-slate-900;
  }

  /* Buttons */
  .btn {
    @apply inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none;
  }

  .btn-primary {
    @apply bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900;
  }

  .btn-secondary {
    @apply bg-white text-slate-700 shadow-soft hover:shadow-card focus:ring-slate-500;
  }

  .btn-lime {
    @apply bg-lime-400 text-slate-900 hover:bg-lime-500 focus:ring-lime-500;
  }

  /* Input */
  .input {
    @apply w-full px-4 py-3 text-sm border-0 rounded-2xl bg-white shadow-soft placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400;
  }

  /* Badges */
  .badge {
    @apply inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full;
  }

  .badge-success {
    @apply bg-emerald-100 text-emerald-700;
  }

  .badge-warning {
    @apply bg-amber-100 text-amber-700;
  }

  .badge-error {
    @apply bg-rose-100 text-rose-700;
  }

  .badge-info {
    @apply bg-sky-100 text-sky-700;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  @apply bg-transparent;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-300/50 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-400/50;
}
```

---

## 3. Dashboard Layout (`app/dashboard/layout.tsx`)

```tsx
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-white p-4 overflow-hidden">
      {/* Outer sage box - the "frame" that wraps everything */}
      <div className="h-full w-full bg-sage-300 rounded-[2rem] p-4 flex gap-4">
        {/* Sidebar area - left side of the sage frame */}
        <div className="w-60 flex-shrink-0 overflow-hidden">
          <Sidebar />
        </div>

        {/* Main content - white card floating inside the sage frame */}
        <main className="flex-1 bg-white rounded-[1.5rem] shadow-xl overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
```

---

## 4. Sidebar Component (`components/layout/Sidebar.tsx`)

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Users,
  FileBarChart,
  ChevronDown,
  Bell,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  children?: { name: string; href: string }[];
}

// Customize your navigation here
const navigation: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, badge: 3 },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    children: [
      { name: "General", href: "/dashboard/settings/general" },
      { name: "Security", href: "/dashboard/settings/security" },
    ],
  },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Reports", href: "/dashboard/reports", icon: FileBarChart },
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
    <aside className="h-full flex flex-col py-2 overflow-hidden">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-3 px-4 py-3 mb-2">
        {/* Replace with your logo */}
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-400">
          <span className="text-lg font-bold text-slate-900">A</span>
        </div>
        <span className="text-xl font-bold text-slate-900">AppName</span>
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
            <span>Alert message here</span>
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
```

---

## 5. Utility Function (`lib/utils.ts`)

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 6. Header Component (`components/layout/Header.tsx`)

```tsx
import { Search } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="px-8 py-6 border-b border-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 text-sm bg-sage-100 border-0 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
```

---

## 7. Required Dependencies

```bash
npm install clsx tailwind-merge lucide-react
```

---

## Quick Setup Checklist

1. [ ] Copy `tailwind.config.ts`
2. [ ] Copy `globals.css`
3. [ ] Copy `lib/utils.ts`
4. [ ] Copy `app/dashboard/layout.tsx`
5. [ ] Copy `components/layout/Sidebar.tsx`
6. [ ] Copy `components/layout/Header.tsx`
7. [ ] Install dependencies: `clsx`, `tailwind-merge`, `lucide-react`
8. [ ] Add Inter font to your project
9. [ ] Customize navigation items in Sidebar
10. [ ] Add your logo

---

## Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Sage 300 | `#D4E4C9` | Frame background |
| Lime 400 | `#a3e635` | Active states, accents |
| Slate 900 | `#0f172a` | Primary text, buttons |
| Slate 600 | `#475569` | Secondary text |
| White | `#ffffff` | Content background |

---

## Design Tokens

- **Border Radius**: `rounded-2xl` (1rem), `rounded-3xl` (1.5rem), `rounded-[2rem]`
- **Shadows**: `shadow-soft`, `shadow-card`, `shadow-xl`
- **Spacing**: `p-4` (frame), `gap-4` (between sidebar and content)
- **Transitions**: `transition-all duration-200`
