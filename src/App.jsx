import Layout from "./Layout";
import PublicLayout from "./PublicLayout";
import Overview from "./Pages/Dashboard/Overview";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import Donations from "./Pages/Dashboard/Donations";
import Donors from "./Pages/Dashboard/Donors";
import Charities from "./Pages/Dashboard/Charities";
import Campaigns from "./Pages/Dashboard/Campaigns";
import Authority from "./Pages/Dashboard/Authority";
import Beneficiaries from "./Pages/Dashboard/Beneficiaries";
import Reports from "./Pages/Dashboard/Reports";
import Settings from "./Pages/Dashboard/Settings";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Signup from "./Pages/Signup";
import Campaign from "./Pages/Campaign";
import ContactPage from "./Pages/ContactPage";
import DonorPage from "./Pages/DonorPage";
import AboutPage from "./Pages/AboutPage";






const App = () => {
  return (
    <Routes>
      {/* Public site: Navbar + Footer on every route nested here */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* Dashboard: its own Navbar + Sidebar, no public Footer */}
      <Route path="dashboard" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="donations" element={<Donations />} />
        <Route path="donors" element={<Donors />} />
        <Route path="charities" element={<Charities />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="authority" element={<Authority />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;