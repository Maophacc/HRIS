import React, { useState, useMemo } from 'react';
import {
  BadgeCheck,
  Building,
  Building2,
  MoreHorizontal,
  Network,
  Plus,
  Search,
  Users,
} from 'lucide-react';
import TopNavbar from '../../components/layout/TopNavbar';
import OrganizationDrawer from './components/OrganizationDrawer';

const initialRows = [
  // Pháp nhân (Công ty)
  { name: 'Công ty Cổ phần Công nghệ Sao Việt', code: 'SV-HQ', taxCode: '0312456789', type: 'Pháp nhân', manager: 'Nguyen Duc Long', address: 'Tòa nhà Saigon Centre, 65 Lê Lợi, Bến Nghé, Quận 1, TP. HCM', status: 'Đang hoạt động' },
  
  // Dự án (Chi nhánh)
  { name: 'Chi nhánh Hà Nội', code: 'CN-HN', type: 'Dự án', manager: 'Le Van Cuong', members: 18, status: 'Đang hoạt động', phone: '024 1234 5678', date: '2025-01-10' },
  { name: 'Chi nhánh Đà Nẵng', code: 'CN-DN', type: 'Dự án', manager: 'Nguyen Van An', members: 12, status: 'Đang hoạt động', phone: '023 1234 5678', date: '2025-02-15' },
  { name: 'Chi nhánh Hồ Chí Minh', code: 'CN-HCM', type: 'Dự án', manager: 'Pham Minh Duc', members: 8, status: 'Đang hoạt động', phone: '028 1234 5678', date: '2025-03-01' },
  { name: 'Chi nhánh Bình Dương', code: 'CN-BD', type: 'Dự án', manager: 'Dinh Thi Thanh', members: 4, status: 'Đang hoạt động', phone: '027 1234 5678', date: '2025-04-20' },
  
  // Phòng ban
  { name: 'Phòng Nhân sự', code: 'HR', type: 'Phòng ban', manager: 'Tran Thi Bich', members: 6, status: 'Đang hoạt động' },
  { name: 'Phòng Kinh doanh', code: 'SALES', type: 'Phòng ban', manager: 'Pham Minh Anh', members: 12, status: 'Đang hoạt động' },
  { name: 'Phòng Kỹ thuật', code: 'TECH', type: 'Phòng ban', manager: 'Le Van Cuong', members: 18, status: 'Đang hoạt động' },
  { name: 'Phòng Kế toán', code: 'ACC', type: 'Phòng ban', manager: 'Hoang Van Kien', members: 6, status: 'Đang hoạt động' },
  { name: 'Phòng Marketing', code: 'MKT', type: 'Phòng ban', manager: 'Le Thi Huong', members: 9, status: 'Đang hoạt động' },
  { name: 'Phòng Chăm sóc khách hàng', code: 'CS', type: 'Phòng ban', manager: 'Nguyen Van An', members: 5, status: 'Đang hoạt động' },
  { name: 'Phòng R&D', code: 'RD', type: 'Phòng ban', manager: 'Pham Minh Duc', members: 10, status: 'Đang hoạt động' },
  { name: 'Phòng Mua hàng', code: 'PUR', type: 'Phòng ban', manager: 'Hoang Van Kien', members: 3, status: 'Đang hoạt động' },
  { name: 'Phòng Pháp chế', code: 'LEGAL', type: 'Phòng ban', manager: 'Bui Thi Ngan', members: 2, status: 'Đang hoạt động' },
  { name: 'Phòng Vận hành', code: 'OPS', type: 'Phòng ban', manager: 'Dinh Thi Thanh', members: 15, status: 'Đang hoạt động' },
  
  // Chức danh
  { name: 'Giám đốc', code: 'DIR', type: 'Chức danh', manager: '-', members: 1, status: 'Đang hoạt động' },
  { name: 'Trưởng phòng', code: 'MGR', type: 'Chức danh', manager: '-', members: 5, status: 'Đang hoạt động' },
  { name: 'Phó phòng', code: 'DMGR', type: 'Chức danh', manager: '-', members: 3, status: 'Đang hoạt động' },
  { name: 'Chuyên viên', code: 'SPEC', type: 'Chức danh', manager: '-', members: 20, status: 'Đang hoạt động' },
  { name: 'Nhân viên', code: 'EMP', type: 'Chức danh', manager: '-', members: 13, status: 'Đang hoạt động' },
  { name: 'Trợ lý', code: 'ASST', type: 'Chức danh', manager: '-', members: 2, status: 'Đang hoạt động' },
  { name: 'Senior Developer', code: 'SR-DEV', type: 'Chức danh', manager: '-', members: 4, status: 'Đang hoạt động' },
  { name: 'Junior Developer', code: 'JR-DEV', type: 'Chức danh', manager: '-', members: 6, status: 'Đang hoạt động' },
  { name: 'QA Engineer', code: 'QA', type: 'Chức danh', manager: '-', members: 3, status: 'Đang hoạt động' },
  { name: 'Designer', code: 'DSGR', type: 'Chức danh', manager: '-', members: 2, status: 'Đang hoạt động' },
  { name: 'Account Manager', code: 'AM', type: 'Chức danh', manager: '-', members: 4, status: 'Đang hoạt động' },
  { name: 'HR Executive', code: 'HRE', type: 'Chức danh', manager: '-', members: 2, status: 'Đang hoạt động' },
  { name: 'Recruiter', code: 'REC', type: 'Chức danh', manager: '-', members: 2, status: 'Đang hoạt động' },
  { name: 'Content Writer', code: 'CW', type: 'Chức danh', manager: '-', members: 1, status: 'Đang hoạt động' },
  { name: 'Data Analyst', code: 'DA', type: 'Chức danh', manager: '-', members: 2, status: 'Đang hoạt động' },
  { name: 'System Admin', code: 'SA', type: 'Chức danh', manager: '-', members: 1, status: 'Đang hoạt động' },
  { name: 'Kế toán trưởng', code: 'CACC', type: 'Chức danh', manager: '-', members: 1, status: 'Đang hoạt động' },
  { name: 'Thủ quỹ', code: 'TREAS', type: 'Chức danh', manager: '-', members: 1, status: 'Đang hoạt động' },
];

const Organization = () => {
  const [activeTab, setActiveTab] = useState('Công ty');
  const [rows, setRows] = useState(initialRows);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState('pháp nhân');

  const stats = useMemo(() => {
    return {
      legal: rows.filter((r) => r.type === 'Pháp nhân').length,
      project: rows.filter((r) => r.type === 'Dự án').length,
      dept: rows.filter((r) => r.type === 'Phòng ban').length,
      title: rows.filter((r) => r.type === 'Chức danh').length,
    };
  }, [rows]);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const targetType = activeTab === 'Công ty' ? 'Pháp nhân' : activeTab === 'Chi nhánh' ? 'Dự án' : activeTab;
      const matchTab = row.type === targetType;
      const matchSearch =
        !searchTerm.trim() ||
        row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (row.manager && row.manager.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchTab && matchSearch;
    });
  }, [rows, activeTab, searchTerm]);

  const handleOpenDrawer = (type) => {
    setDrawerType(type);
    setIsDropdownOpen(false);
    setIsDrawerOpen(true);
  };

  const handleSaveItem = (newItem) => {
    setRows((prev) => [newItem, ...prev]);
  };

  return (
    <div style={styles.page}>
      <TopNavbar activeTab="Tổ chức" />
      <main style={styles.main}>
        <section style={styles.titleRow}>
          <div>
            <h1 style={styles.title}>Cơ cấu tổ chức</h1>
            <p style={styles.subtitle}>Quản lý pháp nhân, chi nhánh, phòng ban, chức danh và sơ đồ tổ chức của GREENSPEED</p>
          </div>
          <div style={{ position: 'relative' }}>
            <button style={styles.primaryButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Plus size={16} /> Thêm đơn vị
            </button>
            {isDropdownOpen && (
              <>
                <div
                  style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }}
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div style={styles.dropdownMenu}>
                  <button className="dropdown-item-hover" style={styles.dropdownItem} onClick={() => handleOpenDrawer('dự án')}>
                    <Building size={15} color="#0f766e" /> Thêm bộ phận
                  </button>
                  <button className="dropdown-item-hover" style={styles.dropdownItem} onClick={() => handleOpenDrawer('phòng ban')}>
                    <Users size={15} color="#0f766e" /> Thêm phòng ban
                  </button>
                  <button className="dropdown-item-hover" style={styles.dropdownItem} onClick={() => handleOpenDrawer('chức danh')}>
                    <BadgeCheck size={15} color="#0f766e" /> Thêm chức danh
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        <section style={styles.statsGrid}>
          <StatCard title="Pháp nhân" value={String(stats.legal)} icon={Building2} />
          <StatCard title="Chi nhánh" value={String(stats.project)} icon={Building} />
          <StatCard title="Phòng ban" value={String(stats.dept)} icon={Users} />
          <StatCard title="Chức danh" value={String(stats.title)} icon={BadgeCheck} />
        </section>

        <section style={styles.tabs}>
          {['Công ty', 'Chi nhánh', 'Phòng ban', 'Chức danh', 'Sơ đồ tổ chức'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearchTerm('');
              }}
              style={{ ...styles.tab, ...(activeTab === tab ? styles.tabActive : {}) }}
            >
              {tab === 'Sơ đồ tổ chức' && <Network size={16} />}
              {tab}
            </button>
          ))}
        </section>

        <section style={styles.card}>
          <div style={styles.tableHeader}>
            <h2 style={styles.tableTitle}>
              {activeTab === 'Sơ đồ tổ chức' ? 'Sơ đồ tổ chức' : activeTab === 'Công ty' ? 'Thông tin pháp nhân' : `Danh sách ${activeTab.toLowerCase()}`}
            </h2>
            {activeTab !== 'Sơ đồ tổ chức' && (
              <div style={styles.localSearch}>
                <Search size={14} color="#94a3b8" style={styles.searchIcon} />
                <input
                  placeholder="Tìm kiếm..."
                  style={styles.localSearchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
          </div>

          {activeTab === 'Sơ đồ tổ chức' ? (
            <div style={styles.chart}>
              <OrgNode name="Nguyen Duc Long" role="Giám đốc" count="42" />
              <div style={styles.chartLine} />
              <div style={styles.chartChildren}>
                <OrgNode name="Tran Thi Bich" role="Trưởng phòng HR" count="6" />
                <OrgNode name="Le Van Cuong" role="Trưởng phòng IT" count="18" />
                <OrgNode name="Pham Minh Anh" role="Trưởng phòng Sales" count="12" />
              </div>
            </div>
          ) : (
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  {activeTab === 'Công ty' ? (
                    <tr>
                      <Th>Tên công ty</Th>
                      <Th>Mã số thuế</Th>
                      <Th>Đại diện pháp luật</Th>
                      <Th>Địa chỉ</Th>
                      <Th>Trạng thái</Th>
                      <Th align="right">Thao tác</Th>
                    </tr>
                  ) : activeTab === 'Chi nhánh' ? (
                    <tr>
                      <Th>Tên chi nhánh</Th>
                      <Th>Mã chi nhánh</Th>
                      <Th>Quản trị viên</Th>
                      <Th>Số điện thoại</Th>
                      <Th>Ngày kích hoạt</Th>
                      <Th>Trạng thái</Th>
                      <Th align="right">Thao tác</Th>
                    </tr>
                  ) : activeTab === 'Phòng ban' ? (
                    <tr>
                      <Th>Tên phòng ban</Th>
                      <Th>Mã phòng ban</Th>
                      <Th>Trưởng phòng</Th>
                      <Th>Nhân sự</Th>
                      <Th>Trạng thái</Th>
                      <Th align="right">Thao tác</Th>
                    </tr>
                  ) : (
                    <tr>
                      <Th>Tên chức danh</Th>
                      <Th>Mã chức danh</Th>
                      <Th>Số lượng</Th>
                      <Th>Trạng thái</Th>
                      <Th align="right">Thao tác</Th>
                    </tr>
                  )}
                </thead>
                <tbody>
                  {filteredRows.map((row) => {
                    const initials = row.manager && row.manager !== '-' 
                      ? row.manager.split(' ').slice(-2).map((w) => w[0]).join('').toUpperCase() 
                      : '—';
                      
                    return (
                      <tr key={row.code + row.type} style={styles.tr}>
                        {activeTab === 'Công ty' ? (
                          <>
                            <td style={styles.tdStrong}>
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontWeight: 600 }}>{row.name}</span>
                                <span style={{ fontSize: 12, color: '#64748b', fontWeight: 400, marginTop: 4 }}>Trụ sở chính</span>
                              </div>
                            </td>
                            <td style={styles.td}>{row.taxCode || '0312456789'}</td>
                            <td style={styles.td}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 11 }}>
                                  {initials}
                                </div>
                                <span>{row.manager}</span>
                              </div>
                            </td>
                            <td style={styles.td}>{row.address}</td>
                          </>
                        ) : activeTab === 'Chi nhánh' ? (
                          <>
                            <td style={styles.tdStrong}>{row.name}</td>
                            <td style={styles.tdMuted}>{row.code}</td>
                            <td style={styles.td}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 11 }}>
                                  {initials}
                                </div>
                                <span>{row.manager}</span>
                              </div>
                            </td>
                            <td style={styles.td}>{row.phone || '028 1234 5678'}</td>
                            <td style={styles.td}>{row.date ? new Date(row.date).toLocaleDateString('vi-VN') : '01/01/2024'}</td>
                          </>
                        ) : activeTab === 'Phòng ban' ? (
                          <>
                            <td style={styles.tdStrong}>{row.name}</td>
                            <td style={styles.tdMuted}>{row.code}</td>
                            <td style={styles.td}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 11 }}>
                                  {initials}
                                </div>
                                <span>{row.manager}</span>
                              </div>
                            </td>
                            <td style={styles.td}>{row.members}</td>
                          </>
                        ) : (
                          <>
                            <td style={styles.tdStrong}>{row.name}</td>
                            <td style={styles.tdMuted}>{row.code}</td>
                            <td style={styles.td}>{row.members}</td>
                          </>
                        )}
                        <td style={styles.td}>
                          <span style={styles.badge}>{row.status}</span>
                        </td>
                        <td style={{ ...styles.td, textAlign: 'right' }}>
                          <MoreHorizontal size={18} color="#94a3b8" style={{ cursor: 'pointer' }} />
                        </td>
                      </tr>
                    );
                  })}
                  {filteredRows.length === 0 && (
                    <tr>
                      <td colSpan={activeTab === 'Chi nhánh' ? "7" : activeTab === 'Công ty' ? "6" : activeTab === 'Phòng ban' ? "5" : "5"} style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                        Không tìm thấy kết quả phù hợp.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <OrganizationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        drawerType={drawerType}
        onSave={handleSaveItem}
      />
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon }) => (
  <article style={styles.statCard}>
    <div>
      <p style={styles.statLabel}>{title}</p>
      <strong style={styles.statValue}>{value}</strong>
    </div>
    <div style={styles.statIcon}><Icon size={21} /></div>
  </article>
);

const OrgNode = ({ name, role, count }) => (
  <div style={styles.orgNode}>
    <div style={styles.nodeCount}>{count}</div>
    <div style={styles.nodeAvatar}>{name.split(' ').slice(-2).map((part) => part[0]).join('')}</div>
    <strong style={styles.nodeName}>{name}</strong>
    <span style={styles.nodeRole}>{role}</span>
  </div>
);

const Th = ({ children, align = 'left' }) => <th style={{ ...styles.th, textAlign: align }}>{children}</th>;

const styles = {
  page: { backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Be Vietnam Pro, sans-serif', color: '#334155' },
  main: { maxWidth: 1680, margin: '0 auto', padding: '26px 34px 104px' },
  titleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 24 },
  title: { margin: '0 0 8px', fontSize: 30, fontWeight: 700, color: '#2d3748' },
  subtitle: { margin: 0, color: '#64748b', fontSize: 14 },
  primaryButton: { display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', borderRadius: 6, backgroundColor: '#0f766e', color: '#ffffff', padding: '10px 16px', fontWeight: 600, cursor: 'pointer' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(160px, 1fr))', gap: 16, marginBottom: 26 },
  statCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(15,23,42,.05)' },
  statLabel: { margin: '0 0 8px', color: '#64748b', fontSize: 12, fontWeight: 600, textTransform: 'uppercase' },
  statValue: { fontSize: 30, color: '#2d3748', fontWeight: 700 },
  statIcon: { width: 48, height: 48, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', color: '#64748b' },
  tabs: { display: 'flex', gap: 28, borderBottom: '1px solid #e2e8f0', marginBottom: 22, overflowX: 'auto' },
  tab: { display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', borderBottom: '2px solid transparent', background: 'transparent', padding: '0 0 12px', color: '#64748b', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' },
  tabActive: { color: '#0f766e', borderBottomColor: '#0f766e' },
  card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(15,23,42,.05)' },
  tableHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '16px 20px', borderBottom: '1px solid #e2e8f0' },
  tableTitle: { margin: 0, fontSize: 17, fontWeight: 700, color: '#2d3748' },
  localSearch: { position: 'relative', width: 260 },
  searchIcon: { position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' },
  localSearchInput: { width: '100%', border: '1px solid #cbd5e1', borderRadius: 6, padding: '9px 12px 9px 34px', outline: 'none' },
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', minWidth: 900, borderCollapse: 'collapse' },
  th: { padding: '14px 16px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase' },
  tr: { borderBottom: '1px solid #f1f5f9' },
  td: { padding: '15px 16px', color: '#475569', fontWeight: 500 },
  tdStrong: { padding: '15px 16px', color: '#334155', fontWeight: 600 },
  tdMuted: { padding: '15px 16px', color: '#64748b' },
  badge: { display: 'inline-flex', borderRadius: 999, padding: '5px 10px', backgroundColor: '#dcfce7', color: '#15803d', fontSize: 12, fontWeight: 600 },
  chart: { minHeight: 430, padding: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'auto' },
  chartLine: { width: 2, height: 40, backgroundColor: '#cbd5e1' },
  chartChildren: { display: 'flex', gap: 28, paddingTop: 22, borderTop: '2px solid #cbd5e1' },
  orgNode: { position: 'relative', width: 168, border: '1px solid #e2e8f0', borderRadius: 8, backgroundColor: '#ffffff', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 1px 3px rgba(15,23,42,.05)' },
  nodeCount: { position: 'absolute', top: -10, right: -10, borderRadius: 999, backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 7px', fontSize: 11, fontWeight: 600 },
  nodeAvatar: { width: 44, height: 44, borderRadius: 999, backgroundColor: '#ccfbf1', color: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: 10 },
  nodeName: { textAlign: 'center', color: '#334155', fontSize: 13 },
  nodeRole: { textAlign: 'center', color: '#64748b', fontSize: 12, marginTop: 4 },
  
  // Dropdown Styles
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: 8,
    width: 190,
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
    zIndex: 100,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 16px',
    border: 0,
    backgroundColor: 'transparent',
    color: '#475569',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    transition: 'background 0.2s',
  },
};

export default Organization;
