import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Reports() {
  const { t } = useTranslation('Reports'); // CHANGED: added translation hook

  // Form input field local state hooks
  // NOTE: kept as English values since these are the actual form data, not display text
  const [campaign, setCampaign] = useState('Health Aid');
  const [reportType, setReportType] = useState('Financial');

  // CHANGED: "type" and "status" now store stable keys instead of raw English
  // strings, so displayed text can be translated while the color-matching
  // logic for status still works reliably.
  // id, campaign, and date are left as real data (untranslated).
  const generatedReports = [
    { id: '#RPT-001', campaign: 'Health Aid', date: '2025-08-01', typeKey: 'financial', statusKey: 'completed' },
    { id: '#RPT-002', campaign: 'Education Fund', date: '2025-08-05', typeKey: 'compliance', statusKey: 'completed' },
    { id: '#RPT-003', campaign: 'Relief Packages', date: '2025-08-10', typeKey: 'financial', statusKey: 'inProgress' },
  ];

  // CHANGED: lookup tables keyed the same way as the JSON translation file
  const typeLabels = {
    financial: t('typeFinancial'),
    compliance: t('typeCompliance'),
    audit: t('typeAudit'),
  };
  const statusLabels = {
    completed: t('statusCompleted'),
    inProgress: t('statusInProgress'),
  };
  const statusColors = {
    completed: 'text-gray-600',
    inProgress: 'text-amber-500',
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    // Submission handler code goes here
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Title Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Reports & Compliance" -> t('pageTitle') */}
      </div>

      {/* Generate New Report Controller Box */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('generateNewTitle')}</h3>
        {/* CHANGED: "Generate New Report" -> t('generateNewTitle') */}

        <form onSubmit={handleGenerate} className="flex flex-col md:flex-row items-end gap-4 w-full">
          {/* Select dropdown wrapper: Campaign Selection */}
          <div className="flex flex-col gap-1.5 w-full md:flex-1">
            <label htmlFor="campaign-select" className="text-sm font-medium text-gray-700">
              {t('campaignLabel')}
              {/* CHANGED: "Campaign" -> t('campaignLabel') */}
            </label>
            <select
              id="campaign-select"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] cursor-pointer"
            >
              {/* NOTE: campaign names left untranslated (real data), same as other pages */}
              <option value="Health Aid">Health Aid</option>
              <option value="Education Fund">Education Fund</option>
              <option value="Relief Packages">Relief Packages</option>
            </select>
          </div>

          {/* Select dropdown wrapper: Report Type */}
          <div className="flex flex-col gap-1.5 w-full md:flex-1">
            <label htmlFor="type-select" className="text-sm font-medium text-gray-700">
              {t('reportTypeLabel')}
              {/* CHANGED: "Report Type" -> t('reportTypeLabel') */}
            </label>
            <select
              id="type-select"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] cursor-pointer"
            >
              {/* CHANGED: option "value" kept in English (actual form data),
                  only the visible label is translated */}
              <option value="Financial">{t('typeFinancial')}</option>
              <option value="Compliance">{t('typeCompliance')}</option>
              <option value="Audit">{t('typeAudit')}</option>
            </select>
          </div>

          {/* Generate Button Wrapper */}
          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="w-full md:px-10 py-2.5 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-95 transition-all text-center"
            >
              {t('generateBtn')}
              {/* CHANGED: "Generate" -> t('generateBtn') */}
            </button>
          </div>
        </form>
      </section>

      {/* Generated Logs & Export Operations Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('generatedReportsTitle')}</h3>
        {/* CHANGED: "Generated Reports" -> t('generatedReportsTitle') */}

        {/* Horizontal scroll support shell grid layout */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[800px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-2 rounded-tl-xl">{t('reportId')}</th>
                <th className="p-2">{t('campaign')}</th>
                <th className="p-2">{t('generatedOn')}</th>
                <th className="p-2">{t('typeHeader')}</th>
                <th className="p-2 rounded-tr-xl">{t('status')}</th>
                {/* CHANGED: all 5 column headers now use t(...) */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {generatedReports.map((report, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#F9F5F1] hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{report.id}</td>
                  <td className="p-2">{report.campaign}</td>
                  <td className="p-2 font-mono text-xs">{report.date}</td>
                  <td className="p-2">{typeLabels[report.typeKey]}</td>
                  {/* CHANGED: {report.type} -> {typeLabels[report.typeKey]} */}
                  <td className="p-2">
                    <span className={`font-medium ${statusColors[report.statusKey]}`}>
                      {statusLabels[report.statusKey]}
                    </span>
                    {/* CHANGED: status text/color now driven by statusKey lookup instead of a literal string comparison */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Panel Export Document Controls */}
        <div className="flex justify-end gap-3 pt-2">
          <button className="px-5 py-2.5 bg-[#0066FF] text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-sm active:scale-95 transition-all">
            {t('downloadPdfBtn')}
          </button>
          <button className="px-5 py-2.5 bg-[#00A854] text-white text-sm font-medium rounded-lg hover:bg-[#008f47] shadow-sm active:scale-95 transition-all">
            {t('exportExcelBtn')}
          </button>
          {/* CHANGED: both export button labels now use t(...) */}
        </div>
      </section>

    </main>
  );
}