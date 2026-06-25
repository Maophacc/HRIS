import React from 'react';
import { 
  FileText, 
  Plus, 
  Download, 
  Eye, 
  MoreVertical 
} from 'lucide-react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    fontFamily: 'Be Vietnam Pro, sans-serif',
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '24px',
  },
  card: {
    background: '#fff',
    border: '1px solid #dde7f2',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  },
  highlightCard: {
    background: 'linear-gradient(135deg, #3f8c14, #4fa819)',
    borderRadius: '16px',
    padding: '24px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '380px',
    boxShadow: '0 10px 15px -3px rgba(79, 168, 25, 0.2)',
  },
  highlightHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  highlightSub: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
  },
  highlightTitle: {
    fontSize: '20px',
    fontWeight: '800',
    margin: 0,
  },
  badgeWhite: {
    background: '#fff',
    color: '#3f8c14',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    marginTop: '6px',
  },
  highlightBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: '24px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '16px 0',
  },
  highlightRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  highlightLabel: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
  highlightValue: {
    fontWeight: '700',
  },
  viewBtn: {
    width: '100%',
    minHeight: '42px',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'background 0.2s',
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
  headerActions: {
    display: 'flex',
    gap: '10px',
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    minHeight: '36px',
    border: '1px solid #cfdbe8',
    borderRadius: '8px',
    padding: '0 12px',
    background: '#fff',
    color: '#475569',
    fontSize: '13px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    minHeight: '36px',
    border: 0,
    borderRadius: '8px',
    padding: '0 12px',
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
  },
  statusBadge: {
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: '700',
  },
  actionBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
  },
  attachmentsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  attachmentsCount: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
  },
  attachmentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  pdfCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid #e5edf5',
    borderRadius: '10px',
    padding: '12px 16px',
    background: '#fcfdfe',
  },
  pdfIconWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: '#fef2f2',
    display: 'grid',
    placeItems: 'center',
    color: '#ef4444',
  },
  pdfInfo: {
    textAlign: 'left',
    flex: 1,
    overflow: 'hidden',
  },
  pdfName: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#334155',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  pdfSub: {
    fontSize: '11px',
    color: '#94a3b8',
    margin: '2px 0 0 0',
  },
};

const ContractTab = ({ profile, onEdit }) => {
  // Safe extraction of contract history
  const history = profile.contractHistory || [
    { stt: '01', code: profile.contractNumber || '—', type: profile.contractType || 'HĐLĐ Chính thức', period: '—', date: profile.startDate || '—', status: profile.contractStatus || 'Đang hiệu lực' }
  ];

  // Safe extraction of pdf attachments
  const pdfs = profile.pdfAttachments || [
    { name: 'HĐLĐ_ChinhThuc.pdf', size: '2.4 MB', date: profile.startDate || '—' }
  ];

  const getStatusBadgeStyle = (status) => {
    if (status === 'Đang hiệu lực') {
      return { background: '#f0fdf4', color: '#166534' };
    }
    return { background: '#f1f5f9', color: '#475569' };
  };

  return (
    <div style={styles.container}>
      {/* Top Grid (Left Info Card + Right History Card) */}
      <div style={styles.topGrid}>
        {/* Left Green Active Contract Card */}
        <div style={styles.highlightCard}>
          <div style={styles.highlightHeader}>
            <span style={styles.highlightSub}>Hợp đồng hiện tại</span>
            <h3 style={styles.highlightTitle}>{profile.contractType || 'HĐLĐ Xác định thời hạn'}</h3>
            <span style={styles.badgeWhite}>Đang hiệu lực</span>
          </div>
          <div style={styles.highlightBody}>
            <div style={styles.highlightRow}>
              <span style={styles.highlightLabel}>Số hợp đồng</span>
              <span style={styles.highlightValue}>{profile.contractNumber || '—'}</span>
            </div>
            <div style={styles.highlightRow}>
              <span style={styles.highlightLabel}>Ngày bắt đầu</span>
              <span style={styles.highlightValue}>{profile.startDate || '—'}</span>
            </div>
            <div style={styles.highlightRow}>
              <span style={styles.highlightLabel}>Ngày kết thúc</span>
              <span style={styles.highlightValue}>{profile.contractEndDate || '—'}</span>
            </div>
            <div style={styles.highlightRow}>
              <span style={styles.highlightLabel}>Ngày ký</span>
              <span style={styles.highlightValue}>15/12/2023</span>
            </div>
            <div style={styles.highlightRow}>
              <span style={styles.highlightLabel}>Người ký</span>
              <span style={styles.highlightValue}>Phạm Minh Tú (CEO)</span>
            </div>
          </div>
          <button style={styles.viewBtn}>
            <Eye size={16} />
            Xem chi tiết hợp đồng
          </button>
        </div>

        {/* Right Contract History Table */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Lịch sử hợp đồng</h3>
            <div style={styles.headerActions}>
              <button style={styles.btnOutline}>
                <Download size={14} /> Xuất báo cáo
              </button>
              <button style={styles.btnPrimary}>
                <Plus size={14} /> Thêm hợp đồng mới
              </button>
            </div>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>STT</th>
                <th style={styles.th}>Số hợp đồng</th>
                <th style={styles.th}>Loại hợp đồng</th>
                <th style={styles.th}>Thời hạn</th>
                <th style={styles.th}>Ngày ký</th>
                <th style={styles.th}>Trạng thái</th>
                <th style={styles.th}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.stt}</td>
                  <td style={styles.td}><strong>{row.code}</strong></td>
                  <td style={styles.td}>{row.type}</td>
                  <td style={styles.td}>{row.period}</td>
                  <td style={styles.td}>{row.date}</td>
                  <td style={styles.td}>
                    <span style={{ ...styles.statusBadge, ...getStatusBadgeStyle(row.status) }}>
                      {row.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.actionBtn}><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom PDF Attachments Grid */}
      <div style={styles.card}>
        <div style={styles.attachmentsHeader}>
          <h3 style={styles.cardTitle}>
            <FileText size={20} color="#94a3b8" />
            Tệp đính kèm (Bản scan PDF)
          </h3>
          <span style={styles.attachmentsCount}>{pdfs.length} TỆP TIN</span>
        </div>
        <div style={styles.attachmentsGrid}>
          {pdfs.map((pdf, index) => (
            <div key={index} style={styles.pdfCard}>
              <div style={styles.pdfIconWrap}>
                <FileText size={20} />
              </div>
              <div style={styles.pdfInfo}>
                <h4 style={styles.pdfName} title={pdf.name}>{pdf.name}</h4>
                <p style={styles.pdfSub}>{pdf.size} • {pdf.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractTab;
