import React from 'react';

const styles = {
  infoCard: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 10, overflow: 'hidden', boxShadow: '0 1px 4px rgba(15,23,42,.04)' },
  infoCardWide: { gridColumn: '1 / -1' },
  infoCardHeader: { minHeight: 56, borderBottom: '1px solid #e5edf5', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  infoCardTitle: { display: 'flex', alignItems: 'center', gap: 10 },
  infoCardHeading: { margin: 0, fontSize: 16, fontWeight: 900 },
  editLink: { border: 0, background: 'transparent', color: '#00796b', fontWeight: 900, cursor: 'pointer', fontSize: 14 },
  infoCardBody: { padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, paddingBottom: 12, borderBottom: '1px solid #f1f5f9' },
  infoLabel: { color: '#64748b', fontSize: 14, flexShrink: 0 },
  infoValue: { textAlign: 'right', color: '#334155', fontSize: 14, maxWidth: '60%' },
  emptyState: { textAlign: 'center', padding: '32px 16px', color: '#718198', display: 'flex', flexDirection: 'column', gap: 6 },
};

export const InfoCard = ({ title, icon: Icon, children, onEdit, wide }) => (
  <article style={{ ...styles.infoCard, ...(wide ? styles.infoCardWide : {}) }}>
    <div style={styles.infoCardHeader}>
      <div style={styles.infoCardTitle}>
        <Icon size={22} color="#94a3b8" />
        <h3 style={styles.infoCardHeading}>{title}</h3>
      </div>
      {onEdit && <button style={styles.editLink} onClick={onEdit}>Sửa</button>}
    </div>
    <div style={styles.infoCardBody}>{children}</div>
  </article>
);

export const InfoRow = ({ label, value, icon: Icon, highlight }) => (
  <div style={styles.infoRow}>
    <span style={styles.infoLabel}>{label}</span>
    <strong style={{ ...styles.infoValue, ...(highlight ? { color: '#00796b', fontSize: 16 } : {}) }}>
      {Icon && <Icon size={14} style={{ marginRight: 6, verticalAlign: -2 }} />}
      {value}
    </strong>
  </div>
);

export const EmptyState = ({ text, sub }) => (
  <div style={styles.emptyState}>
    <strong style={{ color: '#1e293b' }}>{text}</strong>
    {sub && <span style={{ fontSize: 13, color: '#64748b' }}>{sub}</span>}
  </div>
);
