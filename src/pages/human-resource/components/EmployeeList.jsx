import React, { useState } from 'react';
import {
  AlertTriangle,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  Printer,
  RefreshCw,
  Search,
  Upload,
  UserPlus,
  Users,
} from 'lucide-react';
import StatCard from './StatCard';
import EmployeeRow from './EmployeeRow';

const statusTabs = ['Tất cả', 'Đang làm', 'Thử việc', 'Nghỉ phép', 'Tạm đình chỉ', 'Đã nghỉ', 'Không hoạt động'];

const styles = {
  main: { padding: '26px 34px 104px', maxWidth: 1680, margin: '0 auto' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 7, color: '#718198', fontSize: 14, marginBottom: 12 },
  listHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 22, marginBottom: 22 },
  pageTitle: { margin: 0, fontSize: 30, lineHeight: 1.15, fontWeight: 700, color: '#334155' },
  pageDesc: { margin: '8px 0 0', fontSize: 15, color: '#718198' },
  headerActions: { display: 'flex', gap: 14, alignItems: 'center' },
  primaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 42, border: 0, borderRadius: 7, padding: '0 18px', background: '#00796b', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 40, border: '1px solid #cfdbe8', borderRadius: 7, padding: '0 16px', background: '#fff', color: '#475569', fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  squareButton: { width: 40, height: 40, border: '1px solid #cfdbe8', borderRadius: 7, background: '#fff', color: '#475569', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginBottom: 26 },
  toolbar: { marginBottom: 26 },
  actionRow: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 },
  selectionText: { marginLeft: 'auto', color: '#718198', fontSize: 14 },
  statusTabs: { display: 'flex', gap: 10, marginBottom: 20, overflowX: 'auto' },
  statusTab: { border: '1px solid #d7e2ed', background: '#fff', color: '#475569', borderRadius: 999, padding: '10px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' },
  statusActive: { background: '#00796b', borderColor: '#00796b', color: '#fff' },
  filterPanel: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 9, padding: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 },
  filterInput: { width: 330, height: 44, border: '1px solid #cfdbe8', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px' },
  filterDate: { width: 170, height: 44, border: '1px solid #cfdbe8', borderRadius: 6, padding: '0 14px', fontSize: 14, outline: 'none', cursor: 'pointer' },
  dash: { color: '#718198', fontWeight: 600 },
  selectBox: { height: 44, minWidth: 170, border: '1px solid #cfdbe8', borderRadius: 6, background: '#fff', color: '#475569', padding: '0 14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, fontSize: 14, cursor: 'pointer' },
  linkButton: { border: 0, background: 'transparent', color: '#00796b', fontWeight: 700, fontSize: 14, cursor: 'pointer' },
  tableCard: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 9, overflow: 'hidden', boxShadow: '0 1px 4px rgba(15,23,42,.05)' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 14 },
  tableHead: { padding: '15px 14px', background: '#f8fafc', color: '#64748b', textTransform: 'uppercase', letterSpacing: .6, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', border: 0 },
  checkCol: { width: 54, textAlign: 'center' },
  checkbox: { width: 18, height: 18, display: 'inline-block', border: '1px solid #cbd8e6', borderRadius: 5, background: '#fff' },
  tableFooter: { minHeight: 60, borderTop: '1px solid #d7e2ed', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', color: '#64748b', fontSize: 14 },
  footerControls: { display: 'flex', alignItems: 'center', gap: 12 },
  pageSize: { height: 36, border: '1px solid #cfdbe8', borderRadius: 6, background: '#fff', padding: '0 12px', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, cursor: 'pointer' },
  pagerButton: { height: 36, border: '1px solid #cfdbe8', borderRadius: 6, background: '#fff', padding: '0 16px', color: '#64748b', fontWeight: 600, cursor: 'pointer' },
};

const TableHead = ({ children, align = 'left' }) => <th style={{ ...styles.tableHead, textAlign: align }}>{children}</th>;

const SelectBox = ({ label }) => <button style={styles.selectBox}>{label}<ChevronDown size={17} /></button>;

const EmployeeList = ({
  activeStatus,
  filteredEmployees,
  onCreate,
  onImport,
  onSelect,
  searchTerm,
  setActiveStatus,
  setSearchTerm,
  totalCount,
  workingCount,
  trialCount,
}) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFromDate('');
    setToDate('');
  };

  return (
  <main style={styles.main}>
    <div style={styles.breadcrumb}>Nhân sự lõi <span>›</span> <strong>Danh sách nhân viên</strong></div>
    <section style={styles.listHeader}>
      <div>
        <h1 style={styles.pageTitle}>Danh sách nhân viên</h1>
        <p style={styles.pageDesc}>Quản lý hồ sơ, trạng thái và lịch sử công tác của toàn bộ nhân sự.</p>
      </div>
      <div style={styles.headerActions}>
        <button style={styles.secondaryButton} onClick={onImport}><Upload size={18} /> Nhập dữ liệu</button>
        <button style={styles.primaryButton} onClick={onCreate}><UserPlus size={18} /> Thêm nhân viên</button>
      </div>
    </section>

    <section style={styles.statsGrid}>
      <StatCard title="TỔNG NHÂN VIÊN" value={String(totalCount)} icon={Users} />
      <StatCard title="ĐANG LÀM VIỆC" value={String(workingCount)} color="#4ab51f" icon={CheckCircle2} />
      <StatCard title="THỬ VIỆC" value={String(trialCount)} color="#f59e0b" icon={BriefcaseBusiness} />
      <StatCard title="SẮP HẾT HỢP ĐỒNG" value="6" color="#f97316" icon={FileText} />
      <StatCard title="HỒ SƠ THIẾU" value="10" color="#ef4444" icon={AlertTriangle} />
    </section>

    <section style={styles.toolbar}>
      <div style={styles.filterPanel}>
        <div style={styles.filterInput}>
          <Search size={18} color="#94a3b8" />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Tìm theo tên, mã NV, email..."
            style={{ border: 0, outline: 0, flex: 1, fontSize: 14, background: 'transparent' }}
          />
        </div>
        <div style={{ position: 'relative', width: 220, height: 44, display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            readOnly
            value={fromDate && toDate ? `${formatDate(fromDate)} - ${formatDate(toDate)}` : ''}
            placeholder="mm/dd/yyyy  -  mm/dd/yyyy"
            style={{ ...styles.filterDate, width: '100%', height: '100%', boxSizing: 'border-box', paddingRight: '40px', fontWeight: '500', color: '#64748b' }}
          />
          <Calendar 
            size={16} 
            color="#94a3b8" 
            style={{ position: 'absolute', right: 14, pointerEvents: 'none', zIndex: 1 }} 
          />
          {/* We keep simplified overlay date inputs to let user select */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, display: 'flex', zIndex: 2 }}>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              style={{ width: '50%', height: '100%', cursor: 'pointer' }}
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={{ width: '50%', height: '100%', cursor: 'pointer' }}
            />
          </div>
        </div>
        <SelectBox label="Bộ phận" />
        <SelectBox label="Chức vụ" />
        <button style={styles.linkButton} onClick={handleClearFilters}>Xóa lọc</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['Tất cả', 'Đang làm việc', 'Thử việc', 'Nghỉ phép', 'Tạm đình chỉ', 'Đã nghỉ'].map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status === 'Đang làm việc' ? 'Đang làm' : status)}
              style={{ 
                ...styles.statusTab, 
                padding: '8px 16px',
                fontSize: '13px',
                border: '1px solid #e2e8f0',
                ...( (activeStatus === status || (activeStatus === 'Đang làm' && status === 'Đang làm việc')) ? { background: '#00796b', color: '#fff', borderColor: '#00796b' } : {} )
              }}
            >
              {status}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }} title="Xuất dữ liệu"><Download size={20} /></button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }} title="In danh sách"><Printer size={20} /></button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }} title="Làm mới"><RefreshCw size={18} /></button>
          <div style={{ width: '1px', height: '16px', background: '#e2e8f0' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}>
            <span>Sắp xếp:</span>
            <span style={{ color: '#00796b' }}>Mới nhất</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
    </section>

    <section style={styles.tableCard}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.checkCol}><span style={styles.checkbox} /></th>
            <TableHead>Họ và tên</TableHead>
            <TableHead>Bộ phận</TableHead>
            <TableHead>Mã NV</TableHead>
            <TableHead>Chức vụ</TableHead>
            <TableHead>Ngày vào</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead align="right">Thao tác</TableHead>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee} onSelect={onSelect} />
          ))}
        </tbody>
      </table>
      <div style={{ ...styles.tableFooter, padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Hiển thị <b>{filteredEmployees.length}</b> trên <b>{totalCount}</b> kết quả</span>
          <div style={{ width: '1px', height: '16px', background: '#cbd5e1' }}></div>
          <button style={{ ...styles.pageSize, border: '1px solid #cbd5e1', borderRadius: '6px', padding: '4px 10px', height: 'auto', fontSize: '13px', fontWeight: '700' }}>
            10 dòng <ChevronDown size={14} />
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button style={{ border: '1px solid #cbd5e1', background: '#fff', borderRadius: '6px', width: '32px', height: '32px', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
            &lt;
          </button>
          <button style={{ border: 'none', background: '#00796b', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', fontWeight: '700', cursor: 'pointer' }}>
            1
          </button>
          <button style={{ border: 'none', background: 'transparent', color: '#475569', borderRadius: '50%', width: '32px', height: '32px', fontWeight: '600', cursor: 'pointer' }}>
            2
          </button>
          <button style={{ border: 'none', background: 'transparent', color: '#475569', borderRadius: '50%', width: '32px', height: '32px', fontWeight: '600', cursor: 'pointer' }}>
            3
          </button>
          <span style={{ padding: '0 4px', color: '#64748b' }}>...</span>
          <button style={{ border: 'none', background: 'transparent', color: '#475569', borderRadius: '50%', width: '32px', height: '32px', fontWeight: '600', cursor: 'pointer' }}>
            12
          </button>
          <button style={{ border: '1px solid #cbd5e1', background: '#fff', borderRadius: '6px', width: '32px', height: '32px', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  </main>
  );
};

export default EmployeeList;
