import React from 'react';
import { ShieldCheck, Pencil, History, Landmark } from 'lucide-react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    fontFamily: 'Be Vietnam Pro, sans-serif',
  },
  card: {
    background: '#fff',
    border: '1px solid #dde7f2',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '12px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '800',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  editBtn: {
    background: '#4fa819',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '12px',
    padding: '6px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px 40px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f8fafc',
    fontSize: '14px',
    textAlign: 'left',
  },
  label: {
    color: '#64748b',
    fontWeight: '500',
  },
  value: {
    fontWeight: '700',
    color: '#334155',
  },
  statusBadge: {
    background: '#dcfce7',
    color: '#166534',
    padding: '2px 10px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#22c55e',
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    paddingBottom: '20px',
    textAlign: 'left',
  },
  timelineDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#cbd5e1',
    border: '3px solid #f8fafc',
    zIndex: 1,
    marginTop: '5px',
    marginRight: '12px',
  },
  timelineDotActive: {
    background: '#22c55e',
    border: '3px solid #dcfce7',
  },
  timelineLine: {
    position: 'absolute',
    left: '5px',
    top: '12px',
    bottom: 0,
    width: '2px',
    background: '#e2e8f0',
  },
  timelineDate: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  timelineTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#334155',
    margin: '2px 0 0 0',
  },
  timelineAmt: {
    marginLeft: 'auto',
    fontSize: '14px',
    fontWeight: '800',
  },
  calcRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #f8fafc',
    fontSize: '13px',
    textAlign: 'left',
  },
  calcLabel: {
    color: '#64748b',
    fontWeight: '500',
  },
  calcVal: {
    fontWeight: '700',
    color: '#334155',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '16px',
    marginTop: '8px',
    borderTop: '2px solid #e5edf5',
    fontSize: '14px',
    fontWeight: '800',
  },
};

const InsuranceTab = ({ profile, onEdit }) => {
  // Safe extraction of values
  const salary = profile.insuranceSalary || 15700000;
  const bhxh = Math.round(salary * 0.08);
  const bhyt = Math.round(salary * 0.015);
  const bhtn = Math.round(salary * 0.01);
  const totalDeductions = bhxh + bhyt + bhtn;

  const history = profile.insuranceHistory || [
    { date: profile.insuranceStartDate || '08/01/2024', title: 'Bắt đầu tham gia', amount: salary.toLocaleString('vi-VN') + ' đ', type: 'start' }
  ];

  return (
    <div style={styles.container}>
      {/* Top Details Card */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <ShieldCheck size={20} color="#64748b" />
            Bảo hiểm và thuế
          </h3>
          <button style={styles.editBtn} onClick={onEdit}>
            <Pencil size={14} /> Sửa bảo hiểm
          </button>
        </div>
        <div style={styles.grid}>
          <div style={styles.row}>
            <span style={styles.label}>Mã số thuế cá nhân</span>
            <strong style={styles.value}>{profile.taxId || '—'}</strong>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Số BHXH</span>
            <strong style={styles.value}>{profile.bhxhNumber || '—'}</strong>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Số BHYT</span>
            <strong style={styles.value}>{profile.bhytNumber || '—'}</strong>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Mức lương đóng bảo hiểm</span>
            <strong style={styles.value}>{salary.toLocaleString('vi-VN')} đ</strong>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Ngày tham gia</span>
            <strong style={styles.value}>{profile.insuranceStartDate || '—'}</strong>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Trạng thái</span>
            <span style={styles.value}>
              <span style={styles.statusBadge}>
                <span style={styles.statusDot} />
                {profile.insuranceStatus || 'Đang tham gia'}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row (Timeline + Deduction breakdown) */}
      <div style={styles.bottomGrid}>
        {/* Timeline */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <History size={18} color="#64748b" />
              Lịch sử điều chỉnh
            </h3>
          </div>
          <div style={styles.timeline}>
            {history.map((item, idx) => (
              <div key={idx} style={styles.timelineItem}>
                {idx !== history.length - 1 && <div style={styles.timelineLine} />}
                <div style={{ 
                  ...styles.timelineDot, 
                  ...(idx === 0 ? styles.timelineDotActive : {}) 
                }} />
                <div>
                  <span style={styles.timelineDate}>{item.date}</span>
                  <h4 style={styles.timelineTitle}>{item.title}</h4>
                </div>
                <strong style={{ 
                  ...styles.timelineAmt, 
                  color: item.type === 'increase' ? '#166534' : '#334155' 
                }}>
                  {item.amount}
                </strong>
              </div>
            ))}
          </div>
        </div>

        {/* Deductions Calculator */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Landmark size={18} color="#64748b" />
              Chi tiết khấu trừ (Ước tính)
            </h3>
          </div>
          <div style={styles.calcRow}>
            <span style={styles.calcLabel}>BHXH (8%)</span>
            <span style={styles.calcVal}>{bhxh.toLocaleString('vi-VN')} đ</span>
          </div>
          <div style={styles.calcRow}>
            <span style={styles.calcLabel}>BHYT (1.5%)</span>
            <span style={styles.calcVal}>{bhyt.toLocaleString('vi-VN')} đ</span>
          </div>
          <div style={styles.calcRow}>
            <span style={styles.calcLabel}>BHTN (1%)</span>
            <span style={styles.calcVal}>{bhtn.toLocaleString('vi-VN')} đ</span>
          </div>
          <div style={styles.totalRow}>
            <span style={{ color: '#334155' }}>Tổng khấu trừ BH</span>
            <strong style={{ color: '#ef4444' }}>{totalDeductions.toLocaleString('vi-VN')} đ</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceTab;
