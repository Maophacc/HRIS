import React from 'react';

const MetricCard = ({ title, value, subtitle, subtitleColor = '#64748b', icon }) => (
  <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>{title}</span>
      {icon}
    </div>
    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '4px' }}>{value}</div>
    <div style={{ fontSize: '0.75rem', color: subtitleColor }}>{subtitle}</div>
  </div>
);

export default MetricCard;
