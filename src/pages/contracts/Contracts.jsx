import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../../components/layout/TopNavbar';
import StatusBadge from '../../components/ui/StatusBadge';
import { 
  Plus, 
  Upload, 
  Download, 
  Search, 
  Calendar, 
  ChevronDown, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  PenTool, 
  Users, 
  Trash2, 
  X,
  Sparkles,
  Printer,
  RefreshCw
} from 'lucide-react';

const styles = {
  main: { padding: '26px 34px 104px', maxWidth: 1680, margin: '0 auto', fontFamily: 'Be Vietnam Pro, sans-serif' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 7, color: '#718198', fontSize: 14, marginBottom: 12 },
  listHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 22, marginBottom: 22 },
  pageTitle: { margin: 0, fontSize: 30, lineHeight: 1.15, fontWeight: 700, color: '#334155' },
  pageDesc: { margin: '8px 0 0', fontSize: 15, color: '#718198' },
  headerActions: { display: 'flex', gap: 14, alignItems: 'center' },
  primaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 42, border: 0, borderRadius: 7, padding: '0 18px', background: '#00796b', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 40, border: '1px solid #cfdbe8', borderRadius: 7, padding: '0 16px', background: '#fff', color: '#475569', fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  
  // Page Toggle Tabs
  toggleTabs: { display: 'flex', borderBottom: '1px solid #cbd5e1', marginBottom: 24, gap: 28 },
  toggleTab: { border: 0, borderBottom: '2px solid transparent', background: 'transparent', color: '#64748b', padding: '12px 4px', fontSize: 15, fontWeight: 700, cursor: 'pointer', paddingBottom: '14px' },
  toggleTabActive: { color: '#00796b', borderBottomColor: '#00796b' },
  
  // Metric Cards
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 18, marginBottom: 26 },
  statCard: { background: '#fff', border: '1px solid #dde7f2', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' },
  statLeft: { display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' },
  statTitle: { fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  statVal: { fontSize: '24px', fontWeight: '800', color: '#1e293b' },
  statIconWrap: { width: '40px', height: '40px', borderRadius: '8px', display: 'grid', placeItems: 'center' },

  // Filters
  filterPanel: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 9, padding: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, marginBottom: 20 },
  filterInput: { width: 220, height: 44, border: '1px solid #cfdbe8', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px' },
  filterDate: { width: 170, height: 44, border: '1px solid #cfdbe8', borderRadius: 6, padding: '0 14px', fontSize: 14, outline: 'none', cursor: 'pointer' },
  selectBox: { height: 44, minWidth: 170, border: '1px solid #cfdbe8', borderRadius: 6, background: '#fff', color: '#475569', padding: '0 14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, fontSize: 14, cursor: 'pointer' },
  quickFilters: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: '#64748b', marginBottom: 20 },
  quickFilterBtn: { border: '1px solid #cbd5e1', background: '#fff', borderRadius: '6px', padding: '6px 12px', fontSize: '13px', fontWeight: '700', color: '#475569', cursor: 'pointer' },
  quickFilterBtnActive: { background: '#00796b', color: '#fff', borderColor: '#00796b' },

  // Table
  tableCard: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 9, overflow: 'hidden', boxShadow: '0 1px 4px rgba(15,23,42,.05)' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  th: { padding: '15px 14px', background: '#f8fafc', color: '#64748b', textTransform: 'uppercase', letterSpacing: .6, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', border: 0, textAlign: 'left' },
  td: { padding: '16px 14px', borderBottom: '1px solid #f1f5f9', color: '#334155', textAlign: 'left', verticalAlign: 'middle' },
  avatar: { width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' },
  
  // Drawer
  drawerLayer: { position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' },
  drawerScrim: { position: 'absolute', inset: 0, background: 'rgba(15,23,42,.42)', backdropFilter: 'blur(4px)' },
  drawer: { position: 'relative', width: 620, maxWidth: '92vw', background: '#fff', height: '100%', boxShadow: '-20px 0 44px rgba(15,23,42,.12)', display: 'flex', flexDirection: 'column', zIndex: 101 },
  drawerHeader: { padding: '24px 28px', borderBottom: '1px solid #e5edf5', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  drawerTitle: { margin: 0, fontSize: 18, fontWeight: '900', color: '#1e293b' },
  drawerBody: { flex: 1, overflow: 'auto', padding: '24px 28px' },
  drawerFooter: { minHeight: 76, borderTop: '1px solid #e5edf5', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '0 28px', background: '#f8fafc' },
  formSection: { display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', margin: '12px 0 6px 0', fontSize: '12px', fontWeight: '800', color: '#00796b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  formField: { display: 'flex', flexDirection: 'column', gap: 6, color: '#334155', fontSize: '13px', fontWeight: '700', textAlign: 'left' },
  inputWrap: { minHeight: 40, border: '1px solid #cfdbe8', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: 10, padding: '0 12px', background: '#fff', position: 'relative' },
  inputField: { border: 0, outline: 0, flex: 1, font: 'inherit', fontWeight: '500', background: 'transparent', width: '100%', color: '#334155' },
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) return dateStr;
  
  if (dateStr.includes('/')) {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const p0 = parseInt(parts[0], 10);
      const p1 = parseInt(parts[1], 10);
      const p2 = parseInt(parts[2], 10);
      if (p0 <= 12 && p1 > 12) {
        return `${String(p1).padStart(2, '0')}/${String(p0).padStart(2, '0')}/${p2}`;
      }
      return `${String(p0).padStart(2, '0')}/${String(p1).padStart(2, '0')}/${p2}`;
    }
  }
  
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  }
  return dateStr;
};

const toISODate = (dateStr) => {
  if (!dateStr) return '';
  if (dateStr.includes('-')) return dateStr;
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const p0 = parseInt(parts[0], 10);
    const p1 = parseInt(parts[1], 10);
    const p2 = parseInt(parts[2], 10);
    if (p0 <= 12 && p1 > 12) {
      return `${p2}-${String(p0).padStart(2, '0')}-${String(p1).padStart(2, '0')}`;
    } else {
      return `${p2}-${String(p1).padStart(2, '0')}-${String(p0).padStart(2, '0')}`;
    }
  }
  return dateStr;
};

const Contracts = () => {
  const navigate = useNavigate();
  const [activeToggle, setActiveToggle] = useState('list'); // list or approval
  const [quickFilter, setQuickFilter] = useState('Tất cả');
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  // Form local states for drawer
  const [contractType, setContractType] = useState('Chính thức');
  const [contractNumber, setContractNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [signDate, setSignDate] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [allowance, setAllowance] = useState('');
  const [payMethod, setPayMethod] = useState('Chuyển khoản');
  const [terms, setTerms] = useState('');

  const initialContracts = [
    { 
      id: 'HĐ-2024-001', 
      subId: 'PL-2024-01', 
      empName: 'Nguyen Duc Long', 
      empCode: 'SV-0001', 
      avatarInit: 'NL',
      avatarBg: '#dcfce7',
      avatarColor: '#15803d',
      dept: 'Vận hành Logistics', 
      role: 'Giám sát kho', 
      type: 'Chính thức', 
      start: '01/01/2024', 
      end: '01/01/2026', 
      remaining: '712 ngày', 
      status: 'Đang hiệu lực',
      salary: 15000000,
      allowance: 2000000,
      signDate: '28/12/2023',
      terms: 'Nhân viên cam kết bảo mật thông tin công ty. Thời gian làm việc 40 giờ/tuần từ thứ 2 đến thứ 6. Thử việc 02 tháng hưởng 85% lương cơ bản.'
    },
    { 
      id: 'HĐ-2024-002', 
      subId: '-', 
      empName: 'Trần Thị Mai', 
      empCode: 'SV-0002', 
      avatarInit: 'TM',
      avatarBg: '#ffedd5',
      avatarColor: '#c2410c',
      dept: 'Kế toán', 
      role: 'Kế toán tổng hợp', 
      type: 'Thử việc', 
      start: '15/05/2024', 
      end: '15/07/2024', 
      remaining: '12 ngày', 
      status: 'Sắp hết hạn',
      salary: 12000000,
      allowance: 1000000,
      signDate: '10/05/2024',
      terms: 'Nhân viên cam kết hoàn thành tốt công việc kế toán được giao. Hưởng 100% lương thử việc.'
    },
    { 
      id: 'HĐ-2023-085', 
      subId: '-', 
      empName: 'Nguyen Van An', 
      empCode: 'SV-0003', 
      avatarInit: 'VA',
      avatarBg: '#dbeafe',
      avatarColor: '#1d4ed8',
      dept: 'Hành chính NS', 
      role: 'Chuyên viên C&B', 
      type: 'Cộng tác viên', 
      start: '10/02/2023', 
      end: '10/02/2024', 
      remaining: 'Hết hạn', 
      status: 'Đã kết thúc',
      salary: 10000000,
      allowance: 1500000,
      signDate: '08/02/2023',
      terms: 'Hợp đồng cộng tác viên phục vụ các dự án nhân sự nội bộ.'
    }
  ];

  const handleRowClick = (contract) => {
    setSelectedContract(contract);
    setContractType(contract.type);
    setContractNumber(contract.id);
    setStartDate(contract.start);
    setEndDate(contract.end);
    setSignDate(contract.signDate || '');
    setBasicSalary(String(contract.salary || ''));
    setAllowance(String(contract.allowance || ''));
    setPayMethod('Chuyển khoản');
    setTerms(contract.terms || '');
    setEditDrawerOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f6f9fc', color: '#334155' }}>
      <TopNavbar activeTab="Hợp đồng" />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          Nhân sự nội <span>›</span> <strong>Danh sách hợp đồng</strong>
        </div>
        
        <section style={styles.listHeader}>
          <div>
            <h1 style={styles.pageTitle}>Danh sách hợp đồng</h1>
            <p style={styles.pageDesc}>Quản lý, theo dõi và lưu trữ thông tin hợp đồng nhân viên tập trung.</p>
          </div>
          <div style={styles.headerActions}>
            <button style={styles.secondaryButton}><Upload size={18} /> Nhập dữ liệu</button>
            <button style={styles.secondaryButton}><Download size={18} /> Xuất dữ liệu</button>
            <button style={styles.primaryButton}><Plus size={18} /> Tạo hợp đồng</button>
          </div>
        </section>

        <section style={styles.toggleTabs}>
          <button 
            style={{ ...styles.toggleTab, ...(activeToggle === 'list' ? styles.toggleTabActive : {}) }}
            onClick={() => setActiveToggle('list')}
          >
            Danh sách ký hợp đồng
          </button>
          <button 
            style={{ ...styles.toggleTab, ...(activeToggle === 'approval' ? styles.toggleTabActive : {}) }}
            onClick={() => setActiveToggle('approval')}
          >
            Duyệt danh sách hợp đồng trước ký
          </button>
        </section>

        {/* Metric Cards Grid */}
        <section style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statLeft}>
              <span style={styles.statTitle}>Tổng số hợp đồng</span>
              <strong style={styles.statVal}>1,248</strong>
            </div>
            <div style={{ ...styles.statIconWrap, background: '#eff6ff', color: '#1d4ed8' }}>
              <FileText size={20} />
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLeft}>
              <span style={styles.statTitle}>Đang hiệu lực</span>
              <strong style={styles.statVal}>1,102</strong>
            </div>
            <div style={{ ...styles.statIconWrap, background: '#ecfdf5', color: '#10b981' }}>
              <CheckCircle size={20} />
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLeft}>
              <span style={styles.statTitle}>Sắp hết hạn</span>
              <strong style={{ ...styles.statVal, color: '#f97316' }}>45</strong>
            </div>
            <div style={{ ...styles.statIconWrap, background: '#fff7ed', color: '#f97316' }}>
              <AlertTriangle size={20} />
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLeft}>
              <span style={styles.statTitle}>Chờ ký</span>
              <strong style={styles.statVal}>82</strong>
            </div>
            <div style={{ ...styles.statIconWrap, background: '#f5f3ff', color: '#8b5cf6' }}>
              <PenTool size={20} />
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLeft}>
              <span style={styles.statTitle}>Chờ duyệt</span>
              <strong style={styles.statVal}>12</strong>
            </div>
            <div style={{ ...styles.statIconWrap, background: '#fffbeb', color: '#f59e0b' }}>
              <Sparkles size={20} />
            </div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLeft}>
              <span style={styles.statTitle}>Đã hết hạn</span>
              <strong style={{ ...styles.statVal, color: '#ef4444' }}>7</strong>
            </div>
            <div style={{ ...styles.statIconWrap, background: '#fef2f2', color: '#ef4444' }}>
              <AlertTriangle size={20} />
            </div>
          </div>
        </section>

        {/* Filters and List */}
        <section style={styles.filterPanel}>
          <div style={{ ...styles.filterInput, width: '280px' }}>
            <Search size={18} color="#94a3b8" />
            <input placeholder="Số hợp đồng, tên..." style={{ border: 0, outline: 0, flex: 1, fontSize: 14 }} />
          </div>
          <button style={styles.selectBox}>Phòng ban <ChevronDown size={16} color="#94a3b8" /></button>
          <button style={styles.selectBox}>Loại hợp đồng <ChevronDown size={16} color="#94a3b8" /></button>
          <div style={{ position: 'relative', width: 170, height: 44, display: 'flex', alignItems: 'center' }}>
            <input type="text" readOnly placeholder="mm/dd/yyyy" style={{ ...styles.filterDate, width: '100%' }} />
            <Calendar size={16} color="#94a3b8" style={{ position: 'absolute', right: 14, pointerEvents: 'none' }} />
          </div>
          <div style={{ position: 'relative', width: 170, height: 44, display: 'flex', alignItems: 'center' }}>
            <input type="text" readOnly placeholder="mm/dd/yyyy" style={{ ...styles.filterDate, width: '100%' }} />
            <Calendar size={16} color="#94a3b8" style={{ position: 'absolute', right: 14, pointerEvents: 'none' }} />
          </div>
        </section>

        {/* Quick Filter tags */}
        <div style={styles.quickFilters}>
          <span>LỌC NHANH:</span>
          {['Tất cả', 'Chính thức', 'Thử việc', 'Cộng tác viên', 'Đã kết thúc'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuickFilter(tag)}
              style={{
                ...styles.quickFilterBtn,
                ...(quickFilter === tag ? styles.quickFilterBtnActive : {})
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Table list */}
        <section style={styles.tableCard}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, width: '50px', textAlign: 'center' }}><span style={{ width: 18, height: 18, border: '1px solid #cbd8e6', borderRadius: 5, display: 'inline-block' }} /></th>
                <th style={styles.th}>Số hợp đồng</th>
                <th style={styles.th}>Nhân viên</th>
                <th style={styles.th}>Phòng ban / Vị trí</th>
                <th style={styles.th}>Loại HĐ</th>
                <th style={styles.th}>Ngày hiệu lực</th>
                <th style={styles.th}>Ngày hết hạn</th>
                <th style={styles.th}>Còn lại</th>
                <th style={styles.th}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {initialContracts
                .filter(c => quickFilter === 'Tất cả' || c.type === quickFilter || (quickFilter === 'Đã kết thúc' && c.status === 'Đã kết thúc'))
                .map((contract) => (
                  <tr 
                    key={contract.id} 
                    style={{ borderTop: '1px solid #edf2f7', cursor: 'pointer' }}
                    onClick={() => handleRowClick(contract)}
                  >
                    <td style={{ ...styles.td, textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                      <span style={{ width: 18, height: 18, border: '1px solid #cbd8e6', borderRadius: 5, display: 'inline-block' }} />
                    </td>
                    <td style={styles.td}>
                      <span style={{ fontWeight: '700', color: '#00796b', display: 'block' }}>{contract.id}</span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>{contract.subId}</span>
                    </td>
                    <td style={styles.td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ ...styles.avatar, background: contract.avatarBg, color: contract.avatarColor }}>{contract.avatarInit}</span>
                        <div style={{ textAlign: 'left' }}>
                          <strong style={{ display: 'block', color: '#1e293b' }}>{contract.empName}</strong>
                          <span style={{ fontSize: '11px', color: '#64748b' }}>{contract.empCode}</span>
                        </div>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <span style={{ display: 'block', color: '#334155', fontWeight: '500' }}>{contract.dept}</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{contract.role}</span>
                    </td>
                    <td style={styles.td}>{contract.type}</td>
                    <td style={styles.td}>{contract.start}</td>
                    <td style={styles.td}>{contract.end}</td>
                    <td style={styles.td}>
                      <strong style={{ color: contract.remaining === '12 ngày' ? '#ef4444' : '#475569' }}>
                        {contract.remaining}
                      </strong>
                    </td>
                    <td style={styles.td}>
                      <StatusBadge status={contract.status} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div style={{ minHeight: 60, borderTop: '1px solid #d7e2ed', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between', color: '#64748b', fontSize: '13px' }}>
            <span>Trang 1 trên 3</span>
            <span>Hiển thị 10 dòng</span>
          </div>
        </section>
      </main>

      {/* Drawer: Chỉnh sửa hợp đồng */}
      {editDrawerOpen && selectedContract && (
        <div style={styles.drawerLayer}>
          <div style={styles.drawerScrim} onClick={() => setEditDrawerOpen(false)} />
          <div style={styles.drawer}>
            <div style={styles.drawerHeader}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={styles.drawerTitle}>Chỉnh sửa hợp đồng</h3>
                  <span style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '800' }}>EDITING</span>
                </div>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '13px' }}>Cập nhật thông tin chi tiết cho HĐLĐ-{contractNumber}</p>
              </div>
              <button style={{ border: 0, background: 'transparent', cursor: 'pointer', color: '#94a3b8' }} onClick={() => setEditDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div style={styles.drawerBody}>
              {/* Thông tin chung */}
              <div style={styles.formSection}>
                <div style={styles.sectionHeader}>Thông tin chung</div>
                
                <label style={styles.formField}>
                  <span>LOẠI HỢP ĐỒNG</span>
                  <div style={styles.inputWrap}>
                    <select 
                      value={contractType} 
                      onChange={(e) => setContractType(e.target.value)} 
                      style={{ ...styles.inputField, appearance: 'none', border: 0, outline: 0 }}
                    >
                      <option value="Chính thức">Chính thức</option>
                      <option value="Thử việc">Thử việc</option>
                      <option value="Cộng tác viên">Cộng tác viên</option>
                    </select>
                    <ChevronDown size={16} color="#94a3b8" style={{ position: 'absolute', right: '12px' }} />
                  </div>
                </label>

                <label style={styles.formField}>
                  <span>SỐ HỢP ĐỒNG</span>
                  <div style={styles.inputWrap}>
                    <input value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} style={styles.inputField} />
                  </div>
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <label style={styles.formField}>
                    <span>NGÀY BẮT ĐẦU</span>
                    <div style={{ ...styles.inputWrap, cursor: 'pointer' }}>
                      <input 
                        type="text" 
                        readOnly 
                        value={formatDate(startDate)} 
                        style={{ ...styles.inputField, cursor: 'pointer' }} 
                        placeholder="Chọn ngày"
                      />
                      <Calendar size={16} color="#94a3b8" style={{ pointerEvents: 'none' }} />
                      <input 
                        type="date" 
                        value={toISODate(startDate)} 
                        onChange={(e) => setStartDate(formatDate(e.target.value))} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} 
                      />
                    </div>
                  </label>
                  <label style={styles.formField}>
                    <span>NGÀY KẾT THÚC</span>
                    <div style={{ ...styles.inputWrap, cursor: 'pointer' }}>
                      <input 
                        type="text" 
                        readOnly 
                        value={formatDate(endDate)} 
                        style={{ ...styles.inputField, cursor: 'pointer' }} 
                        placeholder="Chọn ngày"
                      />
                      <Calendar size={16} color="#94a3b8" style={{ pointerEvents: 'none' }} />
                      <input 
                        type="date" 
                        value={toISODate(endDate)} 
                        onChange={(e) => setEndDate(formatDate(e.target.value))} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} 
                      />
                    </div>
                  </label>
                </div>

                <label style={styles.formField}>
                  <span>NGÀY KÝ</span>
                  <div style={{ ...styles.inputWrap, cursor: 'pointer' }}>
                    <input 
                      type="text" 
                      readOnly 
                      value={formatDate(signDate)} 
                      style={{ ...styles.inputField, cursor: 'pointer' }} 
                      placeholder="Chọn ngày"
                    />
                    <Calendar size={16} color="#94a3b8" style={{ pointerEvents: 'none' }} />
                    <input 
                      type="date" 
                      value={toISODate(signDate)} 
                      onChange={(e) => setSignDate(formatDate(e.target.value))} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} 
                    />
                  </div>
                </label>
              </div>

              {/* Lương & Thanh toán */}
              <div style={styles.formSection}>
                <div style={styles.sectionHeader}>Lương & Thanh toán</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <label style={styles.formField}>
                    <span>LƯƠNG CƠ BẢN</span>
                    <div style={styles.inputWrap}>
                      <input value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} style={styles.inputField} />
                      <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>VND</span>
                    </div>
                  </label>
                  <label style={styles.formField}>
                    <span>PHỤ CẤP</span>
                    <div style={styles.inputWrap}>
                      <input value={allowance} onChange={(e) => setAllowance(e.target.value)} style={styles.inputField} />
                      <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>VND</span>
                    </div>
                  </label>
                </div>

                <label style={styles.formField}>
                  <span>HÌNH THỨC TRẢ LƯƠNG</span>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '4px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                      <input 
                        type="radio" 
                        name="payMethod" 
                        value="Chuyển khoản" 
                        checked={payMethod === 'Chuyển khoản'} 
                        onChange={() => setPayMethod('Chuyển khoản')} 
                        style={{ width: '16px', height: '16px', accentColor: '#00796b' }} 
                      />
                      Chuyển khoản
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                      <input 
                        type="radio" 
                        name="payMethod" 
                        value="Tiền mặt" 
                        checked={payMethod === 'Tiền mặt'} 
                        onChange={() => setPayMethod('Tiền mặt')} 
                        style={{ width: '16px', height: '16px', accentColor: '#00796b' }} 
                      />
                      Tiền mặt
                    </label>
                  </div>
                </label>
              </div>

              {/* Điều khoản & Ghi chú */}
              <div style={styles.formSection}>
                <div style={styles.sectionHeader}>Điều khoản & Ghi chú</div>
                <label style={styles.formField}>
                  <span>ĐIỀU KHOẢN & GHI CHÚ</span>
                  <textarea 
                    value={terms} 
                    onChange={(e) => setTerms(e.target.value)} 
                    style={{ ...styles.inputField, border: '1px solid #cfdbe8', borderRadius: '6px', height: '80px', padding: '10px', resize: 'none', background: '#fff' }} 
                  />
                </label>
              </div>

              {/* Tài liệu đính kèm */}
              <div style={styles.formSection}>
                <div style={styles.sectionHeader}>Tài liệu đính kèm</div>
                
                {/* File Attachment Card */}
                <div style={{ border: '1px solid #cfdbe8', borderRadius: '6px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#ef4444', fontWeight: '900', fontSize: '12px', border: '1px solid #fecaca', padding: '4px 6px', borderRadius: '4px', background: '#fee2e2' }}>PDF</span>
                    <div style={{ textAlign: 'left' }}>
                      <strong style={{ fontSize: '13px', color: '#334155', display: 'block' }}>HDLD_NguyenVanAn_2024.pdf</strong>
                      <span style={{ fontSize: '11px', color: '#64748b' }}>2.4 MB • ĐÃ TẢI LÊN</span>
                    </div>
                  </div>
                  <button style={{ border: 'none', background: 'transparent', color: '#ef4444', cursor: 'pointer' }}>
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Upload Zone */}
                <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '24px', textAlign: 'center', background: '#fff', cursor: 'pointer' }}>
                  <div style={{ color: '#10b981', display: 'grid', placeItems: 'center', marginBottom: '8px' }}>
                    <Upload size={24} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>Kéo thả hoặc nhấn để tải tệp lên</span>
                  <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Hỗ trợ PDF, DOCX, JPG (Max 10MB)</span>
                </div>
              </div>
            </div>

            <div style={styles.drawerFooter}>
              <button 
                style={{ ...styles.secondaryButton, minHeight: '40px', padding: '0 20px' }} 
                onClick={() => setEditDrawerOpen(false)}
              >
                Hủy bỏ
              </button>
              <button 
                style={{ ...styles.primaryButton, minHeight: '40px', padding: '0 20px' }} 
                onClick={() => setEditDrawerOpen(false)}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contracts;
