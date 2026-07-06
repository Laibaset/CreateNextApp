import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Settings() {
  const { t } = useTranslation('Settings'); // CHANGED: added translation hook

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

  return (
    <main className="w-full max-w-4xl mx-auto p-3 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Settings" -> t('pageTitle') */}
      </div>

      {/* 1. Profile Settings Section */}
      <section className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('profileSettingsTitle')}</h3>
        {/* CHANGED: "Profile Settings" -> t('profileSettingsTitle') */}

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">{t('fullNameLabel')}</label>
            {/* CHANGED: "Full Name" -> t('fullNameLabel') */}
            <input
              type="text"
              id="fullName"
              placeholder={t('fullNamePlaceholder')}
              // CHANGED: placeholder "Enter your full name" -> t('fullNamePlaceholder')
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">{t('emailLabel')}</label>
            {/* CHANGED: "Email" -> t('emailLabel') */}
            <input
              type="email"
              id="email"
              placeholder={t('emailPlaceholder')}
              // CHANGED: placeholder "Enter your email" -> t('emailPlaceholder')
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">{t('phoneLabel')}</label>
            {/* CHANGED: "Phone" -> t('phoneLabel') */}
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
              {/* CHANGED: "Save Changes" -> t('saveChangesBtn') */}
            </button>
          </div>
        </form>
      </section>

      {/* 2. Security Settings Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('securitySettingsTitle')}</h3>
        {/* CHANGED: "Security Settings" -> t('securitySettingsTitle') */}

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">{t('currentPasswordLabel')}</label>
            {/* CHANGED: "Current Password" -> t('currentPasswordLabel') */}
            <input
              type="password"
              id="currentPassword"
              placeholder={t('currentPasswordPlaceholder')}
              // CHANGED: placeholder "Enter current password" -> t('currentPasswordPlaceholder')
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">{t('newPasswordLabel')}</label>
            {/* CHANGED: "New Password" -> t('newPasswordLabel') */}
            <input
              type="password"
              id="newPassword"
              placeholder={t('newPasswordPlaceholder')}
              // CHANGED: placeholder "Enter new password" -> t('newPasswordPlaceholder')
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">{t('confirmPasswordLabel')}</label>
            {/* CHANGED: "Confirm New Password" -> t('confirmPasswordLabel') */}
            <input
              type="password"
              id="confirmPassword"
              placeholder={t('confirmPasswordPlaceholder')}
              // CHANGED: placeholder "Confirm new password" -> t('confirmPasswordPlaceholder')
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
              {/* CHANGED: "Update Password" -> t('updatePasswordBtn') */}
            </button>
          </div>
        </form>
      </section>

      {/* 3. Preferences Toggle Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('preferencesTitle')}</h3>
        {/* CHANGED: "Preferences" -> t('preferencesTitle') */}

        <div className="divide-y divide-gray-100">
          {/* Dark Mode Field Component */}
          <div className="flex items-center justify-between py-3">
            <label htmlFor="darkModeToggle" className="text-sm font-medium text-gray-700 cursor-pointer select-none">
              {t('enableDarkMode')}
              {/* CHANGED: "Enable Dark Mode" -> t('enableDarkMode') */}
            </label>
            <button
              id="darkModeToggle"
              type="button"
              onClick={() => setDarkMode(!darkMode)}
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
              {/* CHANGED: "Email Notifications" -> t('emailNotifications') */}
            </label>
            <button
              id="emailNotifyToggle"
              type="button"
              onClick={() => setEmailNotifications(!emailNotifications)}
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
              {/* CHANGED: "SMS Alerts" -> t('smsAlerts') */}
            </label>
            <button
              id="smsAlertsToggle"
              type="button"
              onClick={() => setSmsAlerts(!smsAlerts)}
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