import React from 'react';

const TodoRow = ({ text, sub, subColor = '#64748b' }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
    <input type="checkbox" style={{ marginTop: '4px', cursor: 'pointer' }} />
    <div>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>{text}</div>
      <div style={{ fontSize: '0.75rem', color: subColor, marginTop: '2px' }}>{sub}</div>
    </div>
  </div>
);

export default TodoRow;
