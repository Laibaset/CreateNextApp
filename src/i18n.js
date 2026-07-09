import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishNavbar from "./locales/Englishtranslation/Navbar.json";
import UrduNavbar from "./locales/UrduTranslation/Navbar.json";
import EnglishWebNavbar from "./locales/Englishtranslation/WebNavbar.json";
import UrduWebNavbar from "./locales/UrduTranslation/WebNavbar.json";
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
import EnglishCommunity from "./locales/Englishtranslation/Community.json";
import UrduCommunity from "./locales/UrduTranslation/Community.json";
import EnglishCampaignSection from "./locales/Englishtranslation/CampaignSection.json";
import UrduCampaignSection from "./locales/UrduTranslation/CampaignSection.json";
import EnglishFaqSection from "./locales/Englishtranslation/FaqSection.json";
import UrduFaqSection from "./locales/UrduTranslation/FaqSection.json";
import EnglishFooter from "./locales/Englishtranslation/Footer.json";
import UrduFooter from "./locales/UrduTranslation/Footer.json";
import EnglishPlatformSection from "./locales/Englishtranslation/PlatformSection.json";
import UrduPlatformSection from "./locales/UrduTranslation/PlatformSection.json";
import EnglishPremierPlatform from "./locales/Englishtranslation/PremierPlatform.json";
import UrduPremierPlatform from "./locales/UrduTranslation/PremierPlatform.json";
import EnglishTransparentProcess from "./locales/Englishtranslation/TransparentProcess.json";
import UrduTransparentProcess from "./locales/UrduTranslation/TransparentProcess.json";
import EnglishAboutPage from "./locales/Englishtranslation/AboutPage.json";
import UrduAboutPage from "./locales/UrduTranslation/AboutPage.json";
import EnglishWebcampaigns from "./locales/Englishtranslation/Webcampaigns.json";
import UrduWebcampaigns from "./locales/UrduTranslation/Webcampaigns.json";
import EnglishWebdonor from "./locales/Englishtranslation/Webdonor.json";
import UrduWebdonor from "./locales/UrduTranslation/Webdonor.json";
import EnglishContact from "./locales/Englishtranslation/Contact.json";
import UrduContact from "./locales/UrduTranslation/Contact.json";
import EnglishLogin from "./locales/Englishtranslation/Login.json";
import UrduLogin from "./locales/UrduTranslation/Login.json";
import EnglishSignup from "./locales/Englishtranslation/Signup.json";
import UrduSignup from "./locales/UrduTranslation/Signup.json";
import EnglishSupportFormModal from "./locales/Englishtranslation/SupportFormModal.json";
import UrduSupportFormModal from "./locales/UrduTranslation/SupportFormModal.json";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        Navbar: EnglishNavbar,
        WebNavbar: EnglishWebNavbar,
        Sidebar: EnglishSidebar,
        Authority: EnglishAuthority,
        Beneficiaries: EnglishBeneficiaries,
        Campaigns: EnglishCampaigns,
        Charities: EnglishCharities,
        Donations: EnglishDonations,
        Donors: EnglishDonors,
        Overview: EnglishOverview,
        Reports: EnglishReports,
        Settings: EnglishSettings,
        Community: EnglishCommunity,
        CampaignSection: EnglishCampaignSection,
        FaqSection: EnglishFaqSection,
        Footer: EnglishFooter,
        PlatformSection: EnglishPlatformSection,
        PremierPlatform: EnglishPremierPlatform,
        TransparentProcess: EnglishTransparentProcess,
        AboutPage: EnglishAboutPage,
        Webcampaigns: EnglishWebcampaigns,
        Webdonor: EnglishWebdonor,
        Contact: EnglishContact,
        Login: EnglishLogin,
        Signup: EnglishSignup,
        SupportFormModal: EnglishSupportFormModal
      },
      ur: {
        Navbar: UrduNavbar,
        WebNavbar: UrduWebNavbar,
        Sidebar: UrduSidebar,
        Authority: UrduAuthority,
        Beneficiaries: UrduBeneficiaries,
        Campaigns: UrduCampaigns,
        Charities: UrduCharities,
        Donations: UrduDonations,
        Donors: UrduDonors,
        Overview: UrduOverview,
        Reports: UrduReports,
        Settings: UrduSettings,
        Community: UrduCommunity,
        CampaignSection: UrduCampaignSection,
        FaqSection: UrduFaqSection,
        Footer: UrduFooter,
        PlatformSection: UrduPlatformSection,
        PremierPlatform: UrduPremierPlatform,
        TransparentProcess: UrduTransparentProcess,
        AboutPage: UrduAboutPage,
        Webcampaigns: UrduWebcampaigns,
        Webdonor: UrduWebdonor,
        Contact: UrduContact,
        Login: UrduLogin,
        Signup: UrduSignup,
        SupportFormModal: UrduSupportFormModal
      },
    },

    lng: "en",
    fallbackLng: "en",

    ns: [
        "Navbar",
        "WebNavbar",
        "Sidebar",
        "Authority",
        "Beneficiaries",
        "Campaigns",
        "Charities",
        "Donations",
        "Donors",
        "Overview",
        "Reports",
        "Settings",
        "Community",
        "CampaignSection",
        "FaqSection",
        "Footer",
        "PlatformSection",
        "PremierPlatform",
        "TransparentProcess",
        "AboutPage",
        "Webcampaigns",
        "Webdonor",
        "Contact",
        "Login",
        "Signup",
        "SupportFormModal"
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