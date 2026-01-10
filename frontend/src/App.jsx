import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Endeavors from "./pages/Endeavors";
import Footer from "./sections/Footer";
import AlumniRegistration from "./pages/AlumniRegistration";
import Team from "./pages/Team";
import Form from "./pages/Form";
import { Gallery } from "./pages/Gallery";
import StartupExpoForm from "./pages/StartupFormGroup";
import StartupExpoForm1 from "./pages/StartupFormGroupStandard";
import LandingFormPage from './pages/LandingFormPage'
import ScrollToTop from "./ScrollToTop";
import ESummit from "./pages/eSummit/home/Page";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/esummit"];
  const hideFooterRoutes = ["/esummit","/team"];
  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/alumni-registration" element={<AlumniRegistration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/endeavors" element={<Endeavors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<LandingFormPage />} />
        <Route path="/startup-expo-government-form" element={<Form />} />
        <Route path="/startup-expo-group-form" element={<StartupExpoForm />} />
        <Route path="/startup-expo-standard-form" element={<StartupExpoForm1 />} />
        <Route path="/esummit" element={<ESummit />} />
      </Routes>

       {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
