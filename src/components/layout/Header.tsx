"use client";

import { Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  userName?: string;
}

export function Header({ title, subtitle, userName = "Lucas Bennett" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-6">
      {/* User greeting and title */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
          <span className="text-sm font-bold text-slate-600">
            {userName.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="text-sm text-slate-500">{userName}</p>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-2xl bg-white py-3 pl-11 pr-4 text-sm placeholder:text-slate-400 shadow-soft focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        {/* Notifications */}
        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft hover:shadow-card transition-shadow">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-rose-500 border-2 border-white" />
        </button>

        {/* Date picker style button */}
        <button className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-soft hover:shadow-card transition-shadow">
          <span>Today</span>
          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
