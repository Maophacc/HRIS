import React from 'react';
import { History } from 'lucide-react';

const styles = {
  lifecycleSection: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 10, padding: 28 },
  lifecycleHeader: { display: 'flex', gap: 16, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid #e5edf5' },
  lifecycleTitle: { margin: 0, fontSize: 18, fontWeight: 700 },
  lifecycleDesc: { margin: '6px 0 0', color: '#64748b', fontSize: 13 },
  timeline: { display: 'flex', flexDirection: 'column', gap: 0 },
  timelineItem: { display: 'flex', gap: 20 },
  timelineDot: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20 },
  timelineCircle: { width: 14, height: 14, borderRadius: 999, background: '#cbd5e1', border: '3px solid #fff', boxShadow: '0 0 0 2px #cbd5e1' },
  timelineCircleActive: { background: '#00796b', boxShadow: '0 0 0 2px #00796b' },
  timelineLine: { width: 2, flex: 1, minHeight: 40, background: '#e2e8f0', margin: '4px 0' },
  timelineContent: { flex: 1, paddingBottom: 32, textAlign: 'left' },
  timelineMeta: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 },
  timelineDate: { color: '#64748b', fontSize: 13, fontWeight: 700 },
  timelineBadge: { fontSize: 11, fontWeight: 900, padding: '3px 10px', borderRadius: 999 },
  timelineEventTitle: { display: 'block', fontSize: 16, marginBottom: 4, fontWeight: 700 },
  timelineEventDesc: { margin: 0, color: '#64748b', fontSize: 14 },
};

const TimelineBadge = ({ type }) => {
  const map = {
    join: { label: 'Gia nhập', bg: '#ecfdf5', color: '#16a34a' },
    promotion: { label: 'Thăng tiến', bg: '#eff6ff', color: '#2563eb' },
    transfer: { label: 'Chuyển đổi', bg: '#fef3c7', color: '#d97706' },
    cert: { label: 'Chứng chỉ', bg: '#f3e8ff', color: '#9333ea' },
    leave: { label: 'Nghỉ việc', bg: '#fef2f2', color: '#dc2626' },
  };
  const s = map[type] || map.join;
  return <span style={{ ...styles.timelineBadge, background: s.bg, color: s.color }}>{s.label}</span>;
};

const LifecycleTab = ({ profile }) => (
  <div style={styles.lifecycleSection}>
    <div style={styles.lifecycleHeader}>
      <History size={24} color="#00796b" />
      <div style={{ textAlign: 'left' }}>
        <h3 style={styles.lifecycleTitle}>Lịch sử vòng đời nhân sự</h3>
        <p style={styles.lifecycleDesc}>Theo dõi các mốc quan trọng: gia nhập, thăng tiến, chuyển phòng ban, ký hợp đồng...</p>
      </div>
    </div>
    <div style={styles.timeline}>
      {profile.timeline.map((event, i) => (
        <div key={`${event.date}-${event.title}`} style={styles.timelineItem}>
          <div style={styles.timelineDot}>
            <span style={{ ...styles.timelineCircle, ...(i === 0 ? styles.timelineCircleActive : {}) }} />
            {i < profile.timeline.length - 1 && <span style={styles.timelineLine} />}
          </div>
          <div style={styles.timelineContent}>
            <div style={styles.timelineMeta}>
              <span style={styles.timelineDate}>{event.date}</span>
              <TimelineBadge type={event.type} />
            </div>
            <strong style={styles.timelineEventTitle}>{event.title}</strong>
            <p style={styles.timelineEventDesc}>{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LifecycleTab;
