import Header from "@/components/admin/Header";
import Nav from "@/components/admin/Nav";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TooltipProvider>
        <Nav />
        <Header />
        {children}
      </TooltipProvider>
    </section>
  );
}
