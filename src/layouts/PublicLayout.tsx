import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-blue-700 text-lg">
            SkillHire
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link to="/jobs" className="text-gray-700 hover:text-gray-900">
              Find a Job
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Post a Job
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>

    <main>
        <Outlet />
    </main>

    </div>
  );
}
