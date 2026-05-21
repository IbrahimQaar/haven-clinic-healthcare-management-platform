// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==============================
// Main layout + shared components
// ==============================
import MainNav from "./components/MainNav/MainNav";
import ProtectedRoute from "./components/ProtectedRoute";

import HomeView from "./views/HomeView/HomeView";
import AboutUs from "./views/AboutUs/AboutUs";
import FindLocation from "./views/FindLocation/FindLocation";
import FindServices from "./views/FindServices/FindServices.jsx";

// ==============================
// Get Care Now Services
// ==============================

import PrimaryFamilyCare from "./views/GetCare/PrimaryFamilyCare/PrimaryFamilyCare.jsx";
import InternalMedicine from "./views/GetCare/InternalMedicine/InternalMedicine.jsx";
import PediatricCare from "./views/GetCare/PediatricCare/PediatricCare.jsx";
import VirtualCare from "./views/GetCare/VirtualCare/VirtualCare.jsx";

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

import VisitorInformation from "./views/PatientResources/VisitorInformation/VisitorInformation";
import RightsAndResponsibilities from "./views/PatientResources/RightsAndResponsibilities/RightsAndResponsibilities";
import TranslationServices from "./views/PatientResources/TranslationServices/TranslationServices";
import MedicalRecords from "./views/PatientResources/MedicalRecords/MedicalRecords";
import PatientPortal from "./views/PatientResources/PatientPortal/PatientPortal";
import AppointmentConfirmation from "./views/AppointmentConfirmation/AppointmentConfirmation.jsx";
import SpiritualCare from "./views/PatientResources/SpiritualCare/SpiritualCare.jsx";
import Providefeedback from "./views/PatientResources/ProvideFeedback/ProvideFeedback.jsx";
import FeedbackForm from "./views/PatientResources/FeedbackForm/FeedbackForm.jsx";
import Policies from "./views/PatientResources/OurPolicies/Policies.jsx";
import Ecard from "./views/PatientResources/Ecard/Ecard.jsx";

// ==============================
// App features
// ==============================
import BookAppointment from "./views/BookAppointment/BookAppointment";
import MyAppointment from "./views/MyAppointments/MyAppointments.jsx";

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
            {/* Get Care Now routes */}
            {/* ============================== */}

            <Route
              path="/primary-family-care"
              element={<PrimaryFamilyCare />}
            />

            <Route path="/internal-medicine" element={<InternalMedicine />} />
            <Route path="/pediatric-care" element={<PediatricCare />} />
            <Route path="/virtual-care" element={<VirtualCare />} />

            {/* ============================== */}
            {/* Patient Resources routes */}
            {/* ============================== */}
            <Route
              path="/patient-resources"
              element={<PatientResourcesPage />}
            />

            <Route
              path="/visitor-information"
              element={<VisitorInformation />}
            />

            <Route
              path="patient-rights-responsibilities"
              element={<RightsAndResponsibilities />}
            />

            <Route
              path="/language-services"
              element={<TranslationServices />}
            />

            <Route path="/medical-records" element={<MedicalRecords />} />
            <Route path="/patient-portal" element={<PatientPortal />} />

            <Route path="/spiritual-care" element={<SpiritualCare />} />
            <Route path="/provide-feedback" element={<Providefeedback />} />
            <Route path="/feedback-form" element={<FeedbackForm />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/send-ecard" element={<Ecard />} />

            {/* ============================== */}
            {/* Book Appointment */}
            {/* ============================== */}

            <Route
              path="/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <BookAppointment />
                </ProtectedRoute>
              }
            />

            {/* Appointmets */}

            <Route
              path="/my-appointments"
              element={
                <ProtectedRoute>
                  <MyAppointment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/appointment-confirmation"
              element={<AppointmentConfirmation />}
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
