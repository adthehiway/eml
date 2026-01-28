import { Header } from "@/components/layout/Header";
import { Card, CardHeader, CardBody, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Bot,
  Send,
  Sparkles,
  Clock,
  TrendingUp,
  ShoppingCart,
  Users,
  Bookmark,
} from "lucide-react";

const suggestedQueries = [
  {
    text: "What were our top selling products last month?",
    category: "Sales",
  },
  {
    text: "Show me revenue comparison by channel YoY",
    category: "Analytics",
  },
  {
    text: "Which live events have the highest per-head spend?",
    category: "Events",
  },
  {
    text: "What's our current inventory status for tour merchandise?",
    category: "Inventory",
  },
];

const recentQueries = [
  {
    query: "Compare Q4 2024 vs Q4 2023 sales performance",
    time: "2 hours ago",
    department: "Executive",
  },
  {
    query: "List all low stock items for Arctic Monkeys tour",
    time: "Yesterday",
    department: "Operations",
  },
  {
    query: "What's the ROI on our Meta advertising this month?",
    time: "2 days ago",
    department: "Marketing",
  },
];

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="AI Assistant"
        subtitle="Ask questions about your data in natural language"
      />

      <div className="p-6 space-y-6">
        {/* Main Chat Interface */}
        <Card className="overflow-hidden">
          <div className="h-[500px] flex flex-col">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-primary-50 to-indigo-50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    EML AI Assistant
                  </h3>
                  <p className="text-xs text-slate-500">
                    Powered by natural language processing
                  </p>
                </div>
              </div>
              <Badge variant="success">Online</Badge>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50">
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Welcome Message */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-700">
                      Hello! I'm your AI assistant. I can help you analyze sales data,
                      track inventory, understand marketing performance, and much more.
                      Just ask me anything about your business data.
                    </p>
                    <p className="text-xs text-slate-400 mt-2">Just now</p>
                  </div>
                </div>

                {/* Suggested Queries */}
                <div className="pl-11">
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    Try asking:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQueries.map((query, idx) => (
                      <button
                        key={idx}
                        className="px-3 py-2 text-xs text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors text-left"
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles className="h-3 w-3 text-amber-500" />
                          {query.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="px-6 py-4 border-t border-slate-100 bg-white">
              <div className="max-w-2xl mx-auto flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask me anything about your data..."
                  className="flex-1 px-4 py-3 text-sm border border-slate-200 rounded-xl bg-slate-50 placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <Button className="rounded-xl px-4">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Department Access */}
          <Card>
            <CardHeader>
              <CardTitle>Department Views</CardTitle>
            </CardHeader>
            <CardBody className="space-y-3">
              {[
                { name: "Sales", icon: ShoppingCart, color: "bg-emerald-500" },
                { name: "Marketing", icon: TrendingUp, color: "bg-indigo-500" },
                { name: "Operations", icon: Users, color: "bg-amber-500" },
                { name: "Finance", icon: Bookmark, color: "bg-rose-500" },
              ].map((dept) => (
                <button
                  key={dept.name}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${dept.color} text-white`}
                  >
                    <dept.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {dept.name} AI
                  </span>
                </button>
              ))}
            </CardBody>
          </Card>

          {/* Recent Queries */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Queries</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardBody className="space-y-4">
              {recentQueries.map((query, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 flex-shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-900 truncate">
                      {query.query}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-400">{query.time}</span>
                      <Badge variant="default">{query.department}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
