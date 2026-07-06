import { useTranslation } from "react-i18next";
import { Bell, Menu, X } from "lucide-react";

const Navbar = ({ onMenuClick, isSidebarOpen }) => {
  const { t, i18n } = useTranslation("Navbar");

  const handleLangToggle = () => {
    const newLang = i18n.language === "en" ? "ur" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleBellClick = () => {
    console.log("Notifications clicked");
  };

  const handleAvatarClick = () => {
    console.log("Profile clicked");
  };





  return (
    <header className="w-full bg-white border-b shadow-sm shadow-neutral-300 border-neutral-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      {/* Left: title + mobile menu button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-[#3A2A22] p-1 -ml-1"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <p className="text-lg sm:text-2xl lg:text-[26px] font-semibold text-[#3A2A22]">
          {t("dashboard")}
        </p>
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        <button
          onClick={handleLangToggle}
          className="border border-[#3A2A22] text-[#3A2A22] rounded-md px-2.5 sm:px-3 py-1.5 text-sm lg:text-lg font-semibold hover:bg-neutral-50 transition-colors"
        >
          {i18n.language === "en" ? "اردو" : "English"}
        </button>

        <button
          onClick={handleBellClick}
          className="relative p-1.5 sm:p-2 rounded-full text-[#6B2737] hover:bg-gray-200 transition-colors"
          aria-label="Notifications"
        >
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          <Bell size={20} className="sm:hidden" />
          <Bell size={23} className="hidden sm:block" />
        </button>

        <button
          onClick={handleAvatarClick}
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#5A1F2A] text-white flex items-center justify-center font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity"
          aria-label="Profile"
        >
          A
        </button>
      </div>
    </header>
  );
};

export default Navbar;