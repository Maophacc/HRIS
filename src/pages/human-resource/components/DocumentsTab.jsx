import React, { useState } from 'react';
import { 
  Plus, 
  FileText, 
  MoreVertical, 
  Eye, 
  Download, 
  CheckCircle, 
  RefreshCw 
} from 'lucide-react';
import EditDrawer from './EditDrawer';

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
    marginBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '16px',
  },
  titleGroup: {
    textAlign: 'left',
  },
  cardTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '800',
    color: '#1e293b',
  },
  cardSub: {
    margin: '4px 0 0 0',
    fontSize: '13px',
    color: '#64748b',
  },
  updateBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    minHeight: '38px',
    border: 0,
    borderRadius: '8px',
    padding: '0 16px',
    background: '#4fa819',
    color: '#fff',
    fontSize: '13px',
    fontWeight: '700',
    cursor: 'pointer',
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
    position: 'relative',
  },
  fileNameWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#1e293b',
    fontWeight: '600',
    cursor: 'pointer',
  },
  pdfIcon: {
    color: '#ef4444',
  },
  badge: {
    padding: '3px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },
  badgeVerified: {
    background: '#e8f5e9',
    color: '#2e7d32',
  },
  badgeMissing: {
    background: '#ffebee',
    color: '#c62828',
  },
  badgeDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
  },
  actionBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '4px',
  },
  dropdown: {
    position: 'absolute',
    right: '24px',
    top: '40px',
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    zIndex: 20,
    width: '140px',
    padding: '6px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 12px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#475569',
    border: 0,
    background: 'none',
    width: '100%',
    textAlign: 'left',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.15s',
  },
};

const DocumentsTab = ({ profile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const docs = profile.documents || [];

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.titleGroup}>
          <h3 style={styles.cardTitle}>Tài liệu nhân sự</h3>
          <p style={styles.cardSub}>Quản lý hồ sơ, giấy tờ tùy thân và văn bằng của nhân viên.</p>
        </div>
        <button style={styles.updateBtn} onClick={() => setDrawerOpen(true)}>
          <Plus size={16} /> Cập nhật tài liệu
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Tên tài liệu</th>
            <th style={styles.th}>Loại</th>
            <th style={styles.th}>Tệp</th>
            <th style={styles.th}>Ngày tải</th>
            <th style={styles.th}>Trạng thái</th>
            <th style={styles.th}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc, index) => (
            <tr key={index}>
              <td style={{ ...styles.td, fontWeight: '700' }}>{doc.name}</td>
              <td style={styles.td}>{doc.type}</td>
              <td style={styles.td}>
                <div style={styles.fileNameWrap}>
                  <FileText size={16} style={styles.pdfIcon} />
                  <span>{doc.file}</span>
                </div>
              </td>
              <td style={styles.td}>{doc.date}</td>
              <td style={styles.td}>
                <span style={{ 
                  ...styles.badge, 
                  ...(doc.status === 'Đã xác minh' ? styles.badgeVerified : styles.badgeMissing) 
                }}>
                  <span style={{ 
                    ...styles.badgeDot, 
                    background: doc.status === 'Đã xác minh' ? '#2e7d32' : '#c62828' 
                  }} />
                  {doc.status}
                </span>
              </td>
              <td style={styles.td}>
                <button style={styles.actionBtn} onClick={() => toggleDropdown(index)}>
                  <MoreVertical size={16} />
                </button>
                {dropdownOpen === index && (
                  <div style={styles.dropdown}>
                    <button style={styles.dropdownItem} onClick={() => setDropdownOpen(null)}>
                      <Eye size={14} color="#64748b" /> Xem
                    </button>
                    <button style={styles.dropdownItem} onClick={() => setDropdownOpen(null)}>
                      <Download size={14} color="#64748b" /> Tải xuống
                    </button>
                    <button style={styles.dropdownItem} onClick={() => setDropdownOpen(null)}>
                      <CheckCircle size={14} color="#64748b" /> Xác minh
                    </button>
                    <button style={styles.dropdownItem} onClick={() => { setDropdownOpen(null); setDrawerOpen(true); }}>
                      <RefreshCw size={14} color="#64748b" /> Thay thế
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          {docs.length === 0 && (
            <tr>
              <td colSpan={6} style={{ ...styles.td, textAlign: 'center', color: '#94a3b8' }}>
                Không tìm thấy dữ liệu tài liệu nhân sự
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {drawerOpen && (
        <EditDrawer
          profile={profile}
          section="document"
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default DocumentsTab;
