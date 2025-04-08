import { Outlet } from "react-router-dom";
import {
  House,
  FileText,
  Receipt,
  UserCircle,
  SignOut,
} from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "bg-blue_secondary" : "";
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue_primary text-white">
        <div className="p-4 flex items-center justify-center border-b border-blue_secondary">
          <h1 className="text-xl font-bold">OdontoLegal</h1>
        </div>

        <nav className="mt-6">
          <ul>
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-4 hover:bg-blue_secondary transition-colors ${isActive(
                  "/dashboard"
                )}`}
              >
                <House size={24} weight="fill" className="mr-2" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cases"
                className={`flex items-center p-4 hover:bg-blue_secondary transition-colors ${isActive(
                  "/cases"
                )}`}
              >
                <FileText size={24} weight="fill" className="mr-2" />
                <span>Casos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/evidences"
                className={`flex items-center p-4 hover:bg-blue_secondary transition-colors ${isActive(
                  "/evidences"
                )}`}
              >
                <Receipt size={24} weight="fill" className="mr-2" />
                <span>Evidências</span>
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className={`flex items-center p-4 hover:bg-blue_secondary transition-colors ${isActive(
                  "/reports"
                )}`}
              >
                <FileText size={24} weight="fill" className="mr-2" />
                <span>Relatórios</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`flex items-center p-4 hover:bg-blue_secondary transition-colors ${isActive(
                  "/admin/users"
                )}`}
              >
                <UserCircle size={24} weight="fill" className="mr-2" />
                <span>Usuários</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-blue_secondary">
          <button
            className="flex items-center w-full p-4 hover:bg-red_secondary transition-colors"
            onClick={() => {
              // Lógica de logout
              window.location.href = "/login";
            }}
          >
            <SignOut size={24} weight="fill" className="mr-2" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold text-blue_primary">
              {location.pathname === "/dashboard" && "Dashboard"}
              {location.pathname === "/cases" && "Casos"}
              {location.pathname === "/evidences" && "Evidências"}
              {location.pathname === "/reports" && "Relatórios"}
              {location.pathname === "/admin/users" &&
                "Gerenciamento de Usuários"}
            </h1>
          </div>
        </header>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
