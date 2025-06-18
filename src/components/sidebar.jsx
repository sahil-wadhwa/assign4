import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Calendar, KanbanSquare, BarChart2, Table } from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/calendar", label: "Calendar", icon: Calendar },
  { path: "/kanban", label: "Kanban", icon: KanbanSquare },
  { path: "/charts", label: "Charts", icon: BarChart2 },
  { path: "/tables", label: "Tables", icon: Table },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6 text-2xl font-bold text-gray-700 dark:text-gray-200">Admin</div>
      <nav className="mt-6">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-2 transition-colors duration-200 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};