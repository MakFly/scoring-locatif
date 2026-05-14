import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout() {
  return (
    <TooltipProvider>
      <div className="relative flex min-h-[100dvh] flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </TooltipProvider>
  );
}
