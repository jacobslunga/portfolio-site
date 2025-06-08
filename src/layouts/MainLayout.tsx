import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-screen flex bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full">
        <MobileHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 py-6 lg:px-8 lg:py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
