import Layout from "./Layout";
import Overview from "./Pages/Overview";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import Donations from "./Pages/Donations";
import Donors from "./Pages/Donors";
import Charities from "./Pages/Charities";
import Campaigns from "./Pages/Campaigns";
import Authority from "./Pages/Authority";
import Beneficiaries from "./Pages/Beneficiaries";
import Reports from "./Pages/Reports";  
import Settings from "./Pages/Settings";

const App = () => {
  return (
    <Routes>
    
      <Route path="/" element={<Layout><Overview /></Layout>} />
       <Route path="Donations" element={<Layout><Donations /></Layout>} />
      <Route path="Donors" element={<Layout><Donors /></Layout>} />
      <Route path="Charities" element={<Layout><Charities /></Layout>} />
      <Route path="Campaigns" element={<Layout><Campaigns /></Layout>} />
      <Route path="Authority" element={<Layout><Authority /></Layout>} />
      <Route path="Beneficiaries" element={<Layout><Beneficiaries /></Layout>} />
      <Route path="Reports" element={<Layout><Reports /></Layout>} />
      <Route path="Settings" element={<Layout><Settings /></Layout>} />

    </Routes>
  );
};

export default App;