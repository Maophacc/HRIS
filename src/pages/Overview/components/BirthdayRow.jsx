import React from 'react';

const BirthdayRow = ({ day, month, name, dept, status }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3e8ff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#a855f7', lineHeight: 1 }}>{day}</span>
      <span style={{ fontSize: '0.65rem', color: '#a855f7' }}>{month}</span>
    </div>
    <div>
      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{dept} • {status}</div>
    </div>
  </div>
);

export default BirthdayRow;
