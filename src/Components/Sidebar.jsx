import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // CHANGED: added i18next hook
import {
  Home,
  Heart,
  HeartHandshake,
  Users,
  FileText,
  BarChart3,
  Database,
  Settings,
} from "lucide-react";

// CHANGED: "name" is now a stable translation key (not the displayed English text).
// This keeps `active` state language-independent, so switching languages doesn't
// break the highlighted/active nav item.
const navItems = [
  { key: "overview", icon: Home, link: "/" },
  { key: "donations", icon: Heart, link: "/donations" },
  { key: "donors", icon: HeartHandshake, link: "/donors" },
  { key: "charities", icon: Users, link: "/charities" },
  { key: "campaigns", icon: FileText, link: "/campaigns" },
  { key: "authority", icon: BarChart3, link: "/authority" },
  { key: "beneficiaries", icon: Database, link: "/beneficiaries" },
  { key: "reports", icon: FileText, link: "/reports" },
  { key: "settings", icon: Settings, link: "/settings" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useTranslation("Sidebar"); // CHANGED: added translation hook
  const [active, setActive] = useState("overview"); // CHANGED: default matches new key, not "Overview"
  const navigate = useNavigate(); // 1. Initialized the router navigation hook

  // 2. Updated handler to accept the navigation target path
  const handleNavClick = (key, link) => {
    setActive(key); // CHANGED: store the key instead of the translated label
    navigate(link); // 3. Programmatically updates the browser routing path
    if (window.innerWidth < 1024) onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-64 bg-[#723134] text-white p-4 z-40 transform transition-transform duration-200
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <p className="text-3xl font-bold px-2 pb-6">{t("dashboardTitle")}</p>
        {/* CHANGED: "Dashboard" -> t("dashboardTitle") */}

        <ul className="flex flex-col gap-4">
          {navItems.map(({ key, icon: Icon, link }) => (
            <li
              key={key}
              onClick={() => handleNavClick(key, link)} // 4. Forwarding the path arguments to our handler
              className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer text-sm transition-colors
  ${active === key
                  ? "bg-white/15 font-semibold text-white"
                  : "text-white hover:bg-white hover:text-[#723134]"
                }`}
            >
              <Icon size={18} />
              {t(key)} {/* CHANGED: {name} -> {t(key)} */}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;