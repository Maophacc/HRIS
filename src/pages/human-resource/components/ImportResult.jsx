import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const styles = {
  resultBox: { textAlign: 'center', paddingTop: 70 },
  resultIcon: { width: 118, height: 118, borderRadius: 999, background: '#dcfce7', color: '#16a34a', display: 'grid', placeItems: 'center', margin: '0 auto 28px' },
  resultStats: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 42 },
  miniStat: { border: '1px solid #e5edf5', borderRadius: 10, padding: 20, display: 'flex', flexDirection: 'column', gap: 8 },
};

const MiniStat = ({ title, value, tone = '#0f172a', bg = '#ffffff' }) => (
  <div style={{ ...styles.miniStat, background: bg, borderColor: `${tone}22`, textAlign: 'left' }}>
    <span style={{ color: tone, fontSize: 13 }}>{title}</span>
    <strong style={{ color: tone, fontSize: 20 }}>{value}</strong>
  </div>
);

const ImportResult = () => (
  <div style={styles.resultBox}>
    <div style={styles.resultIcon}><CheckCircle2 size={58} /></div>
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px' }}>Đã hoàn tất nhập dữ liệu mẫu</h2>
    <p style={{ color: '#64748b', fontSize: 14 }}>Quá trình xử lý tệp dữ liệu đã kết thúc. Vui lòng kiểm tra lại báo cáo chi tiết dưới đây.</p>
    <div style={styles.resultStats}>
      <MiniStat title="Dòng đã nhập" value="03" tone="#16a34a" bg="#ecfdf5" />
      <MiniStat title="Dòng lỗi" value="02" tone="#dc2626" bg="#fef2f2" />
    </div>
  </div>
);

export default ImportResult;
