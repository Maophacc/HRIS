import React from 'react';
import { MoreVertical } from 'lucide-react';
import StatusBadge from '../../../components/ui/StatusBadge';

const styles = {
  dataRow: { borderTop: '1px solid #edf2f7', color: '#334155' },
  checkCol: { width: 54, textAlign: 'center' },
  checkbox: { width: 18, height: 18, display: 'inline-block', border: '1px solid #cbd8e6', borderRadius: 5, background: '#fff' },
  employeeCell: { padding: '14px 14px', display: 'flex', alignItems: 'center', gap: 12, color: '#172033' },
  initial: { width: 38, height: 38, borderRadius: 999, background: '#e6edf5', color: '#64748b', display: 'grid', placeItems: 'center', fontWeight: 900 },
};

const getAvatarStyle = (name) => {
  const parts = name.trim().split(' ');
  let initials = '';
  if (parts.length >= 2) {
    const secondLast = parts[parts.length - 2];
    const last = parts[parts.length - 1];
    // Remove tone marks or accents for initials if needed, but simple first letter is fine
    initials = (secondLast[0] + last[0]).toUpperCase();
  } else {
    initials = name.substring(0, 2).toUpperCase();
  }
  
  if (initials === 'DL' || name.includes('Long')) return { initials: 'DL', bg: '#dcfce7', color: '#15803d' };
  if (initials === 'TM' || name.includes('Mai')) return { initials: 'TM', bg: '#ffedd5', color: '#c2410c' };
  if (initials === 'VA' || name.includes('An')) return { initials: 'VA', bg: '#dbeafe', color: '#1d4ed8' };
  
  const colors = [
    { bg: '#dbeafe', color: '#1d4ed8' },
    { bg: '#dcfce7', color: '#15803d' },
    { bg: '#ffedd5', color: '#c2410c' },
    { bg: '#f3e8ff', color: '#7e22ce' },
    { bg: '#fae8ff', color: '#a21caf' },
  ];
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return { initials, ...colors[hash % colors.length] };
};

const EmployeeRow = ({ employee, onSelect }) => {
  const { initials, bg, color } = getAvatarStyle(employee.name);
  
  // Align status names with display badges
  const displayStatus = employee.status === 'Đang làm' ? 'Đang làm việc' : employee.status;

  return (
    <tr style={{ ...styles.dataRow, cursor: 'pointer' }} onClick={() => onSelect(employee.id)}>
      <td style={styles.checkCol} onClick={(e) => e.stopPropagation()}><span style={styles.checkbox} /></td>
      <td style={styles.employeeCell}>
        <span style={{ ...styles.initial, background: bg, color: color }}>{initials}</span>
        <div style={{ textAlign: 'left' }}>
          <strong style={{ display: 'block', fontSize: '14px', color: '#1e293b' }}>{employee.name}</strong>
          <span style={{ color: '#64748b', fontSize: '12px', fontWeight: '500' }}>
            {employee.email || `${employee.name.toLowerCase().replace(/\s+/g, '')}@greenspeed.com`}
          </span>
        </div>
      </td>
      <td style={{ padding: '14px', textAlign: 'left' }}>{employee.project}</td>
      <td style={{ padding: '14px', textAlign: 'left', fontWeight: '700', color: '#475569' }}>{employee.code}</td>
      <td style={{ padding: '14px', textAlign: 'left' }}>{employee.position}</td>
      <td style={{ padding: '14px', textAlign: 'left' }}>{employee.startDate}</td>
      <td style={{ padding: '14px', textAlign: 'left' }}>
        <StatusBadge status={displayStatus} />
      </td>
      <td style={{ textAlign: 'right', paddingRight: '20px' }} onClick={(e) => e.stopPropagation()}>
        <MoreVertical size={20} color="#94a3b8" />
      </td>
    </tr>
  );
};

export default EmployeeRow;
