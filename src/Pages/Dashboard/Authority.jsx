import React from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Authority() {
  const { t } = useTranslation('Authority'); // CHANGED: added translation hook

  // CHANGED: "label" is now a translation key instead of the raw English text.
  // "value" stays as-is since it's live data, not UI copy.
  const metrics = [
    { labelKey: 'totalDonations', value: '$1.2M' },
    { labelKey: 'activeCampaigns', value: '45' },
    { labelKey: 'registeredCharities', value: '120' },
    { labelKey: 'alertsLabel', value: '3' },
  ];

  // CHANGED: "statusKey" replaces the literal status string so the badge text
  // can be translated while the color-matching logic still works reliably.
  const approvals = [
    { campaign: 'Health Aid', charity: 'Qatar Red Crescent', category: 'Medical', raised: '$25,000', statusKey: 'pending' },
    { campaign: 'Education Fund', charity: 'Education Qatar', category: 'Education', raised: '$18,500', statusKey: 'approved' },
    { campaign: 'Relief Packages', charity: 'Relief Qatar', category: 'Emergency', raised: '$12,000', statusKey: 'rejected' },
  ];

  // CHANGED: status label lookup, keyed the same way as the JSON translation file
  const statusLabels = {
    pending: t('statusPending'),
    approved: t('statusApproved'),
    rejected: t('statusRejected'),
  };
  const statusColors = {
    pending: 'text-amber-500',
    approved: 'text-emerald-600',
    rejected: 'text-rose-600',
  };

  // CHANGED: "message" is now a translation key instead of the raw English text
  const alerts = [
    { messageKey: 'alertSpike', type: 'danger' },
    { messageKey: 'alertDelay', type: 'warning' },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6 bg-[#F4EBE6]">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Authority Dashboard" -> t('pageTitle') */}
      </div>

      {/* Top Metrics Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-2 transition-all hover:shadow-md"
          >
            <span className="text-sm text-gray-500 font-medium">{t(metric.labelKey)}</span>
            {/* CHANGED: {metric.label} -> {t(metric.labelKey)} */}
            <h2 className="text-3xl font-bold text-[#5C2525]">{metric.value}</h2>
          </div>
        ))}
      </section>

      {/* Campaign Approvals Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('campaignApprovals')}</h3>
        {/* CHANGED: "Campaign Approvals" -> t('campaignApprovals') */}

        {/* Responsive Horizontal Scroll Box */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[800px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-3 rounded-tl-xl">{t('campaign')}</th>
                <th className="p-3">{t('charity')}</th>
                <th className="p-3">{t('category')}</th>
                <th className="p-3">{t('raised')}</th>
                <th className="p-3 rounded-tr-xl">{t('status')}</th>
                {/* CHANGED: all 5 column headers now use t(...) */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {approvals.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 font-medium text-gray-900">{item.campaign}</td>
                  <td className="p-2">{item.charity}</td>
                  <td className="p-2">{item.category}</td>
                  <td className="p-2">{item.raised}</td>
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

        {/* Action Controls Panel */}
        <div className="flex justify-end gap-3 pt-2">
          <button className="px-5 py-2.5 bg-[#00A854] text-white text-sm font-medium rounded-lg hover:bg-[#008f47] shadow-sm active:scale-95 transition-all">
            {t('approveSelected')}
          </button>
          <button className="px-5 py-2.5 bg-[#D6001C] text-white text-sm font-medium rounded-lg hover:bg-red-700 shadow-sm active:scale-95 transition-all">
            {t('rejectSelected')}
          </button>
          {/* CHANGED: both button labels now use t(...) */}
        </div>
      </section>

      {/* Suspicious Activity Alerts Section */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('suspiciousActivity')}</h3>
        {/* CHANGED: "Suspicious Activity Alerts" -> t('suspiciousActivity') */}

        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border text-sm font-medium transition-all ${
                alert.type === 'danger'
                  ? 'bg-rose-50 border-rose-100 text-rose-800'
                  : 'bg-amber-50 border-amber-100 text-amber-800'
              }`}
            >
              {t(alert.messageKey)}
              {/* CHANGED: {alert.message} -> {t(alert.messageKey)} */}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}