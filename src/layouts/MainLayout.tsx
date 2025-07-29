import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#f8f7f4] dark:bg-[#171716]">
      <CustomCursor />
      <Outlet />
    </div>
  );
}
