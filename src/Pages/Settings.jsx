import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t } = useTranslation('Settings');

  // Profile Settings Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+974 1234 5678');

  // Security Settings Form States
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Preferences Toggle States
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(false);

  // Profile Information Submission
  const handleSubmitProfile = (e) => {
    e.preventDefault();

    // 1. Logs final payload data to console
    console.log("%c🚀 Profile Settings Updated!", "color: #00A854; font-weight: bold; font-size: 14px;");
    console.log("Final Profile Payload:", {
      fullName: fullName,
      email: email,
      phone: phone,
      timestamp: new Date().toISOString()
    });

    // 2. Clear visual values
    setFullName('');
    setEmail('');
    setPhone('');
    
    console.log("%c🧼 Visual Profile Fields Reset.", "color: #0066FF; font-style: italic;");
  };

  // Security Password Information Submission
  const handleSubmitPassword = (e) => {
    e.preventDefault();

    // 1. Logs final password parameters to console
    console.log("%c🔑 Password Security Change Initiated!", "color: #5C2525; font-weight: bold; font-size: 14px;");
    console.log("Final Security Payload:", {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      matchValidation: newPassword === confirmPassword,
      timestamp: new Date().toISOString()
    });

    // 2. Clear visual sensitive fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');

    console.log("%c🧼 Visual Password Input Fields Cleared.", "color: #0066FF; font-style: italic;");
  };

  return (
    <main className="w-full max-w-4xl mx-auto p-3 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
      </div>

      {/* 1. Profile Settings Section */}
      <section className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('profileSettingsTitle')}</h3>

        <form onSubmit={handleSubmitProfile} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">{t('fullNameLabel')}</label>
            <input
              type="text"
              id="fullName"
              placeholder={t('fullNamePlaceholder')}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">{t('emailLabel')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">{t('phoneLabel')}</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-95 transition-all"
            >
              {t('saveChangesBtn')}
            </button>
          </div>
        </form>
      </section>

      {/* 2. Security Settings Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('securitySettingsTitle')}</h3>

        <form onSubmit={handleSubmitPassword} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">{t('currentPasswordLabel')}</label>
            <input
              type="password"
              id="currentPassword"
              placeholder={t('currentPasswordPlaceholder')}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">{t('newPasswordLabel')}</label>
            <input
              type="password"
              id="newPassword"
              placeholder={t('newPasswordPlaceholder')}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">{t('confirmPasswordLabel')}</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder={t('confirmPasswordPlaceholder')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0066FF] text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-sm active:scale-95 transition-all"
            >
              {t('updatePasswordBtn')}
            </button>
          </div>
        </form>
      </section>

      {/* 3. Preferences Toggle Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('preferencesTitle')}</h3>

        <div className="divide-y divide-gray-100">
          {/* Dark Mode Field Component */}
          <div className="flex items-center justify-between py-3">
            <label htmlFor="darkModeToggle" className="text-sm font-medium text-gray-700 cursor-pointer select-none">
              {t('enableDarkMode')}
            </label>
            <button
              id="darkModeToggle"
              type="button"
              onClick={() => {
                const updated = !darkMode;
                setDarkMode(updated);
                console.log("Preference Modified (Dark Mode):", updated);
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C2525] ${
                darkMode ? 'bg-[#5C2525]' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Email Notifications Component */}
          <div className="flex items-center justify-between py-3">
            <label htmlFor="emailNotifyToggle" className="text-sm font-medium text-gray-700 cursor-pointer select-none">
              {t('emailNotifications')}
            </label>
            <button
              id="emailNotifyToggle"
              type="button"
              onClick={() => {
                const updated = !emailNotifications;
                setEmailNotifications(updated);
                console.log("Preference Modified (Email Notifications):", updated);
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C2525] ${
                emailNotifications ? 'bg-[#5C2525]' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                emailNotifications ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* SMS Alerts Component */}
          <div className="flex items-center justify-between py-3">
            <label htmlFor="smsAlertsToggle" className="text-sm font-medium text-gray-700 cursor-pointer select-none">
              {t('smsAlerts')}
            </label>
            <button
              id="smsAlertsToggle"
              type="button"
              onClick={() => {
                const updated = !smsAlerts;
                setSmsAlerts(updated);
                console.log("Preference Modified (SMS Alerts):", updated);
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C2525] ${
                smsAlerts ? 'bg-[#5C2525]' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                smsAlerts ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}