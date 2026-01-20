import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import Mentors from "./Pages/Mentors";
import Bookedsession from "./Pages/Bookedsession";
import CoursesDetails from "./Pages/CoursesDetails";
import authMiddleware from "./middleware/authMiddleware";
import { AuthProvider } from "./contexts/AuthContext";
import { CoursesProvider } from "./contexts/CoursesContext";
import { MentorProvider } from "./contexts/MentorContext";



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

        {
          path: "courses",
          children: [
            {
              index: true,
              element: <Courses />,
            },
            {
              path: ":id",
              element: <CoursesDetails />,
            },
          ],
        },
        {
          path: "/mentors",
          element: <Mentors />,
        },
        {
          path: "/bookedsession",
          element: <Bookedsession />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <CoursesProvider>
        <MentorProvider>
          <RouterProvider router={router} />;
        </MentorProvider>
      </CoursesProvider>
    </AuthProvider>
  );

}

export default App;