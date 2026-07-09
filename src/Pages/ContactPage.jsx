import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";

import { Mail, Phone, MapPin, Send, Receipt, History, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation('Contact');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_38wis0v",
        "template_ab03ykg",
        form.current,
        "oFAIqKWu0AqRkUGfA"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#6b2331",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong.",
            confirmButtonColor: "#6b2331",
          });
        }
      );
  };


  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-800 relative">

      {/* 1. Hero Section - Sticky with image and parallax effect */}
      <section
        className="sticky top-0 h-screen w-full flex items-center justify-center text-white px-4 text-center overflow-hidden z-0"
      >
        {/* The background image with parallax effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('Images/photo-1509099836639-18ba1795216d.jpg')",
            backgroundAttachment: 'fixed', // Key for parallax-like feel
          }}
        ></div>

        {/* Dark overlay matching your style */}
        <div className="absolute inset-0 bg-[#6b2331] opacity-40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

        {/* Decorative subtle circles from your screenshot */}
        <div className="absolute top-1/4 left-10 sm:left-20 w-24 h-24 rounded-full border border-white opacity-10 pointer-events-none hidden sm:block"></div>
        <div className="absolute bottom-1/4 right-10 sm:right-20 w-20 h-20 rounded-full border border-white opacity-10 pointer-events-none hidden sm:block"></div>

        {/* Content of the Hero Section */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg text-gray-100 font-light max-w-4xl leading-relaxed mb-8">
            {t('hero.description')}{' '}
            <span className="bg-[#6b233183] bg-opacity-60 px-2 py-1 rounded text-sm font-normal">
              {t('hero.badge')}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            {/* View Campaigns button with gradient from light green to your color */}
            <Link to="/campaign">
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-300 via-[#6b2331] to-[#4c131e] hover:from-green-400 hover:to-[#541b26] text-white rounded-lg font-medium transition duration-200">
                {t('hero.viewCampaigns')}
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded-lg font-medium transition duration-200">
                {t('hero.getStarted')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area - Flows up over the Hero Section */}
      <main className="relative z-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a2b49] mb-2">{t('contactSection.title')}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t('contactSection.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Side: Contact Form Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#6b2331] text-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Send className="w-6 h-6 transform -rotate-12" />
                  <h3 className="text-xl font-semibold">{t('contactForm.title')}</h3>
                </div>
                <p className="text-gray-200 text-sm font-light">{t('contactForm.subtitle')}</p>
              </div>

              <form
                ref={form}
                className="p-6 sm:p-8 space-y-5"
                onSubmit={sendEmail}
              >
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder={t('contactForm.name')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2331] focus:bg-white transition"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder={t('contactForm.email')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2331] focus:bg-white transition"
                  />
                </div>
                <div>
                  <select
                    name="topic"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2331] focus:bg-white transition text-gray-500">
                    <option>{t('contactForm.topic')}</option>
                    <option>{t('contactForm.generalInquiry')}</option>
                    <option>{t('contactForm.donations')}</option>
                    <option>{t('contactForm.campaignSupport')}</option>
                  </select>
                </div>
                <div>
                  <input
                    name="subject"
                    type="text"
                    placeholder={t('contactForm.subject')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2331] focus:bg-white transition"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder={t('contactForm.message')}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2331] focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#6b2331] hover:bg-[#541b26] text-white font-medium rounded-lg shadow transition flex items-center justify-center gap-2"
                >
                  {t('contactForm.button')}
                </button>
              </form>
            </div>

            {/* Right Side: Contact Info & Support */}
            <div className="lg:col-span-5 space-y-8">

              {/* Contact Information Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <MapPin className="w-5 h-5 text-[#6b2331]" />
                  <h3 className="text-xl font-bold text-gray-900">{t('contactInfo.title')}</h3>
                </div>

                {/* Email item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-[#6b2331] bg-opacity-10 text-[#6b2331]">
                    <Mail className="w-5 h-5 text-[white]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t('contactInfo.emailTitle')}</h4>
                    <p className="text-gray-600 text-sm">{t('contactInfo.email')}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t('contactInfo.emailNote')}</p>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-[#6b2331] bg-opacity-10 text-[#6b2331]">
                    <Phone className="w-5 h-5 text-[white]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t('contactInfo.phoneTitle')}</h4>
                    <p className="text-gray-600 text-sm">{t('contactInfo.phone')}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t('contactInfo.phoneNote')}</p>
                  </div>
                </div>

                {/* Office item */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-[#6b2331] bg-opacity-10 text-[#6b2331]">
                    <MapPin className="w-5 h-5 text-[white]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{t('contactInfo.officeTitle')}</h4>
                    <p className="text-gray-600 text-sm">{t('contactInfo.office')}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t('contactInfo.officeNote')}</p>
                  </div>
                </div>
              </div>

              {/* Quick Support Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <HelpCircle className="w-5 h-5 text-[#6b2331]" />
                  <h3 className="text-xl font-bold text-gray-900">{t('quickSupport.title')}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition">
                    <div className="p-2.5 rounded-lg bg-pink-50 text-[#6b2331]">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{t('quickSupport.receiptTitle')}</h4>
                      <p className="text-xs text-gray-500">{t('quickSupport.receiptDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition">
                    <div className="p-2.5 rounded-lg bg-pink-50 text-[#6b2331]">
                      <History className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{t('quickSupport.historyTitle')}</h4>
                      <p className="text-xs text-gray-500">{t('quickSupport.historyDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition">
                    <div className="p-2.5 rounded-lg bg-pink-50 text-[#6b2331]">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{t('quickSupport.faqTitle')}</h4>
                      <p className="text-xs text-gray-500">{t('quickSupport.faqDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3. Location / Map Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-[#6b2331] tracking-wider uppercase border-b border-[#6b2331] pb-1">{t('location.label')}</span>
            <h2 className="text-3xl font-bold text-[#1a2b49] mt-3 mb-2">{t('location.title')}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              {t('location.description')}
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Embedding static google maps view matching your location frame mockup */}
            <div className="w-full h-96 relative bg-gray-200">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531594!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1625640000000!5m2!1sen!2s"
                className="w-full h-full border-none filter contrast-125"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Map Footer Info */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white border-t border-gray-100">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{t('location.headquarters')}</h4>
                <p className="text-sm text-gray-500">{t('location.address1')}</p>
                <p className="text-sm text-gray-500">{t('location.address2')}</p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-[#6b2331] hover:bg-[#541b26] text-white text-sm font-medium rounded-lg transition shadow">
                  {t('location.directions')}
                </button>
                <button className="px-5 py-2.5 bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition">
                  {t('location.copyAddress')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}