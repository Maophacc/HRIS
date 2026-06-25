import React from 'react';
import { 
  BriefcaseBusiness, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  PenSquare
} from 'lucide-react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr',
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
    background: 'none',
    border: 'none',
    color: '#4fa819',
    fontWeight: '700',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px 32px',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'left',
  },
  infoLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  infoValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#334155',
  },
  statusDot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22c55e',
    marginRight: '6px',
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
  badge: {
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: '700',
  },
  managerCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  managerAvatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
    color: '#475569',
    display: 'grid',
    placeItems: 'center',
    fontSize: '18px',
    fontWeight: '700',
  },
  managerInfo: {
    textAlign: 'left',
    flex: 1,
  },
  managerName: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0,
  },
  managerTitle: {
    fontSize: '12px',
    color: '#64748b',
    margin: '2px 0 0 0',
  },
  actionIconList: {
    display: 'flex',
    gap: '8px',
  },
  actionIconButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid #e2e8f0',
    background: '#fff',
    display: 'grid',
    placeItems: 'center',
    color: '#64748b',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  noteItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    textAlign: 'left',
    fontSize: '13px',
    color: '#475569',
    fontWeight: '500',
    lineHeight: '1.5',
  },
};

const OrgTreeNode = ({ initials, name, role, isActive, isLast }) => (
  <div style={{ display: 'flex', position: 'relative', paddingBottom: isLast ? 0 : 20 }}>
    {!isLast && (
      <div style={{
        position: 'absolute',
        left: '20px',
        top: '40px',
        bottom: 0,
        width: '2px',
        background: '#e2e8f0',
      }} />
    )}
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: isActive ? '#f0fdf4' : '#f8fafc',
      color: isActive ? '#22c55e' : '#64748b',
      display: 'grid',
      placeItems: 'center',
      fontWeight: '700',
      fontSize: '12px',
      zIndex: 1,
      border: isActive ? '2px solid #22c55e' : '2px solid #e2e8f0',
    }}>{initials}</div>
    <div style={{
      marginLeft: '12px',
      flex: 1,
      padding: '4px 12px',
      borderRadius: '8px',
      background: isActive ? '#edfdf1' : 'transparent',
      border: isActive ? '1px solid #bbf7d0' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontWeight: isActive ? '700' : '600', color: isActive ? '#15803d' : '#334155', fontSize: '13px' }}>{name}</div>
        <div style={{ color: '#64748b', fontSize: '11px', marginTop: '1px' }}>{role}</div>
      </div>
      {isActive && (
        <span style={{
          background: '#22c55e',
          color: '#fff',
          fontSize: '10px',
          fontWeight: '700',
          padding: '2px 6px',
          borderRadius: '12px',
        }}>Đang xem</span>
      )}
    </div>
  </div>
);

const WorkTab = ({ profile, onEdit }) => {
  const history = profile.workHistory || [
    { date: profile.startDate || '—', type: 'TUYỂN MỚI', title: profile.position || 'Nhân viên', dept: profile.department || 'Phòng Nhân sự', decider: profile.manager || 'Hệ thống tự động' }
  ];

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'ĐIỀU CHUYỂN':
        return { background: '#eff6ff', color: '#1d4ed8' };
      case 'CHÍNH THỨC':
        return { background: '#f0fdf4', color: '#166534' };
      case 'TUYỂN MỚI':
      default:
        return { background: '#f1f5f9', color: '#475569' };
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftCol}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <BriefcaseBusiness size={20} color="#64748b" />
              Thông tin công việc hiện tại
            </h3>
            <button style={styles.editBtn} onClick={onEdit}>
              <PenSquare size={16} /> Chỉnh sửa
            </button>
          </div>
          <div style={styles.infoGrid}>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Mã nhân viên</span>
              <strong style={styles.infoValue}>{profile.code || '—'}</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Phòng ban</span>
              <strong style={styles.infoValue}>{profile.department || '—'} (HR Department)</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Chi nhánh</span>
              <strong style={styles.infoValue}>{profile.branch || '—'} - CN Hồ Chí Minh</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Chức danh</span>
              <strong style={styles.infoValue}>{profile.position || '—'} (HR Specialist)</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Cấp bậc</span>
              <strong style={styles.infoValue}>{profile.level || '—'}</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Loại lao động</span>
              <strong style={styles.infoValue}>{profile.laborType || '—'}</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Địa điểm làm việc</span>
              <strong style={styles.infoValue}>{profile.workLocation || '—'}</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Trạng thái</span>
              <strong style={styles.infoValue}>
                <span style={styles.statusDot} />
                Đang làm việc
              </strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Ngày vào làm</span>
              <strong style={styles.infoValue}>{profile.startDate || '—'}</strong>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>Ngày chính thức</span>
              <strong style={styles.infoValue}>{profile.officialDate || '—'}</strong>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Lịch sử công việc</h3>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Ngày hiệu lực</th>
                <th style={styles.th}>Loại thay đổi</th>
                <th style={styles.th}>Chức danh mới</th>
                <th style={styles.th}>Phòng ban mới</th>
                <th style={styles.th}>Người quyết định</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.date}</td>
                  <td style={styles.td}>
                    <span style={{ ...styles.badge, ...getBadgeStyle(row.type) }}>
                      {row.type}
                    </span>
                  </td>
                  <td style={styles.td}><strong>{row.title}</strong></td>
                  <td style={styles.td}>{row.dept}</td>
                  <td style={styles.td}>{row.decider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={styles.rightCol}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Quản lý trực tiếp</h3>
          </div>
          <div style={styles.managerCard}>
            <div style={styles.managerAvatar}>
              {profile.manager ? profile.manager.split(' ').slice(-2).map((w) => w[0]).join('').toUpperCase() : 'QL'}
            </div>
            <div style={styles.managerInfo}>
              <h4 style={styles.managerName}>{profile.manager || '—'}</h4>
              <p style={styles.managerTitle}>{profile.managerRole || 'Quản lý'}</p>
            </div>
          </div>
          <div style={styles.actionIconList}>
            <button style={styles.actionIconButton} title="Gửi email"><Mail size={16} /></button>
            <button style={styles.actionIconButton} title="Gọi điện thoại"><Phone size={16} /></button>
            <button style={styles.actionIconButton} title="Chat tin nhắn"><MessageSquare size={16} /></button>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Sơ đồ báo cáo</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <OrgTreeNode initials="GD" name="Nguyễn Văn Lãnh Đạo" role="Tổng Giám đốc" isActive={false} isLast={false} />
            <OrgTreeNode initials="TM" name="Trần Thị Mai" role="Trưởng phòng" isActive={false} isLast={false} />
            <OrgTreeNode initials="NA" name={profile.name} role={profile.position} isActive={true} isLast={true} />
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Lưu ý quản trị</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={styles.noteItem}>
              <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Nhân viên đã hoàn thành thử việc và ký HĐ chính thức.</span>
            </div>
            <div style={styles.noteItem}>
              <AlertCircle size={18} color="#f97316" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Cần đánh giá định kỳ vào tháng 07/2026.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTab;
