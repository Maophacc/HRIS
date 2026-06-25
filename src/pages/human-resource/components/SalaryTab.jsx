import React from 'react';
import { 
  Banknote, 
  CreditCard, 
  Coins, 
  PenSquare, 
  CalendarDays 
} from 'lucide-react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '24px',
    fontFamily: 'Be Vietnam Pro, sans-serif',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
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
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #f1f5f9',
    textAlign: 'left',
  },
  summaryLabel: {
    fontSize: '13px',
    color: '#64748b',
    fontWeight: '500',
  },
  summaryValue: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#334155',
  },
  totalBox: {
    marginTop: '20px',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'left',
  },
  totalLabel: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#166534',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: '4px',
  },
  totalValue: {
    fontSize: '20px',
    fontWeight: '900',
    color: '#15803d',
  },
  bankItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'left',
    paddingBottom: '12px',
    borderBottom: '1px solid #f1f5f9',
    marginBottom: '12px',
  },
  bankLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  bankValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#334155',
  },
  bankHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#334155',
    marginBottom: '8px',
  },
  bankLogo: {
    width: '28px',
    height: '28px',
    borderRadius: '4px',
    background: '#10b981',
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    fontWeight: '700',
    fontSize: '12px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  th: {
    textAlign: 'left',
    padding: '12px 8px',
    background: '#f8fafc',
    color: '#64748b',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    borderBottom: '1px solid #edf2f7',
  },
  td: {
    padding: '16px 8px',
    borderBottom: '1px solid #f1f5f9',
    color: '#334155',
    textAlign: 'left',
  },
  allowanceTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#334155',
    margin: 0,
  },
  allowanceSub: {
    fontSize: '11px',
    color: '#94a3b8',
    margin: '2px 0 0 0',
  },
  badge: {
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '700',
  },
  badgeTaxableYes: {
    background: '#f0fdf4',
    color: '#15803d',
  },
  badgeTaxableNo: {
    background: '#f1f5f9',
    color: '#475569',
  },
  statusWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#166534',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#22c55e',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
};

const TimelineItem = ({ date, title, desc, decider, amount, change, isFirst, isLast }) => (
  <div style={{ display: 'flex', position: 'relative', paddingBottom: isLast ? 0 : 24 }}>
    {/* Left Line */}
    {!isLast && (
      <div style={{
        position: 'absolute',
        left: '42px',
        top: '24px',
        bottom: 0,
        width: '2px',
        background: '#e2e8f0',
      }} />
    )}
    
    {/* Date Box */}
    <div style={{
      width: '84px',
      fontSize: '12px',
      color: '#64748b',
      fontWeight: '700',
      textAlign: 'left',
      paddingTop: '2px',
    }}>
      {date}
    </div>
    
    {/* Dot */}
    <div style={{
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: isFirst ? '#22c55e' : '#cbd5e1',
      border: isFirst ? '4px solid #dcfce7' : '4px solid #f8fafc',
      zIndex: 1,
      margin: '4px 16px 0 16px',
    }} />

    {/* Content */}
    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
      <div style={{ textAlign: 'left' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', margin: 0 }}>{title}</h4>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0' }}>{desc}</p>
        <span style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8' }}>{decider}</span>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase' }}>Mức lương mới</div>
        <strong style={{ fontSize: '15px', fontWeight: '800', color: '#1e293b', display: 'block', marginTop: '2px' }}>
          {amount.toLocaleString('vi-VN')} VND
        </strong>
        {change && (
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#22c55e', display: 'block', marginTop: '2px' }}>
            {change}
          </span>
        )}
      </div>
    </div>
  </div>
);

const SalaryTab = ({ profile, onEdit }) => {
  // Safe extraction of bank info
  const bank = profile.bank || { name: '—', branch: '—', account: '—', holder: '—' };
  
  // Safe extraction of allowances
  const allowances = profile.allowances || [];
  const totalAllowances = allowances.reduce((sum, item) => sum + item.amount, 0);
  const totalGross = (profile.salary || 0) + totalAllowances;

  // Safe extraction of salary history
  const history = profile.salaryHistory || [
    { date: profile.startDate || '—', title: 'Quyết định bổ nhiệm', desc: 'Mức lương ban đầu khi gia nhập.', decider: 'Hệ thống tự động', newSalary: profile.salary || 0, change: '' }
  ];

  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.leftCol}>
        {/* Salary Summary Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Banknote size={20} color="#64748b" />
              Tóm tắt lương hiện tại
            </h3>
            <button style={styles.editBtn} onClick={onEdit}>
              <PenSquare size={14} /> Chỉnh sửa
            </button>
          </div>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Lương cơ bản</span>
            <strong style={styles.summaryValue}>{(profile.salary || 0).toLocaleString('vi-VN')} VND</strong>
          </div>
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Tổng phụ cấp</span>
            <strong style={styles.summaryValue}>{totalAllowances.toLocaleString('vi-VN')} VND</strong>
          </div>
          <div style={styles.totalBox}>
            <span style={styles.totalLabel}>Thu nhập Gross dự kiến</span>
            <strong style={styles.totalValue}>{totalGross.toLocaleString('vi-VN')} VND</strong>
          </div>
        </div>

        {/* Payment/Bank Details Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <CreditCard size={20} color="#64748b" />
              Thông tin thanh toán
            </h3>
          </div>
          <div style={styles.bankItem}>
            <span style={styles.bankLabel}>Ngân hàng</span>
            <div style={styles.bankHeader}>
              <div style={styles.bankLogo}>V</div>
              <span style={styles.bankValue}>{bank.name}</span>
            </div>
          </div>
          <div style={styles.bankItem}>
            <span style={styles.bankLabel}>Số tài khoản</span>
            <strong style={styles.bankValue}>{bank.account}</strong>
          </div>
          <div style={styles.bankItem}>
            <span style={styles.bankLabel}>Chủ tài khoản</span>
            <strong style={styles.bankValue}>{bank.holder}</strong>
          </div>
          <div style={styles.bankItem}>
            <span style={styles.bankLabel}>Chi nhánh</span>
            <strong style={styles.bankValue}>{bank.branch}</strong>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div style={styles.rightCol}>
        {/* Allowance Table Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Coins size={20} color="#64748b" />
              Chi tiết phụ cấp
            </h3>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Khoản phụ cấp</th>
                <th style={styles.th}>Số tiền (VNĐ)</th>
                <th style={styles.th}>Chu kỳ</th>
                <th style={styles.th}>Chịu thuế TNCN</th>
                <th style={styles.th}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {allowances.map((item, index) => (
                <tr key={index}>
                  <td style={styles.td}>
                    <h4 style={styles.allowanceTitle}>{item.name}</h4>
                    <p style={styles.allowanceSub}>{item.sub || '—'}</p>
                  </td>
                  <td style={styles.td}><strong>{item.amount.toLocaleString('vi-VN')}</strong></td>
                  <td style={styles.td}>{item.period || 'Hàng tháng'}</td>
                  <td style={styles.td}>
                    <span style={{ 
                      ...styles.badge, 
                      ...(item.taxable === 'CÓ' ? styles.badgeTaxableYes : styles.badgeTaxableNo) 
                    }}>
                      {item.taxable || 'KHÔNG'}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.statusWrap}>
                      <span style={styles.statusDot} />
                      {item.status || 'Đang áp dụng'}
                    </div>
                  </td>
                </tr>
              ))}
              {allowances.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ ...styles.td, textAlign: 'center', color: '#94a3b8' }}>
                    Chưa thiết lập khoản phụ cấp nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Salary History Timeline Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <CalendarDays size={20} color="#64748b" />
              Lịch sử thay đổi lương
            </h3>
          </div>
          <div style={styles.timeline}>
            {history.map((item, index) => (
              <TimelineItem 
                key={index}
                date={item.date}
                title={item.title}
                desc={item.desc}
                decider={item.decider}
                amount={item.newSalary}
                change={item.change}
                isFirst={index === 0}
                isLast={index === history.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryTab;
