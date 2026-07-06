import React from 'react';
import { useTranslation } from 'react-i18next'; // CHANGED: added i18next hook

export default function Donations() {
  const { t } = useTranslation('Donations'); // CHANGED: added translation hook

  // CHANGED: "method" and "status" now store stable keys instead of raw
  // English strings, so the displayed text can be translated while the
  // color-matching logic for status still works reliably.
  // id, name, campaign, amount, and date are left as real data (untranslated).
  const transactions = [
    { id: 'TXN-1001', name: 'Qatar Airways', campaign: 'Education for All', amount: '500,000 QAR', methodKey: 'bankTransfer', date: '30-Aug-2025', statusKey: 'completed' },
    { id: 'TXN-1002', name: 'Mohammed Abdullah', campaign: 'Orphan Support', amount: '10,000 QAR', methodKey: 'creditCard', date: '28-Aug-2025', statusKey: 'pending' },
    { id: 'TXN-1003', name: 'Vodafone Qatar', campaign: 'Healthcare Aid', amount: '1,200,000 QAR', methodKey: 'mobileWallet', date: '15-Aug-2025', statusKey: 'completed' },
    { id: 'TXN-1004', name: 'Fatima Zahra', campaign: 'Food Distribution', amount: '2,000 QAR', methodKey: 'debitCard', date: '01-Sep-2025', statusKey: 'failed' },
  ];

  // CHANGED: lookup tables keyed the same way as the JSON translation file
  const methodLabels = {
    bankTransfer: t('methodBankTransfer'),
    creditCard: t('methodCreditCard'),
    mobileWallet: t('methodMobileWallet'),
    debitCard: t('methodDebitCard'),
  };
  const statusLabels = {
    completed: t('statusCompleted'),
    pending: t('statusPending'),
    failed: t('statusFailed'),
  };
  const statusColors = {
    completed: 'text-emerald-600',
    pending: 'text-amber-500',
    failed: 'text-rose-600',
  };

  return (
    <main className="w-full max-w-7xl mx-auto  md:p-2 space-y-6 bg-[#F4EBE6] overflow-y-auto max-h-screen">

      {/* Dynamic Section Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#5C2525]">{t('pageTitle')}</h1>
        {/* CHANGED: "Donations" -> t('pageTitle') */}
      </div>

      {/* Donation Transactions Table Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('tableTitle')}</h3>
        {/* CHANGED: "Donation Transactions" -> t('tableTitle') */}

        {/* Responsive Horizontal Scroll Container for Table */}
        <div className="overflow-x-auto w-full border border-gray-100 rounded-xl">
          <table className="w-full min-w-[800px] border-collapse text-left text-sm">
            {/* Dark Maroon Table Header */}
            <thead>
              <tr className="bg-[#5C2525] text-white font-medium">
                <th className="p-2 rounded-tl-xl">{t('txnId')}</th>
                <th className="p-2">{t('donorName')}</th>
                <th className="p-2">{t('campaign')}</th>
                <th className="p-2">{t('amount')}</th>
                <th className="p-2">{t('paymentMethod')}</th>
                <th className="p-2">{t('date')}</th>
                <th className="p-2 rounded-tr-xl">{t('status')}</th>
                {/* CHANGED: all 7 column headers now use t(...) */}
              </tr>
            </thead>

            {/* Table Body Content */}
            <tbody className="divide-y divide-gray-400 text-gray-700">
              {transactions.map((txn, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#F9F5F1] transition-colors">
                  <td className="p-2 font-medium text-gray-900">{txn.id}</td>
                  <td className="p-2">{txn.name}</td>
                  <td className="p-2">{txn.campaign}</td>
                  <td className="p-2">{txn.amount}</td>
                  <td className="p-2">{methodLabels[txn.methodKey]}</td>
                  {/* CHANGED: {txn.method} -> {methodLabels[txn.methodKey]} */}
                  <td className="p-2">{txn.date}</td>
                  <td className="p-4">
                    <span className={`font-medium ${statusColors[txn.statusKey]}`}>
                      {statusLabels[txn.statusKey]}
                    </span>
                    {/* CHANGED: status text/color now driven by statusKey lookup instead of a literal string comparison */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Filter Action Panel Card */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{t('filterTitle')}</h3>
        {/* CHANGED: "Filter Donations" -> t('filterTitle') */}

        {/* Action Button Controls */}
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-[#0066FF] text-white text-sm font-medium rounded-lg hover:bg-blue-600 shadow-sm active:scale-95 transition-all">
            {t('showCompleted')}
          </button>
          <button className="px-5 py-2.5 bg-[#E6A100] text-white text-sm font-medium rounded-lg hover:bg-amber-600 shadow-sm active:scale-95 transition-all">
            {t('showPending')}
          </button>
          <button className="px-5 py-2.5 bg-[#D6001C] text-white text-sm font-medium rounded-lg hover:bg-red-700 shadow-sm active:scale-95 transition-all">
            {t('showFailed')}
          </button>
          {/* CHANGED: all 3 filter button labels now use t(...) */}
        </div>
      </section>

    </main>
  );
}