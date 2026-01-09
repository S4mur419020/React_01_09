import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import Layout from "./Pages/Layout";

import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import CoursesDetails from "./Pages/CoursesDetails";
import Mentors from "./Pages/Mentors";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":id" element={<CoursesDetails />} />
        </Route>
        <Route path="mentors" element={<Mentors/>} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}