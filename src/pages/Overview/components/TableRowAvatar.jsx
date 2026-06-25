import React from 'react';

const TableRowAvatar = ({ name, sub, id, date, color = '#64748b' }) => (
  <tr style={{ borderBottom: '1px solid #f8fafc' }}>
    <td style={{ padding: '12px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#64748b' }}>{sub}</div>
        <span style={{ fontWeight: 600, color: '#1e293b' }}>{name}</span>
      </div>
    </td>
    <td style={{ padding: '12px 0', color: '#64748b' }}>{id}</td>
    <td style={{ padding: '12px 0', textAlign: 'right', color: color, fontWeight: color !== '#64748b' ? 600 : 400 }}>{date}</td>
  </tr>
);

export default TableRowAvatar;
