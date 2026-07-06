import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Charities() {
  const { t } = useTranslation('Charities');

  // Key state used to force-reset the uncontrolled file input visually
  const [fileKey, setFileKey] = useState(0);

  const metrics = [
    { labelKey: 'totalCampaigns', value: '12' },
    { labelKey: 'fundsRaised', value: '$150,000' },
    { labelKey: 'documentsVerified', valueKey: 'yes' },
  ];

  const campaigns = [
    { name: 'Health Aid', categoryKey: 'medical', raised: '$25,000', goal: '$50,000', statusKey: 'approved' },
    { name: 'Education Fund', categoryKey: 'education', raised: '$18,500', goal: '$40,000', statusKey: 'pending' },
    { name: 'Relief Packages', categoryKey: 'emergency', raised: '$12,000', goal: '$20,000', statusKey: 'rejected' },
  ];

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

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    
    // Find the file element target using standardDOM fetching
    const fileInput = document.getElementById('doc-upload');
    const targetFile = fileInput?.files?.[0] || null;

    // 1. Logs the final target payload data to the console ONLY upon click submission
    console.log("%c🚀 Document Upload Triggered!", "color: #00A854; font-weight: bold; font-size: 14px;");
    console.log("Final Submitted Payload:", {
      fileName: targetFile ? targetFile.name : "No file attached",
      fileSize: targetFile ? `${(targetFile.size / 1024).toFixed(2)} KB` : "0 KB",
      fileType: targetFile ? targetFile.type : "N/A",
      timestamp: new Date().toISOString()
    });

    // 2. Wipe the state visually by changing the component key value
    setFileKey(prev => prev + 1);

    console.log("%c🧼 Visual File input selection cleared.", "color: #0066FF; font-style: italic;");
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
      </div>

      {/* Top Metrics Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-2 transition-all hover:shadow-md"
          >
            <span className="text-sm text-gray-500 font-medium">{t(metric.labelKey)}</span>
            <h2 className="text-3xl font-bold text-[#5C2525]">
              {metric.valueKey ? t(metric.valueKey) : metric.value}
            </h2>
          </div>
        ))}
      </section>

      {/* Registered Campaigns Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('registeredCampaignsTitle')}</h3>

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
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {campaigns.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#F9F5F1]  hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{item.name}</td>
                  <td className="p-2">{categoryLabels[item.categoryKey]}</td>
                  <td className="p-2">{item.raised}</td>
                  <td className="p-2">{item.goal}</td>
                  <td className="p-2">
                    <span className={`font-medium ${statusColors[item.statusKey]}`}>
                      {statusLabels[item.statusKey]}
                    </span>
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
          <p className="text-sm text-gray-500">{t('legalDocsDesc')}</p>
        </div>

        <div className="space-y-4 max-w-xl">
          {/* Custom Stylized File Input Wrapper */}
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:border-gray-400 transition-colors">
            <input
              key={fileKey} // Changing this key automatically wipes the visually selected file
              type="file"
              id="doc-upload"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border file:border-gray-300 file:text-xs file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 cursor-pointer"
            />
          </div>

          {/* Upload Execution Button */}
          <button 
            onClick={handleUploadSubmit}
            className="px-6 py-2.5 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-95 transition-all"
          >
            {t('uploadDocumentBtn')}
          </button>
        </div>
      </section>

    </main>
  );
}