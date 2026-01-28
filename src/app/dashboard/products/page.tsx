import { Header } from "@/components/layout/Header";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Package,
  Plus,
  Search,
  Filter,
  Grid,
  List,
  MoreVertical,
} from "lucide-react";

const productStats = [
  {
    title: "Total Products",
    value: "3,847",
    change: 2.4,
    trend: "up" as const,
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Active Products",
    value: "3,156",
    trend: "neutral" as const,
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Low Stock Items",
    value: "47",
    trend: "down" as const,
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Out of Stock",
    value: "12",
    trend: "down" as const,
    icon: <Package className="h-5 w-5" />,
  },
];

const products = [
  {
    id: 1,
    name: "Arctic Monkeys Tour Tee",
    sku: "AM-TEE-001",
    category: "Apparel",
    price: "£25.00",
    stock: 847,
    status: "active",
  },
  {
    id: 2,
    name: "Festival Bundle Pack",
    sku: "FBP-001",
    category: "Bundles",
    price: "£30.00",
    stock: 234,
    status: "active",
  },
  {
    id: 3,
    name: "Artist Hoodie - Black",
    sku: "AH-BLK-M",
    category: "Apparel",
    price: "£50.00",
    stock: 156,
    status: "active",
  },
  {
    id: 4,
    name: "Limited Edition Vinyl",
    sku: "LEV-2024",
    category: "Music",
    price: "£30.00",
    stock: 45,
    status: "low_stock",
  },
  {
    id: 5,
    name: "Event Poster Collection",
    sku: "EPC-SET",
    category: "Prints",
    price: "£15.00",
    stock: 0,
    status: "out_of_stock",
  },
  {
    id: 6,
    name: "Tour Cap - Navy",
    sku: "TC-NVY-OS",
    category: "Accessories",
    price: "£18.00",
    stock: 523,
    status: "active",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Products"
        subtitle="Manage your product catalogue"
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productStats.map((stat) => (
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

        {/* Products Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Product Catalogue</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <Button variant="secondary" size="sm">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <button className="p-2 bg-slate-100 text-slate-600">
                  <List className="h-4 w-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600">
                  <Grid className="h-4 w-4" />
                </button>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Product
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    SKU
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Category
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Price
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Stock
                  </th>
                  <th className="text-center text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                  <th className="text-right text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-slate-300" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          <Package className="h-5 w-5 text-slate-400" />
                        </div>
                        <span className="text-sm font-medium text-slate-900">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-mono">
                      {product.sku}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-900 text-right">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-900 text-right">
                      {product.stock.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge
                        variant={
                          product.status === "active"
                            ? "success"
                            : product.status === "low_stock"
                            ? "warning"
                            : "error"
                        }
                      >
                        {product.status.replace("_", " ")}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
