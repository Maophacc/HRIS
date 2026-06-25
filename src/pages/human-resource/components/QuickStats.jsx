import React from 'react';
import { CalendarDays, FileText, Banknote, Clock, FolderOpen } from 'lucide-react';

const styles = {
  quickStats: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 24 },
  quickStat: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 9, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 },
  quickStatLabel: { display: 'block', color: '#718198', fontSize: 13, marginBottom: 4 },
  quickStatValue: { fontSize: 16, fontWeight: 700 },
};

const QuickStat = ({ icon: Icon, label, value, tone = '#334155' }) => (
  <article style={styles.quickStat}>
    <Icon size={22} color="#94a3b8" />
    <div>
      <span style={styles.quickStatLabel}>{label}</span>
      <strong style={{ ...styles.quickStatValue, color: tone }}>{value}</strong>
    </div>
  </article>
);

const QuickStats = ({ profile }) => (
  <section style={styles.quickStats}>
    <QuickStat icon={CalendarDays} label="Ngày vào làm" value={profile.startDate} />
    <QuickStat icon={FileText} label="Loại HĐ" value={profile.jobType} />
    <QuickStat icon={Banknote} label="Lương cơ bản" value={profile.salaryFormatted} />
    <QuickStat icon={Clock} label="Phép còn lại" value={`${profile.leaveBalance.remaining}/${profile.leaveBalance.annual} ngày`} tone="#00796b" />
    <QuickStat icon={FolderOpen} label="Tài liệu" value={`${profile.documents.length} tệp`} />
  </section>
);

export default QuickStats;
