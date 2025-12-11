import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-[#242424] fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <NavLink
            to="/"
            className="text-2xl text-white font-medium"
          >
            SmartSpace
          </NavLink>
        </div>
        <div className="font-medium space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-white"
              } text-2xl hover:text-blue-500`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-white"
              } text-2xl hover:text-blue-500`
            }
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-white"
              } text-2xl hover:text-blue-500`
            }
          >
            Log In
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-white"
              } text-2xl hover:text-blue-500`
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
