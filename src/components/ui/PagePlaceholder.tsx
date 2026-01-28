import { Header } from "@/components/layout/Header";
import { Card, CardBody } from "@/components/ui/Card";
import { Construction } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  subtitle?: string;
  section: string;
}

export function PagePlaceholder({ title, subtitle, section }: PagePlaceholderProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header title={title} subtitle={subtitle} />
      <div className="p-6">
        <Card>
          <CardBody className="py-16">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600 mx-auto mb-4">
                <Construction className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {title}
              </h2>
              <p className="text-slate-500 max-w-md mx-auto">
                This page is part of the {section} section and will be built out with full functionality.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
