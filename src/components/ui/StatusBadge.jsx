import React from 'react';

const styles = {
  badge: { borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 900, display: 'inline-block' },
  badgeActive: { background: '#d9fbe6', color: '#14833b', border: '1px solid #b7f4ce' },
  badgeTrial: { background: '#fff3d1', color: '#b45309', border: '1px solid #ffd66b' },
};

const StatusBadge = ({ status, style }) => {
  const s = status ? status.trim() : '';
  let badgeStyle = styles.badgeActive; // default green
  
  if (s === 'Thử việc' || s === 'Sắp hết hạn') {
    badgeStyle = styles.badgeTrial;
  } else if (s === 'Đã kết thúc' || s === 'Hết hạn' || s === 'Đã nghỉ' || s === 'Thiếu') {
    badgeStyle = { background: '#fee2e2', color: '#ef4444', border: '1px solid #fecaca' };
  } else if (s === 'Chờ duyệt' || s === 'Chờ ký') {
    badgeStyle = { background: '#fef9c3', color: '#a16207', border: '1px solid #fef08a' };
  } else if (s === 'Đang hiệu lực' || s === 'Đang làm việc' || s === 'Đang làm' || s === 'Đã xác minh') {
    badgeStyle = styles.badgeActive;
  }

  return (
    <span style={{ ...styles.badge, ...badgeStyle, ...style }}>
      {status}
    </span>
  );
};

export default StatusBadge;
