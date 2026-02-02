import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import EmployerLayout from "../layouts/EmployerLayout";

import Landing from "../pages/public/Landing";
import Login from "../pages/auth/Login";
import EmployerDashboard from "../pages/employer/Dashboard";

const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="text-gray-600 mt-2">Placeholder page.</p>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "jobs", element: <Placeholder title="Job Browse" /> },
      { path: "about", element: <Placeholder title="About" /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/employer",
    element: <EmployerLayout />,
    children: [{ path: "dashboard", element: <EmployerDashboard /> }],
  },
]);
