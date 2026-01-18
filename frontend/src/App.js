import "./App.css";
import {createBrowserRouter,RouterProvider,Navigate,} from "react-router-dom";

import Layout from "./Pages/Layout";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegistrationPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
