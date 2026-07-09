import React from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Beneficiaries() {
  const { t } = useTranslation('Beneficiaries'); // CHANGED: added translation hook

  // CHANGED: "aidReceived" and "status" now store stable keys instead of raw
  // English strings, so the displayed text can be translated while the
  // color-matching logic for status still works reliably.
  // id, name, nationalId, and campaign are left as real data (untranslated).
  const beneficiaries = [
    { id: 'BNF-001', name: 'Ahmed Khan', nationalId: 'QA123456789', campaign: 'Health Aid', aidReceivedKey: 'yes', statusKey: 'approved' },
    { id: 'BNF-002', name: 'Fatima Ali', nationalId: 'QA987654321', campaign: 'Education Fund', aidReceivedKey: 'no', statusKey: 'pending' },
    { id: 'BNF-003', name: 'Mohammed Saad', nationalId: 'QA555666777', campaign: 'Relief Packages', aidReceivedKey: 'yes', statusKey: 'duplicate' },
  ];

  // CHANGED: lookup tables keyed the same way as the JSON translation file
  const aidLabels = {
    yes: t('aidYes'),
    no: t('aidNo'),
  };
  const statusLabels = {
    approved: t('statusApproved'),
    pending: t('statusPending'),
    duplicate: t('statusDuplicate'),
  };
  const statusColors = {
    approved: 'text-emerald-600',
    pending: 'text-amber-500',
    duplicate: 'text-rose-600',
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Layout Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Beneficiaries" -> t('pageTitle') */}
      </div>

      {/* Sandi Synced Beneficiaries Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('syncedTableTitle')}</h3>
        {/* CHANGED: "Sandi Synced Beneficiaries" -> t('syncedTableTitle') */}

        {/* Responsive Horizontal Scroll Axis Box */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-4 rounded-tl-xl">{t('id')}</th>
                <th className="p-4">{t('name')}</th>
                <th className="p-4">{t('nationalId')}</th>
                <th className="p-4">{t('campaign')}</th>
                <th className="p-4">{t('aidReceived')}</th>
                <th className="p-4 rounded-tr-xl">{t('status')}</th>
                {/* CHANGED: all 6 column headers now use t(...) */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {beneficiaries.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-medium text-gray-900">{item.id}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4 font-mono text-xs tracking-wider">{item.nationalId}</td>
                  <td className="p-4">{item.campaign}</td>
                  <td className="p-4">{aidLabels[item.aidReceivedKey]}</td>
                  {/* CHANGED: {item.aidReceived} -> {aidLabels[item.aidReceivedKey]} */}
                  <td className="p-4">
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

      {/* Beneficiary Management Panel Card Container */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('managePanelTitle')}</h3>
        {/* CHANGED: "Manage Beneficiaries" -> t('managePanelTitle') */}

        {/* Action Button Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          <button className="w-full py-3 bg-[#5C2525] text-white text-sm font-medium rounded-lg hover:bg-[#4a1e1e] shadow-sm active:scale-[0.99] transition-all">
            {t('addNew')}
          </button>
          <button className="w-full py-3 bg-[#00A854] text-white text-sm font-medium rounded-lg hover:bg-[#008f47] shadow-sm active:scale-[0.99] transition-all">
            {t('syncSandi')}
          </button>
          {/* CHANGED: both button labels now use t(...) */}
        </div>
      </section>

    </main>
  );
}