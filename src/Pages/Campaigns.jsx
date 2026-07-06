import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Campaigns() {
  const { t } = useTranslation('Campaigns'); // CHANGED: added translation hook

  // Local form state definitions
  const [campaignName, setCampaignName] = useState('');
  const [category, setCategory] = useState('Medical'); // NOTE: kept as-is (English value) since this is the actual form value, not display text
  const [goalAmount, setGoalAmount] = useState('50000');

  // CHANGED: "category" and "status" now store stable keys instead of raw
  // English strings, so the displayed text can be translated while the
  // color-matching logic for status still works reliably.
  // name, goal, and raised are left as real data (untranslated).
  const existingCampaigns = [
    { name: 'Health Aid', categoryKey: 'medical', goal: '$50,000', raised: '$25,000', statusKey: 'approved' },
    { name: 'Education Fund', categoryKey: 'education', goal: '$40,000', raised: '$18,500', statusKey: 'pending' },
  ];

  // CHANGED: lookup tables keyed the same way as the JSON translation file
  const categoryLabels = {
    medical: t('categoryMedical'),
    education: t('categoryEducation'),
    emergency: t('categoryEmergency'),
    environment: t('categoryEnvironment'),
  };
  const statusLabels = {
    approved: t('statusApproved'),
    pending: t('statusPending'),
  };
  const statusColors = {
    approved: 'text-emerald-600',
    pending: 'text-amber-500',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handler for creating a campaign goes here
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Layout Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Manage Campaigns" -> t('pageTitle') */}
      </div>

      {/* Create New Campaign Form Card Container */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-5">{t('createNewTitle')}</h3>
        {/* CHANGED: "Create New Campaign" -> t('createNewTitle') */}

        <form onSubmit={handleSubmit} className="space-y-4 max-w-full">
          {/* Input: Campaign Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="campaignName" className="text-sm font-medium text-gray-700">
              {t('campaignNameLabel')}
              {/* CHANGED: "Campaign Name" -> t('campaignNameLabel') */}
            </label>
            <input
              type="text"
              id="campaignName"
              placeholder={t('campaignNamePlaceholder')}
              // CHANGED: placeholder "e.g. Food Relief Program" -> t('campaignNamePlaceholder')
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] placeholder-gray-400"
            />
          </div>

          {/* Select: Category */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">
              {t('categoryLabel')}
              {/* CHANGED: "Category" -> t('categoryLabel') */}
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525] cursor-pointer"
            >
              {/* CHANGED: option "value" kept in English (actual form data),
                  only the visible label is translated */}
              <option value="Medical">{t('categoryMedical')}</option>
              <option value="Education">{t('categoryEducation')}</option>
              <option value="Emergency">{t('categoryEmergency')}</option>
              <option value="Environment">{t('categoryEnvironment')}</option>
            </select>
          </div>

          {/* Input: Goal Amount */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="goalAmount" className="text-sm font-medium text-gray-700">
              {t('goalAmountLabel')}
              {/* CHANGED: "Goal Amount" -> t('goalAmountLabel') */}
            </label>
            <input
              type="number"
              id="goalAmount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5C2525] focus:border-[#5C2525]"
            />
          </div>

          {/* Form Submit Execution Control */}
          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-95 transition-all"
            >
              {t('createCampaignBtn')}
              {/* CHANGED: "Create Campaign" -> t('createCampaignBtn') */}
            </button>
          </div>
        </form>
      </section>

      {/* Existing Campaigns Table Card Container */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('existingCampaignsTitle')}</h3>
        {/* CHANGED: "Existing Campaigns" -> t('existingCampaignsTitle') */}

        {/* Responsive Horizontal Scroll Axis Box */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[750px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-2 rounded-tl-xl">{t('campaign')}</th>
                <th className="p-2">{t('categoryLabel')}</th>
                <th className="p-2">{t('goal')}</th>
                <th className="p-2">{t('raised')}</th>
                <th className="p-2 rounded-tr-xl">{t('status')}</th>
                {/* CHANGED: all 5 column headers now use t(...) */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {existingCampaigns.map((campaign, index) => (
                <tr key={index} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{campaign.name}</td>
                  <td className="p-2">{categoryLabels[campaign.categoryKey]}</td>
                  {/* CHANGED: {campaign.category} -> {categoryLabels[campaign.categoryKey]} */}
                  <td className="p-2">{campaign.goal}</td>
                  <td className="p-2">{campaign.raised}</td>
                  <td className="p-2">
                    <span className={`font-medium ${statusColors[campaign.statusKey]}`}>
                      {statusLabels[campaign.statusKey]}
                    </span>
                    {/* CHANGED: status text/color now driven by statusKey lookup instead of a literal string comparison */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}