import React from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Charities() {
  const { t } = useTranslation('Charities'); // CHANGED: added translation hook

  // CHANGED: "label" -> "labelKey". Also added an optional "valueKey" for the
  // one metric whose value is a translatable word ("Yes") rather than a
  // number/currency amount, so that value can be translated too.
  const metrics = [
    { labelKey: 'totalCampaigns', value: '12' },
    { labelKey: 'fundsRaised', value: '$150,000' },
    { labelKey: 'documentsVerified', valueKey: 'yes' },
  ];

  // CHANGED: "category" and "status" now store stable keys instead of raw
  // English strings, so the displayed text can be translated while the
  // color-matching logic for status still works reliably.
  // name, raised, and goal are left as real data (untranslated).
  const campaigns = [
    { name: 'Health Aid', categoryKey: 'medical', raised: '$25,000', goal: '$50,000', statusKey: 'approved' },
    { name: 'Education Fund', categoryKey: 'education', raised: '$18,500', goal: '$40,000', statusKey: 'pending' },
    { name: 'Relief Packages', categoryKey: 'emergency', raised: '$12,000', goal: '$20,000', statusKey: 'rejected' },
  ];

  // CHANGED: lookup tables keyed the same way as the JSON translation file
  const categoryLabels = {
    medical: t('categoryMedical'),
    education: t('categoryEducation'),
    emergency: t('categoryEmergency'),
  };
  const statusLabels = {
    approved: t('statusApproved'),
    pending: t('statusPending'),
    rejected: t('statusRejected'),
  };
  const statusColors = {
    approved: 'text-emerald-600',
    pending: 'text-amber-500',
    rejected: 'text-rose-600',
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Charity Management" -> t('pageTitle') */}
      </div>

      {/* Top Metrics Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-2 transition-all hover:shadow-md"
          >
            <span className="text-sm text-gray-500 font-medium">{t(metric.labelKey)}</span>
            {/* CHANGED: {metric.label} -> {t(metric.labelKey)} */}
            <h2 className="text-3xl font-bold text-[#5C2525]">
              {metric.valueKey ? t(metric.valueKey) : metric.value}
              {/* CHANGED: translates the value when it's a word (valueKey), otherwise shows raw data unchanged */}
            </h2>
          </div>
        ))}
      </section>

      {/* Registered Campaigns Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('registeredCampaignsTitle')}</h3>
        {/* CHANGED: "Registered Campaigns" -> t('registeredCampaignsTitle') */}

        {/* Responsive Horizontal Scroll Box */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[750px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-3 rounded-tl-xl">{t('campaign')}</th>
                <th className="p-3">{t('category')}</th>
                <th className="p-3">{t('raised')}</th>
                <th className="p-3">{t('goal')}</th>
                <th className="p-3 rounded-tr-xl">{t('status')}</th>
                {/* CHANGED: all 5 column headers now use t(...) */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {campaigns.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#F9F5F1]  hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{item.name}</td>
                  <td className="p-2">{categoryLabels[item.categoryKey]}</td>
                  {/* CHANGED: {item.category} -> {categoryLabels[item.categoryKey]} */}
                  <td className="p-2">{item.raised}</td>
                  <td className="p-2">{item.goal}</td>
                  <td className="p-2">
                    <span className={`font-medium ${statusColors[item.statusKey]}`}>
                      {statusLabels[item.statusKey]}
                    </span>
                    {/* CHANGED: status text/color now driven by statusKey lookup instead of a literal string comparison */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Legal Documents & Licenses Upload Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('legalDocsTitle')}</h3>
          {/* CHANGED: "Legal Documents & Licenses" -> t('legalDocsTitle') */}
          <p className="text-sm text-gray-500">
            {t('legalDocsDesc')}
            {/* CHANGED: paragraph text -> t('legalDocsDesc') */}
          </p>
        </div>

        <div className="space-y-4 max-w-xl">
          {/* Custom Stylized File Input Wrapper */}
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:border-gray-400 transition-colors">
            <input
              type="file"
              id="doc-upload"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border file:border-gray-300 file:text-xs file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 cursor-pointer"
            />
          </div>

          {/* Upload Execution Button */}
          <button className="px-6 py-2.5 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-95 transition-all">
            {t('uploadDocumentBtn')}
            {/* CHANGED: "Upload Document" -> t('uploadDocumentBtn') */}
          </button>
        </div>
      </section>

    </main>
  );
}