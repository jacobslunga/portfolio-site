import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
