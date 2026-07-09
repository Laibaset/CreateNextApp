import React from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Donors() {
  const { t } = useTranslation('Donors'); // CHANGED: added translation hook

  // CHANGED: "type" and "engagement" now store stable keys instead of raw
  // English strings, so the displayed text can be translated while the
  // color-matching logic for engagement still works reliably.
  // id, name, total, and lastDonation are left as real data (untranslated).
  const donors = [
    { id: 'DNR-001', name: 'Qatar Airways', typeKey: 'corporate', total: '1,200,000 QAR', lastDonation: '15-Aug-2025', engagementKey: 'high' },
    { id: 'DNR-002', name: 'Mohammed Abdullah', typeKey: 'individual', total: '25,000 QAR', lastDonation: '28-Jul-2025', engagementKey: 'medium' },
    { id: 'DNR-003', name: 'Vodafone Qatar', typeKey: 'corporate', total: '3,500,000 QAR', lastDonation: '10-Aug-2025', engagementKey: 'veryHigh' },
    { id: 'DNR-004', name: 'Fatima Zahra', typeKey: 'individual', total: '5,000 QAR', lastDonation: '01-Sep-2025', engagementKey: 'low' },
  ];

  // CHANGED: lookup tables keyed the same way as the JSON translation file
  const typeLabels = {
    corporate: t('typeCorporate'),
    individual: t('typeIndividual'),
  };
  const engagementLabels = {
    low: t('engagementLow'),
    medium: t('engagementMedium'),
    high: t('engagementHigh'),
    veryHigh: t('engagementVeryHigh'),
  };
  const engagementColors = {
    veryHigh: 'text-emerald-600',
    high: 'text-emerald-600',
    medium: 'text-amber-500',
    low: 'text-gray-500',
  };

  return (
    <div className="w-full max-w-7xl mx-auto   space-y-6 bg-[#F4EBE6]  overflow-y-auto max-h-screen">

      {/* Dynamic Section Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Donors" -> t('pageTitle') */}
      </div>

      {/* Registered Donors Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('tableTitle')}</h3>
        {/* CHANGED: "Registered Donors" -> t('tableTitle') */}

        {/* Responsive Horizontal Scroll Container for Table */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[800px] border-collapse text-left text-sm">
            {/* Dark Maroon Table Header */}
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-2 rounded-tl-xl">{t('id')}</th>
                <th className="p-2">{t('donorName')}</th>
                <th className="p-2">{t('type')}</th>
                <th className="p-2">{t('totalDonations')}</th>
                <th className="p-2">{t('lastDonation')}</th>
                <th className="p-2 rounded-tr-xl">{t('engagementLevel')}</th>
                {/* CHANGED: all 6 column headers now use t(...) */}
              </tr>
            </thead>

            {/* Table Body Content */}
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {donors.map((donor, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#F9F5F1] hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{donor.id}</td>
                  <td className="p-2">{donor.name}</td>
                  <td className="p-2">{typeLabels[donor.typeKey]}</td>
                  {/* CHANGED: {donor.type} -> {typeLabels[donor.typeKey]} */}
                  <td className="p-2">{donor.total}</td>
                  <td className="p-2">{donor.lastDonation}</td>
                  <td className="p-2">
                    <span className={`font-medium ${engagementColors[donor.engagementKey]}`}>
                      {engagementLabels[donor.engagementKey]}
                    </span>
                    {/* CHANGED: engagement text/color now driven by engagementKey lookup instead of a literal string comparison */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Donor Management Action Panel Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('managementTitle')}</h3>
        {/* CHANGED: "Donor Management" -> t('managementTitle') */}

        {/* Action Button Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl">
          <button className="w-full py-3 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-[0.99] transition-all">
            {t('addNewDonor')}
          </button>
          <button className="w-full py-3 bg-[#00A854] text-white text-sm font-medium rounded-lg hover:bg-[#008f47] shadow-sm active:scale-[0.99] transition-all">
            {t('exportReport')}
          </button>
          {/* CHANGED: both button labels now use t(...) */}
        </div>
      </section>

    </div>
  );
}