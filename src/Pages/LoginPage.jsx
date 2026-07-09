import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Optional: Use lucide-react or replace with SVG icons

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation('Login');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#80162B] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-[#FFF5F5] rounded-lg shadow-xl overflow-hidden">

        {/* Header Section */}
        <div className="bg-[#FAF0F0] py-6 text-center border-b border-gray-100">
          <h2 className="text-3xl font-serif font-bold text-[#1E1E1E] sm:text-4xl">
            {t('header.title')}
          </h2>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-[#1E1E1E] mb-2">
                {t('form.emailLabel')}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t('form.emailPlaceholder')}
                  className="block w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80162B] focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-base font-semibold text-[#1E1E1E] mb-2">
                {t('form.passwordLabel')}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder={t('form.passwordPlaceholder')}
                  className="block w-full pl-12 pr-12 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#80162B] focus:border-transparent text-gray-900 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end text-sm">
              <a href="#" className="font-medium text-gray-600 hover:text-[#80162B] transition-colors">
                {t('form.forgotPassword')}
              </a>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-[#610F20] hover:bg-[#4E0C1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#80162B] transition-colors"
              >
                {t('form.loginButton')}
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center text-base text-gray-700">
            {t('footer.text')}{' '}
            <Link to="/signup" className="font-bold text-[#1E1E1E] hover:underline">
              {t('footer.signUp')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}