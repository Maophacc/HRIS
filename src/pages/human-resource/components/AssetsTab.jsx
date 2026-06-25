import React, { useState } from 'react';
import { 
  Plus, 
  MoreVertical, 
  Eye, 
  Pencil, 
  Undo, 
  AlertTriangle 
} from 'lucide-react';

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
    paddingBottom: '12px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '800',
    color: '#1e293b',
  },
  addBtn: {
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
  statusBadge: {
    background: '#eff6ff',
    color: '#1d4ed8',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: '700',
  },
  actionBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '4px',
    display: 'grid',
    placeItems: 'center',
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
    width: '180px',
    padding: '6px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
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
  dropdownItemDanger: {
    color: '#ef4444',
  },
};

const AssetsTab = ({ profile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  
  const assets = profile.assets || [];

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
        <h3 style={styles.cardTitle}>Tài sản đã cấp phát</h3>
        <button style={styles.addBtn}>
          <Plus size={16} /> Thêm tài sản
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Mã tài sản</th>
            <th style={styles.th}>Tên tài sản</th>
            <th style={styles.th}>Nhóm</th>
            <th style={styles.th}>Ngày cấp</th>
            <th style={styles.th}>Ngày trả</th>
            <th style={styles.th}>Trạng thái</th>
            <th style={styles.th}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td style={{ ...styles.td, fontWeight: '700' }}>{asset.code}</td>
              <td style={styles.td}>{asset.name}</td>
              <td style={styles.td}>{asset.group || '—'}</td>
              <td style={styles.td}>{asset.date}</td>
              <td style={styles.td}>{asset.returnDate || '--'}</td>
              <td style={styles.td}>
                <span style={styles.statusBadge}>
                  {asset.status}
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
                      <Pencil size={14} color="#64748b" /> Cập nhật tình trạng
                    </button>
                    <button style={styles.dropdownItem} onClick={() => setDropdownOpen(null)}>
                      <Undo size={14} color="#64748b" /> Thu hồi
                    </button>
                    <button 
                      style={{ ...styles.dropdownItem, ...styles.dropdownItemDanger }} 
                      onClick={() => setDropdownOpen(null)}
                    >
                      <AlertTriangle size={14} /> Báo hỏng
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          {assets.length === 0 && (
            <tr>
              <td colSpan={7} style={{ ...styles.td, textAlign: 'center', color: '#94a3b8' }}>
                Không tìm thấy dữ liệu tài sản đã cấp phát
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTab;
