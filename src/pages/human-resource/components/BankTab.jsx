import React from 'react';
import { Landmark, PenSquare } from 'lucide-react';

const styles = {
  card: {
    background: '#fff',
    border: '1px solid #dde7f2',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    fontFamily: 'Be Vietnam Pro, sans-serif',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '14px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '800',
    color: '#166534',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  editBtn: {
    background: 'none',
    border: 'none',
    color: '#4fa819',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
    padding: '16px 0',
    borderBottom: '1px solid #f8fafc',
    fontSize: '14px',
    alignItems: 'center',
    textAlign: 'left',
  },
  label: {
    color: '#64748b',
    fontWeight: '500',
  },
  value: {
    fontWeight: '600',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
  },
  vcbBadge: {
    background: '#047857',
    color: '#fff',
    fontSize: '9px',
    fontWeight: '900',
    padding: '3px 6px',
    borderRadius: '4px',
    marginRight: '8px',
    letterSpacing: '0.5px',
  },
};

const BankTab = ({ profile, onEdit }) => {
  const bank = profile.bank || { name: '—', branch: '—', account: '—', holder: '—' };
  
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <Landmark size={20} color="#4fa819" />
          Thông tin ngân hàng
        </h3>
        <button style={styles.editBtn} onClick={onEdit} title="Chỉnh sửa ngân hàng">
          <PenSquare size={18} />
        </button>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Ngân hàng</span>
        <span style={styles.value}>
          <span style={styles.vcbBadge}>VCB</span>
          {bank.name}
        </span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Chi nhánh</span>
        <span style={styles.value}>{bank.branch}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Số tài khoản</span>
        <strong style={{ ...styles.value, fontSize: '15px' }}>{bank.account}</strong>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Chủ tài khoản</span>
        <strong style={styles.value}>{bank.holder ? bank.holder.toUpperCase() : '—'}</strong>
      </div>
    </div>
  );
};

export default BankTab;
