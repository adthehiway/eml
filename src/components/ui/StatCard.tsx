import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeLabel = "vs last period",
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div className={cn("card p-6", className)}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {icon && (
              <span className="text-slate-400">{icon}</span>
            )}
            <p className="text-sm font-medium text-slate-600">{title}</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold text-slate-900">{value}</p>
            {change !== undefined && trend && (
              <span className={cn(
                "text-xs font-semibold px-2 py-0.5 rounded-full",
                trend === "up" && "bg-emerald-100 text-emerald-700",
                trend === "down" && "bg-rose-100 text-rose-700",
                trend === "neutral" && "bg-slate-100 text-slate-600"
              )}>
                {change >= 0 ? "+" : ""}{change.toFixed(1)}%
              </span>
            )}
          </div>
          {changeLabel && change !== undefined && (
            <p className="text-xs text-slate-400 mt-1">{changeLabel}</p>
          )}
        </div>
      </div>
    </div>
  );
}
