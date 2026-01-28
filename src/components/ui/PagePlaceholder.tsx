import { Header } from "@/components/layout/Header";
import { Construction, ArrowRight } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  subtitle?: string;
  section: string;
}

export function PagePlaceholder({ title, subtitle, section }: PagePlaceholderProps) {
  return (
    <div className="min-h-screen">
      <Header title={title} subtitle={subtitle} />
      <div className="px-8 pb-8">
        <div className="card p-12">
          <div className="text-center max-w-lg mx-auto">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-warm-100 to-warm-200 text-warm-600 mx-auto mb-6">
              <Construction className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              {title}
            </h2>
            <p className="text-slate-500 mb-6">
              This page is part of the <span className="font-medium text-slate-700">{section}</span> section and will be built out with full functionality.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button className="btn btn-primary">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Placeholder content grid */}
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-4 card p-6">
            <div className="h-4 w-24 bg-sage-200 rounded-full mb-4"></div>
            <div className="h-8 w-32 bg-sage-200 rounded-full mb-2"></div>
            <div className="h-3 w-20 bg-sage-100 rounded-full"></div>
          </div>
          <div className="col-span-4 card p-6">
            <div className="h-4 w-24 bg-sage-200 rounded-full mb-4"></div>
            <div className="h-8 w-32 bg-sage-200 rounded-full mb-2"></div>
            <div className="h-3 w-20 bg-sage-100 rounded-full"></div>
          </div>
          <div className="col-span-4 card p-6">
            <div className="h-4 w-24 bg-sage-200 rounded-full mb-4"></div>
            <div className="h-8 w-32 bg-sage-200 rounded-full mb-2"></div>
            <div className="h-3 w-20 bg-sage-100 rounded-full"></div>
          </div>
          <div className="col-span-8 card p-6">
            <div className="h-4 w-32 bg-sage-200 rounded-full mb-6"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-sage-100 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-3 w-48 bg-sage-200 rounded-full mb-2"></div>
                    <div className="h-2 w-32 bg-sage-100 rounded-full"></div>
                  </div>
                  <div className="h-6 w-16 bg-sage-100 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 card p-6">
            <div className="h-4 w-24 bg-sage-200 rounded-full mb-4"></div>
            <div className="h-32 bg-sage-100 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
