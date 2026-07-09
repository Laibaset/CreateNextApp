import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  User, Phone, Mail, Heart, Info, 
  PhoneCall, ShieldAlert, Calendar, X, Upload 
} from 'lucide-react';

export default function SupportFormModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation('SupportFormModal');
  const isRTL = i18n.language === 'ur';
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    helpIntent: '',
    message: '',
    contactPreference: '',
    consent: false
  });

  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen]);

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      helpIntent: '',
      message: '',
      contactPreference: '',
      consent: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=== Consultation Form Submission ===");
    console.log(formData);
    alert("Data logged to console successfully!");
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/45 backdrop-blur-xl transition-opacity duration-300">
      <div dir={isRTL ? 'rtl' : 'ltr'} className="bg-[#f9f6f0] w-full max-w-6xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-[#633b31] text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl">
              <Heart className="w-6 h-6 text-white fill-white/20" />
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-semibold">{t('header.title')}</h2>
              <p className="text-xs text-white/80 mt-0.5">{t('header.subtitle')}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Area */}
        <form id="consultation-form" onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">

          {/* Section 1: Personal Info */}
          <div className="bg-white border border-[#e6dfd5] rounded-xl p-5 space-y-4">
            <h3 className="font-serif text-lg text-[#633b31] flex items-center gap-2 border-b border-zinc-100 pb-2">
              <User className="w-5 h-5" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700">{t('fields.fullName')} <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3" />
                  <input 
                    type="text" required name="fullName" value={formData.fullName} onChange={handleInputChange}
                    placeholder={t('fields.fullName')} 
                    className="w-full bg-[#fafaf9] text-black border border-[#e6dfd5] rounded-lg pl-10 pr-3 py-2.5 text-sm focus:border-[#633b31] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700">{t('fields.phone')} <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-3" />
                  <input 
                    type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                    placeholder="+974 XXXX XXXX" 
                    className="w-full text-black bg-[#fafaf9] border border-[#e6dfd5] rounded-lg pl-10 pr-3 py-2.5 text-sm focus:border-[#633b31] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">{t('fields.email')} <span className="text-red-500">*</span></label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3" />
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleInputChange}
                  placeholder={t('fields.email')} 
                  className="w-full text-black bg-[#fafaf9] border border-[#e6dfd5] rounded-lg pl-10 pr-3 py-2.5 text-sm focus:border-[#633b31] focus:bg-white outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Intent Selection */}
          <div className="bg-white border border-[#e6dfd5] rounded-xl p-5 space-y-4">
            <h3 className="font-serif text-lg text-[#633b31] flex items-center gap-2 border-b border-zinc-100 pb-2">
              <Heart className="w-5 h-5" /> How Would You Like to Help?
            </h3>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">{t('fields.helpIntentLabel')} <span className="text-red-500">*</span></label>
              <select 
                required name="helpIntent" value={formData.helpIntent} onChange={handleInputChange}
                className="w-full text-black bg-[#fafaf9] border border-[#e6dfd5] rounded-lg px-3 py-2.5 text-sm focus:border-[#633b31] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>{t('fields.helpIntentPlaceholder')}</option>
                <option value="volunteer">{t('options.volunteer')}</option>
                <option value="donate">{t('options.donate')}</option>
                <option value="inquire">{t('options.inquire')}</option>
              </select>
            </div>
          </div>

          {/* Section 3: Message & Upload */}
          <div className="bg-white border border-[#e6dfd5] rounded-xl p-5 space-y-4">
            <h3 className="font-serif text-lg text-[#633b31] flex items-center gap-2 border-b border-zinc-100 pb-2">
              <Info className="w-5 h-5" /> Your Message
            </h3>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">{t('fields.messageLabel')} <span className="text-red-500">*</span></label>
              <textarea 
                required name="message" value={formData.message} onChange={handleInputChange}
                placeholder={t('fields.messagePlaceholder')} rows={3}
                className="w-full text-black bg-[#fafaf9] border border-[#e6dfd5] rounded-lg px-3 py-2.5 text-sm focus:border-[#633b31] focus:bg-white outline-none transition-all resize-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">{t('fields.uploadLabel')}</label>
              <div className="border-2 border-dashed border-[#d2c7b7] rounded-lg p-5 text-center bg-[#fafaf9] hover:bg-[#f3efe8] transition-colors cursor-pointer">
                <Upload className="w-7 h-7 mx-auto text-zinc-400 mb-1" />
                <p className="text-xs font-medium text-zinc-800">{t('fields.uploadText')}</p>
                <span className="text-[10px] text-zinc-400 block mt-0.5">{t('fields.uploadHint')}</span>
                <button type="button" className="mt-3 bg-[#f3efe8] border border-[#e6dfd5] px-4 py-1.5 rounded text-xs font-semibold text-zinc-700">
                  {t('fields.uploadButton')}
                </button>
              </div>
            </div>
          </div>

          {/* Section 4: Contact Preference */}
          <div className="bg-white border border-[#e6dfd5] rounded-xl p-5 space-y-4">
            <h3 className="font-serif text-lg text-[#633b31] flex items-center gap-2 border-b border-zinc-100 pb-2">
              <PhoneCall className="w-5 h-5" /> Contact Preference
            </h3>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">{t('fields.contactPreferenceLabel')} <span className="text-red-500">*</span></label>
              <select 
                required name="contactPreference" value={formData.contactPreference} onChange={handleInputChange}
                className="w-full text-black bg-[#fafaf9] border border-[#e6dfd5] rounded-lg px-3 py-2.5 text-sm focus:border-[#633b31] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>{t('fields.contactPreferencePlaceholder')}</option>
                <option value="whatsapp">{t('options.whatsapp')}</option>
                <option value="email">{t('options.email')}</option>
                <option value="call">{t('options.call')}</option>
              </select>
            </div>
          </div>

          {/* Section 5: Consent */}
          <div className="bg-[#f3ece4] rounded-xl p-5 space-y-3">
            <div className="flex gap-3 items-start">
              <input 
                type="checkbox" required id="consent" name="consent" checked={formData.consent} onChange={handleInputChange}
                className="mt-1 accent-[#633b31] w-4 h-4 rounded cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-zinc-800 leading-relaxed cursor-pointer">
                {t('fields.consentText')}
              </label>
            </div>
            <p className="text-[11px] text-zinc-500 pl-7 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" /> {t('fields.consentNote')}
            </p>
          </div>
        </form>

        {/* Sticky Action Footer */}
        <div className="bg-[#f4efeb] border-t border-[#e6dfd5] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-xs text-zinc-500 flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> {t('footer.responseTime')}
          </div>
          <div className="flex items-center gap-3 justify-end">
            <button 
              type="button" onClick={onClose}
              className="bg-white border border-[#e6dfd5] px-5 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              {t('footer.cancel')}
            </button>
            <button 
              type="submit" form="consultation-form"
              className="bg-[#612729] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#4e1e20] transition-colors shadow-sm"
            >
              {t('footer.submit')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}