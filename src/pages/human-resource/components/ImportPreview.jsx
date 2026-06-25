import React from 'react';

const styles = {
  previewStats: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 },
  miniStat: { border: '1px solid #e5edf5', borderRadius: 10, padding: 20, display: 'flex', flexDirection: 'column', gap: 8 },
  previewTable: { border: '1px solid #dde7f2', borderRadius: 10, overflow: 'hidden' },
  previewRow: { display: 'grid', gridTemplateColumns: '54px 1fr 1fr', alignItems: 'center', minHeight: 82, borderTop: '1px solid #edf2f7', padding: '0 22px' },
  checkbox: { width: 18, height: 18, display: 'inline-block', border: '1px solid #cbd8e6', borderRadius: 5, background: '#fff' },
};

const MiniStat = ({ title, value, tone = '#0f172a', bg = '#ffffff' }) => (
  <div style={{ ...styles.miniStat, background: bg, borderColor: `${tone}22` }}>
    <span style={{ color: tone, fontSize: 13 }}>{title}</span>
    <strong style={{ color: tone, fontSize: 20 }}>{value}</strong>
  </div>
);

const ImportPreview = () => (
  <>
    <div style={styles.previewStats}>
      <MiniStat title="Tổng số bản ghi" value="5" />
      <MiniStat title="Hợp lệ" value="3" tone="#16a34a" bg="#ecfdf5" />
      <MiniStat title="Lỗi" value="2" tone="#dc2626" bg="#fef2f2" />
    </div>
    <div style={styles.previewTable}>
      {[
        ['SV-0031', 'Nguyễn Văn A', 'Hợp lệ', '#16a34a'],
        ['SV-0003', 'Trần Thị B', 'Mã NV đã tồn tại', '#ef4444'],
        ['SV-0032', 'Lê Văn C', 'Email không đúng định dạng', '#ef4444'],
        ['SV-0033', 'Phạm Văn D', 'Thiếu thông tin phòng ban', '#f97316'],
        ['SV-0034', 'Hoàng Thị E', 'Hợp lệ', '#16a34a'],
      ].map(([code, name, status, color]) => (
        <div key={code} style={styles.previewRow}>
          <span style={styles.checkbox} />
          <div><strong>{code}</strong><br /><span style={{ fontSize: 13, color: '#64748b' }}>{name}</span></div>
          <strong style={{ color, textAlign: 'right' }}>{status}</strong>
        </div>
      ))}
    </div>
  </>
);

export default ImportPreview;
