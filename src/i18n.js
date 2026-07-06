import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishNavbar from "./locales/Englishtranslation/Navbar.json";
import UrduNavbar from "./locales/UrduTranslation/Navbar.json";
import EnglishSidebar from "./locales/Englishtranslation/Sidebar.json";
import UrduSidebar from "./locales/UrduTranslation/Sidebar.json";   
import EnglishAuthority from "./locales/Englishtranslation/Authority.json";
import UrduAuthority from "./locales/UrduTranslation/Authority.json";
import EnglishBeneficiaries from "./locales/Englishtranslation/Beneficiaries.json";
import UrduBeneficiaries from "./locales/UrduTranslation/Beneficiaries.json";
import EnglishCampaigns from "./locales/Englishtranslation/Campaigns.json";
import UrduCampaigns from "./locales/UrduTranslation/Campaigns.json";
import EnglishCharities from "./locales/Englishtranslation/Charities.json";
import UrduCharities from "./locales/UrduTranslation/Charities.json";
import EnglishDonations from "./locales/Englishtranslation/Donations.json";
import UrduDonations from "./locales/UrduTranslation/Donations.json";
import EnglishDonors from "./locales/Englishtranslation/Donors.json";
import UrduDonors from "./locales/UrduTranslation/Donors.json";
import EnglishOverview from "./locales/Englishtranslation/Overview.json";
import UrduOverview from "./locales/UrduTranslation/Overview.json";
import EnglishReports from "./locales/Englishtranslation/Reports.json";
import UrduReports from "./locales/UrduTranslation/Reports.json";
import EnglishSettings from "./locales/Englishtranslation/Settings.json";
import UrduSettings from "./locales/UrduTranslation/Settings.json";




i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        Navbar: EnglishNavbar,
        Sidebar: EnglishSidebar,
        Authority: EnglishAuthority,
        Beneficiaries: EnglishBeneficiaries,
        Campaigns: EnglishCampaigns,
        Charities: EnglishCharities,
        Donations: EnglishDonations,
        Donors: EnglishDonors,
        Overview: EnglishOverview,
        Reports: EnglishReports,
        Settings: EnglishSettings
      },
      ur: {
        Navbar: UrduNavbar,
        Sidebar: UrduSidebar,
        Authority: UrduAuthority,
        Beneficiaries: UrduBeneficiaries,
        Campaigns: UrduCampaigns,
        Charities: UrduCharities,
        Donations: UrduDonations,
        Donors: UrduDonors,
        Overview: UrduOverview,
        Reports: UrduReports,
        Settings: UrduSettings
      },
    },

    lng: "en",
    fallbackLng: "en",

    ns: [
        "Navbar",
        "Sidebar",
        "Authority",
        "Beneficiaries",
        "Campaigns",
        "Charities",
        "Donations",
        "Donors",
        "Overview",
        "Reports",
        "Settings"
    ],

    defaultNS: "Navbar",

    interpolation: {
      escapeValue: false,
    },
  });

// Set initial direction
document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === "ur" ? "rtl" : "ltr";

// Update direction whenever language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ur" ? "rtl" : "ltr";
});

export default i18n;