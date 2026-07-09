import React from 'react';
import { useTranslation } from 'react-i18next';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Overview() {
  const { t } = useTranslation('Overview');

  const metrics = [
    { labelKey: 'totalDonations', value: '$1.2M' },
    { labelKey: 'activeCampaigns', value: '45' },
    { labelKey: 'registeredCharities', value: '120' },
    { labelKey: 'beneficiaries', value: '8,540' },
  ];

  const campaigns = [
    { nameKey: 'campaignHealthAid', amount: '$250K' },
    { nameKey: 'campaignEducationFund', amount: '$180K' },
    { nameKey: 'campaignReliefPackages', amount: '$120K' },
  ];

  // Restructured data array directly linked into Recharts coordinates matching your visual point plot positions
  const chartData = [
    { name: t('monthJan'), donations: 20000 },
    { name: t('monthFeb'), donations: 35000 },
    { name: t('monthMar'), donations: 28000 },
    { name: t('monthApr'), donations: 42000 },
    { name: t('monthMay'), donations: 49000 },
  ];

  // Custom tool-tip matching the display window configuration in your screenshot
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 p-3 shadow-sm rounded-lg text-xs">
          <p className="font-semibold text-gray-800 mb-0.5">{payload[0].payload.name}</p>
          <p className="text-[#5C2525]">
            {t('tooltipLabel')} : <span className="font-medium">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <main className="w-full max-w-7xl mx-auto space-y-6">
      {/* Top Metrics Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-2 transition-all hover:shadow-md"
          >
            <span className="text-sm text-gray-500 font-medium">{t(metric.labelKey)}</span>
            <h2 className="text-3xl font-bold text-[#5C2525]">{metric.value}</h2>
          </div>
        ))}
      </section>

      {/* Analytics Visualization Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Donation Trends Interactive Line Graph */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm flex flex-col overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">{t('donationTrendsTitle')}</h3>
          
          <div className="h-64 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={chartData} 
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  tickLine={false} 
                  axisLine={true}
                  stroke="#9CA3AF"
                  dy={10}
                />
                <YAxis 
                  domain={[0, 60000]} 
                  ticks={[0, 15000, 30000, 45000, 60000]}
                  tickLine={false}
                  axisLine={true}
                  stroke="#9CA3AF"
                  dx={-5}
                />
                {/* Pointer Tooltip Configuration */}
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E2E8F0', strokeWidth: 1 }} />
                
                {/* Animated Line Vector */}
                <Line
                  type="monotone"
                  dataKey="donations"
                  stroke="#5C2525"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#5C2525', strokeWidth: 0 }}
                  activeDot={{ r: 7, fill: '#5C2525' }}
                  isAnimationActive={true}
                  animationDuration={1200}
                  animationEasing="ease-in-out"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Campaigns List View Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">{t('topCampaignsTitle')}</h3>
          <ul className="flex flex-col gap-6">
            {campaigns.map((campaign, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                <span className="text-gray-700 font-medium text-base">{t(campaign.nameKey)}</span>
                <span className="text-gray-900 font-semibold text-base">{campaign.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}