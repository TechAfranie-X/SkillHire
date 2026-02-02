import { NavLink, Outlet } from "react-router-dom";

const linkBase = "flex items-center gap-3 rounded-lg px-3 py-2 text-sm";
const active = "bg-blue-50 text-blue-700";
const idle = "text-gray-700 hover:bg-gray-50";

export default function EmployerLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="w-64 border-r bg-white min-h-screen p-4">
          <div className="font-semibold text-blue-700 text-lg mb-6">
            SkillHire
          </div>

          <nav className="space-y-1">
            <NavLink
              to="/employer/dashboard"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/employer/jobs"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              Jobs
            </NavLink>

            <NavLink
              to="/employer/candidates"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              Candidates
            </NavLink>

            <NavLink
              to="/employer/messages"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              Messages
            </NavLink>

            <NavLink
              to="/employer/network"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              My Network
            </NavLink>

            <NavLink
              to="/employer/profile"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              Profile
            </NavLink>

            <NavLink
              to="/employer/settings"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : idle}`
              }
            >
              Settings
            </NavLink>
          </nav>
        </aside>

        <div className="flex-1">
          <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">Employer Portal</div>
            <div className="text-sm text-gray-700">Account</div>
          </header>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
