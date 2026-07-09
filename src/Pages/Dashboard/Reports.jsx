import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Reports() {
  const { t } = useTranslation('Reports');

  // Form input field local state hooks
  const [campaign, setCampaign] = useState('healthAid');
  const [reportType, setReportType] = useState('financial');

  const generatedReports = [
    { id: '#RPT-001', campaign: 'Health Aid', date: '2025-08-01', typeKey: 'financial', statusKey: 'completed' },
    { id: '#RPT-002', campaign: 'Education Fund', date: '2025-08-05', typeKey: 'compliance', statusKey: 'completed' },
    { id: '#RPT-003', campaign: 'Relief Packages', date: '2025-08-10', typeKey: 'financial', statusKey: 'inProgress' },
  ];

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

    // 1. Logs the final state payload ONLY when the submit button is triggered
    console.log("%c🚀 Report Generation Initiated!", "color: #00A854; font-weight: bold; font-size: 14px;");
    console.log("Final Submitted Payload:", {
      campaign: campaign,
      reportType: reportType,
      timestamp: new Date().toISOString()
    });

    // 2. Clear / Reset values so they disappear or revert visually
    setCampaign('healthAid');
    setReportType('financial');

    console.log("%c🧼 Visual Selection Fields Reset / Cleared.", "color: #0066FF; font-style: italic;");
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Title Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
      </div>

      {/* Generate New Report Controller Box */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('generateNewTitle')}</h3>

        <form onSubmit={handleGenerate} className="flex flex-col md:flex-row items-end gap-4 w-full">
          {/* Select dropdown wrapper: Campaign Selection */}
          <div className="flex flex-col gap-1.5 w-full md:flex-1">
            <label htmlFor="campaign-select" className="text-sm font-medium text-gray-700">
              {t('campaignLabel')}
            </label>
            <select
              id="campaign-select"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] cursor-pointer"
            >
              <option value="healthAid">{t('campaignHealthAid')}</option>
              <option value="educationFund">{t('campaignEducationFund')}</option>
              <option value="reliefPackages">{t('campaignReliefPackages')}</option>
            </select>
          </div>

          {/* Select dropdown wrapper: Report Type */}
          <div className="flex flex-col gap-1.5 w-full md:flex-1">
            <label htmlFor="type-select" className="text-sm font-medium text-gray-700">
              {t('reportTypeLabel')}
            </label>
            <select
              id="type-select"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] cursor-pointer"
            >
              <option value="financial">{t('typeFinancial')}</option>
              <option value="compliance">{t('typeCompliance')}</option>
              <option value="audit">{t('typeAudit')}</option>
            </select>
          </div>

          {/* Generate Button Wrapper */}
          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="w-full md:px-10 py-2.5 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-95 transition-all text-center"
            >
              {t('generateBtn')}
            </button>
          </div>
        </form>
      </section>

      {/* Generated Logs & Export Operations Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('generatedReportsTitle')}</h3>

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
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {generatedReports.map((report, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#F9F5F1] hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{report.id}</td>
                  <td className="p-2">{report.campaign}</td>
                  <td className="p-2 font-mono text-xs">{report.date}</td>
                  <td className="p-2">{typeLabels[report.typeKey]}</td>
                  <td className="p-2">
                    <span className={`font-medium ${statusColors[report.statusKey]}`}>
                      {statusLabels[report.statusKey]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Panel Export Document Controls */}
        <div className="flex justify-end gap-3 pt-2">
          <button 
            onClick={() => console.log("Export Triggered: Downloading PDF version.")}
            className="px-5 py-2.5 bg-[#0066FF] text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-sm active:scale-95 transition-all"
          >
            {t('downloadPdfBtn')}
          </button>
          <button 
            onClick={() => console.log("Export Triggered: Exporting Spreadsheet file.")}
            className="px-5 py-2.5 bg-[#00A854] text-white text-sm font-medium rounded-lg hover:bg-[#008f47] shadow-sm active:scale-95 transition-all"
          >
            {t('exportExcelBtn')}
          </button>
        </div>
      </section>

    </main>
  );
}