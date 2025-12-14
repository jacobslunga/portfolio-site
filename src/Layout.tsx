import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 flex justify-between items-center">
        {!isHome ? (
          <Link
            to="/"
            className="text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            ← Jacob Slunga
          </Link>
        ) : (
          <div />
        )}

        <div className="flex gap-6 text-neutral-600">
          <Link
            to="/"
            className={`hover:text-neutral-900 transition-colors ${
              location.pathname === "/" ? "text-neutral-900 font-medium" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/thoughts"
            className={`hover:text-neutral-900 transition-colors ${
              location.pathname.includes("/thoughts")
                ? "text-neutral-900 font-medium"
                : ""
            }`}
          >
            Thoughts
          </Link>
        </div>
      </nav> */}

      <main>
        <Outlet />
      </main>
    </div>
  );
}
