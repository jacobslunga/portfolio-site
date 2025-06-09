import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-screen flex bg-background text-foreground overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <MobileHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-8 max-w-none sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
