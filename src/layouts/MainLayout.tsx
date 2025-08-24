import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="min-h-screen w-screen">
      <Header />
      <Outlet />
    </main>
  );
}
