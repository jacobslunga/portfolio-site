import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent fixed top-0 right-0 z-10">
      <div className="flex w-auto bg-neutral-50 dark:bg-neutral-900">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              "px-5 py-1.5 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-inner"
                : "text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 hover:bg-neutral-100 dark:hover:text-neutral-50 dark:hover:bg-neutral-700/60",
            ].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/thoughts"
          className={({ isActive }) =>
            [
              "px-5 py-1.5 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-inner"
                : "text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 hover:bg-neutral-100 dark:hover:text-neutral-50 dark:hover:bg-neutral-700/60",
            ].join(" ")
          }
        >
          Thoughts
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
