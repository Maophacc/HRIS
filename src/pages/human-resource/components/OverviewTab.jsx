import React from 'react';
import { 
  User, 
  BriefcaseBusiness, 
  FileText, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '22px',
    fontFamily: 'Be Vietnam Pro, sans-serif',
  },
  card: {
    background: '#fff',
    border: '1px solid #dde7f2',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  },
  cardTitle: {
    margin: '0 0 16px 0',
    fontSize: '15px',
    fontWeight: '800',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f8fafc',
    fontSize: '13px',
  },
  label: {
    color: '#64748b',
  },
  value: {
    fontWeight: '600',
    color: '#334155',
  },
};

const OverviewTab = ({ profile }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h4 style={styles.cardTitle}>
          <User size={18} color="#94a3b8" />
          Tổng quan cá nhân
        </h4>
        <div style={styles.row}>
          <span style={styles.label}>Họ và tên</span>
          <span style={styles.value}>{profile.name}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Mã nhân viên</span>
          <span style={styles.value}>{profile.code}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Ngày sinh</span>
          <span style={styles.value}>{profile.dob}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Giới tính</span>
          <span style={styles.value}>{profile.gender}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Số điện thoại</span>
          <span style={styles.value}>{profile.phone}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Email công việc</span>
          <span style={styles.value}>{profile.workEmail}</span>
        </div>
      </div>

      <div style={styles.card}>
        <h4 style={styles.cardTitle}>
          <BriefcaseBusiness size={18} color="#94a3b8" />
          Tóm tắt công việc
        </h4>
        <div style={styles.row}>
          <span style={styles.label}>Phòng ban</span>
          <span style={styles.value}>{profile.department}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Chức danh</span>
          <span style={styles.value}>{profile.position}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Chi nhánh</span>
          <span style={styles.value}>{profile.branch || 'CN HCM'}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Quản lý trực tiếp</span>
          <span style={styles.value}>{profile.manager}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Loại lao động</span>
          <span style={styles.value}>{profile.laborType || 'Chính thức'}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>Ngày vào làm</span>
          <span style={styles.value}>{profile.startDate}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
