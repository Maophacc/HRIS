import React from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navTabs = ['Tổng quan', 'Tổ chức', 'Nhân sự', 'Vòng đời', 'Hợp đồng', 'Tài liệu', 'Tài sản', 'Báo cáo', 'Cấu hình'];
const navPaths = {
  'Tổng quan': '/overview',
  'Tổ chức': '/organization',
  'Nhân sự': '/human-resource',
  'Vòng đời': '/lifecycle',
  'Hợp đồng': '/contracts',
  'Tài liệu': '/documents',
  'Tài sản': '/assets',
  'Báo cáo': '/reports',
  'Cấu hình': '/settings',
};

const TopNavbar = ({ activeTab = 'Nhân sự' }) => {
  const navigate = useNavigate();

  return (
    <header style={styles.topNavigation}>
      <div style={styles.topBar}>
        <div style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <svg width="130" height="56" viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="28" width="16" height="16" fill="#0ea5e9" />
            <rect x="38" y="28" width="16" height="16" fill="#0ea5e9" />
            <rect x="56" y="28" width="16" height="16" fill="#4b5563" />
            <rect x="56" y="10" width="16" height="16" fill="#e11d48" />
            <rect x="56" y="46" width="16" height="16" fill="#84cc16" />
            <rect x="74" y="28" width="16" height="16" fill="#eab308" />
            <text x="100" y="44" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="42" fontWeight="900" fill="#1f2937" letterSpacing="-0.5">GRSC</text>
            <text x="18" y="88" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="26" fontWeight="700" fill="#65a30d" letterSpacing="0.5">Green Speed</text>
            <text x="20" y="104" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="9.5" fontWeight="800" fill="#4b5563" letterSpacing="0.5">HR &amp; CO-PACKING SOLUTIONS</text>
          </svg>
        </div>
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input className="search-input" placeholder="Tìm nhân viên, hợp đồng, tài liệu..." />
        </div>
        <div style={styles.profileArea}>
          <button style={styles.iconOnly}><Bell size={21} /><span style={styles.redDot} /></button>
          <div style={styles.profilePill}>
            <div style={styles.avatarGreen}>QT</div>
            <strong>Quản trị nhân sự</strong>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
      <nav style={styles.nav}>
        {navTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => navigate(navPaths[tab])}
            style={{ ...styles.navItem, ...(tab === activeTab ? styles.navActive : {}) }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

const styles = {
  topNavigation: { position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #e4ebf3' },
  topBar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '12px 24px', borderBottom: '1px solid #f1f5f9' },
  logo: { display: 'flex', alignItems: 'center', gap: 12, minWidth: 160 },
  logoGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 12px)', gap: 3, flexShrink: 0 },
  logoName: { fontSize: 18, fontWeight: 800, color: '#0f766e' },
  logoSub: { fontSize: 11, color: '#64748b', fontWeight: 600 },

  profileArea: { display: 'flex', alignItems: 'center', gap: 16, minWidth: 240 },
  iconOnly: { position: 'relative', width: 38, height: 38, border: 0, background: 'transparent', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  redDot: { position: 'absolute', top: 4, right: 4, width: 10, height: 10, borderRadius: '50%', background: '#ef4444' },
  profilePill: { display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc', border: '1px solid #e4ebf3', borderRadius: 8, padding: '8px 12px', fontWeight: 700, fontSize: 14, cursor: 'pointer' },
  avatarGreen: { width: 32, height: 32, borderRadius: '50%', background: '#ccfbf1', color: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12 },
  nav: { display: 'flex', gap: 32, padding: '0 24px', overflowX: 'auto', borderTop: '1px solid #f1f5f9' },
  navItem: { border: 0, borderBottom: '2px solid transparent', background: 'transparent', padding: '13px 0', color: '#64748b', fontWeight: 700, fontSize: 15, cursor: 'pointer', whiteSpace: 'nowrap' },
  navActive: { color: '#0f766e', borderBottomColor: '#0f766e' },
};

export default TopNavbar;
