import React from 'react';

const TimelineRow = ({ title, desc, dotColor }) => (
  <div style={{ position: 'relative' }}>
    <div style={{ position: 'absolute', left: '-21px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: dotColor }}></div>
    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>{title}</div>
    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{desc}</div>
  </div>
);

export default TimelineRow;
