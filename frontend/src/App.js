import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import Dashboard from "./Pages/Dashboard";
import authMiddleware from "./middleware/authMiddleware";



function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage />, },
    { path: "/register", element: <RegistrationPage />, },
    {
      path: "/", element: <Layout />,
      middleware: [authMiddleware],
      children: [
        {
          index: true,
          element: <Navigate to="dashboard" replace />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

}

      export default App;