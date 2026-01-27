// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==============================
// Main layout + shared components
// ==============================
import MainNav from "./components/MainNav/MainNav";
import ProtectedRoute from "./components/ProtectedRoute";

// ==============================
// Core pages (top-level routes)
// ==============================
import HomeView from "./views/HomeView/HomeView";
import AboutUs from "./views/AboutUs/AboutUs";
import FindLocation from "./views/FindLocation/FindLocation";
import FindServices from "./views/FindServices/FindServices.jsx";

// ==============================
// Auth pages
// ==============================
import LoginView from "./views/LoginView/LoginView";
import LogoutView from "./views/LogoutView";
import RegisterView from "./views/RegisterView/RegisterView";
import UserProfileView from "./views/UserProfileView/UserProfileView";

// ==============================
// Patient Resources - Overview
// ==============================
import PatientResourcesPage from "./views/PatientResources/PatientResourcesOverview/PatientResourcesOverview.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div id="app">
        {/* Global nav shown on every page */}
        <MainNav />

        <main id="main-content">
          <Routes>
            {/* ============================== */}
            {/* Core routes */}
            {/* ============================== */}
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/locations" element={<FindLocation />} />
            <Route path="/services" element={<FindServices />} />
            {/* ============================== */}
            {/* Patient Resources routes */}
            {/* ============================== */}
            <Route
              path="/patient-resources"
              element={<PatientResourcesPage />}
            />


            {/* ============================== */}
            {/* Auth routes */}
            {/* ============================== */}
            <Route path="/login" element={<LoginView />} />
            <Route path="/logout" element={<LogoutView />} />
            <Route path="/register" element={<RegisterView />} />
            {/* Protected user page */}
            <Route
              path="/userProfile"
              element={
                <ProtectedRoute>
                  <UserProfileView />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
