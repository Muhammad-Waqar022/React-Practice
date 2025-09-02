import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-20 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          MyBlog
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 text-white font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-600 transition"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
