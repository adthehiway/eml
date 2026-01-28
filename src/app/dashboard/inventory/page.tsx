import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Warehouse,
  Package,
  AlertTriangle,
  ArrowRightLeft,
  TrendingDown,
  MapPin,
} from "lucide-react";

const inventoryStats = [
  {
    title: "Total Stock Value",
    value: "£1.2M",
    change: 4.2,
    trend: "up" as const,
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Items in Stock",
    value: "48,293",
    change: 2.1,
    trend: "up" as const,
    icon: <Warehouse className="h-5 w-5" />,
  },
  {
    title: "Low Stock Alerts",
    value: "47",
    change: -12,
    trend: "down" as const,
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Pending Transfers",
    value: "8",
    trend: "neutral" as const,
    icon: <ArrowRightLeft className="h-5 w-5" />,
  },
];

const warehouseStock = [
  { name: "Main Warehouse - London", items: 28456, value: "£780,000", utilization: 78 },
  { name: "Secondary - Manchester", items: 12340, value: "£298,000", utilization: 62 },
  { name: "Event Storage - Birmingham", items: 7497, value: "£122,000", utilization: 45 },
];

const lowStockItems = [
  { name: "Arctic Monkeys Tee - Large", sku: "AM-TEE-L", stock: 12, reorderPoint: 50 },
  { name: "Festival Bundle Pack", sku: "FBP-001", stock: 8, reorderPoint: 25 },
  { name: "Tour Poster - A2", sku: "TP-A2-001", stock: 15, reorderPoint: 40 },
  { name: "Artist Hoodie - Medium", sku: "AH-M-BLK", stock: 5, reorderPoint: 30 },
];

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Inventory"
        subtitle="Stock levels and warehouse management"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inventoryStats.map((stat) => (
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
          {/* Warehouse Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Stock</CardTitle>
            </CardHeader>
            <CardBody className="space-y-4">
              {warehouseStock.map((warehouse) => (
                <div
                  key={warehouse.name}
                  className="p-4 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {warehouse.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {warehouse.items.toLocaleString()} items
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-semibold text-slate-900">
                      {warehouse.value}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Capacity</span>
                      <span className="text-slate-700">{warehouse.utilization}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${warehouse.utilization}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Low Stock Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Low Stock Alerts
              </CardTitle>
              <Badge variant="warning">{lowStockItems.length} items</Badge>
            </CardHeader>
            <CardBody className="space-y-3">
              {lowStockItems.map((item) => (
                <div
                  key={item.sku}
                  className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-100"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500 font-mono">{item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-amber-700">
                      {item.stock} left
                    </p>
                    <p className="text-xs text-slate-500">
                      Reorder at {item.reorderPoint}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="secondary" className="w-full">
                <TrendingDown className="h-4 w-4" />
                Create Reorder
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
