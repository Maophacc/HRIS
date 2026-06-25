import React from 'react';

const BarRow = ({ label, value, total, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{ width: '80px', fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>{label}</div>
    <div style={{ flex: 1, height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{ width: `${(value/total)*100}%`, height: '100%', backgroundColor: color, borderRadius: '3px' }}></div>
    </div>
    <div style={{ width: '20px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>{value}</div>
  </div>
);

export default BarRow;
