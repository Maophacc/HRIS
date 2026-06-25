import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  BriefcaseBusiness,
  Edit3,
  IdCard,
  MoreVertical,
  Printer,
  QrCode,
  Users,
  UserCheck,
  CalendarDays,
} from 'lucide-react';
import TopNavbar from '../../components/layout/TopNavbar';
import { useAppContext } from '../../context/AppContext';
import { getEmployeeProfile, profileTabs } from '../../data/employeeProfiles';
import StatusBadge from '../../components/ui/StatusBadge';
import QuickStats from './components/QuickStats';
import GeneralTab from './components/GeneralTab';
import WorkTab from './components/WorkTab';
import SalaryTab from './components/SalaryTab';
import ContractTab from './components/ContractTab';
import InsuranceTab from './components/InsuranceTab';
import DocumentsTab from './components/DocumentsTab';
import LifecycleTab from './components/LifecycleTab';
import EditDrawer from './components/EditDrawer';
import OverviewTab from './components/OverviewTab';
import BankTab from './components/BankTab';
import AssetsTab from './components/AssetsTab';

const styles = {
  shell: { minHeight: '100vh', background: '#f6f9fc', color: '#334155', fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: 14 },
  main: { padding: '26px 34px 60px', maxWidth: 1680, margin: '0 auto' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 7, color: '#718198', fontSize: 14, marginBottom: 20 },
  backLink: { display: 'inline-flex', alignItems: 'center', gap: 6, border: 0, background: 'transparent', color: '#718198', fontSize: 14, cursor: 'pointer' },
  notFound: { textAlign: 'center', padding: '80px 20px', background: '#fff', borderRadius: 10, border: '1px solid #dde7f2' },
  profileHeader: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 12, padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, marginBottom: 20, boxShadow: '0 1px 4px rgba(15,23,42,.05)' },
  profileLeft: { display: 'flex', alignItems: 'center', gap: 22 },
  avatar: { width: 72, height: 72, borderRadius: 999, background: 'linear-gradient(135deg, #4fa819, #3f8c14)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 700 },
  nameRow: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 },
  profileName: { margin: 0, fontSize: 24, fontWeight: 800, color: '#1e293b' },
  subHeaderRow: { fontSize: '13px', color: '#64748b', marginBottom: 12, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' },
  metaRow: { display: 'flex', flexWrap: 'wrap', gap: '20px 24px', color: '#64748b', fontSize: '13px', borderTop: '1px dashed #e2e8f0', paddingTop: '12px' },
  metaItem: { display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: '500' },
  profileActions: { display: 'flex', gap: 10, alignItems: 'center' },
  primaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 40, border: 0, borderRadius: 8, padding: '0 18px', background: '#4fa819', color: '#fff', fontSize: 13, fontWeight: '700', cursor: 'pointer' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 38, border: '1px solid #cfdbe8', borderRadius: 8, padding: '0 14px', background: '#fff', color: '#475569', fontSize: 13, fontWeight: '700', cursor: 'pointer' },
  tabBar: { display: 'flex', gap: 4, borderBottom: '1px solid #dce6f0', marginBottom: 24, overflowX: 'auto' },
  tab: { border: 0, borderBottom: '2px solid transparent', background: 'transparent', color: '#64748b', padding: '12px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' },
  tabActive: { color: '#4fa819', borderBottomColor: '#4fa819' },
  tabContent: { minHeight: 400 },
};

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees } = useAppContext();
  const [activeTab, setActiveTab] = useState('Tổng quan');
  const [editOpen, setEditOpen] = useState(false);
  const [editSection, setEditSection] = useState('personal');

  const profile = useMemo(() => {
    const employee = employees.find((e) => String(e.id) === String(id));
    return getEmployeeProfile(employee);
  }, [employees, id]);

  if (!profile) {
    return (
      <div style={styles.shell}>
        <TopNavbar activeTab="Nhân sự" />
        <main style={styles.main}>
          <div style={styles.notFound}>
            <h2>Không tìm thấy nhân viên</h2>
            <p>Mã nhân viên không tồn tại hoặc đã bị xóa.</p>
            <button style={styles.primaryButton} onClick={() => navigate('/human-resource')}>
              <ArrowLeft size={18} /> Quay lại danh sách
            </button>
          </div>
        </main>
      </div>
    );
  }

  const openEdit = (section = 'personal') => {
    setEditSection(section);
    setEditOpen(true);
  };

  const initials = profile.name.split(' ').slice(-2).map((w) => w[0]).join('').toUpperCase();

  return (
    <div style={styles.shell}>
      <TopNavbar activeTab="Nhân sự" />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <button style={styles.backLink} onClick={() => navigate('/human-resource')}>
            <ArrowLeft size={18} /> Danh sách nhân viên
          </button>
          <span>›</span>
          <strong>Hồ sơ nhân viên</strong>
        </div>

        <section style={styles.profileHeader}>
          <div style={styles.profileLeft}>
            <div style={{ position: 'relative' }}>
              <div style={styles.avatar}>{initials}</div>
              <div style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#22c55e',
                border: '3px solid #fff'
              }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={styles.nameRow}>
                <h1 style={styles.profileName}>{profile.name}</h1>
                <span style={{
                  background: '#dcfce7',
                  color: '#15803d',
                  borderRadius: '12px',
                  padding: '2px 10px',
                  fontSize: '11px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                  Đang làm
                </span>
              </div>
              <div style={styles.subHeaderRow}>
                <span>{profile.code}</span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span>{profile.email}</span>
              </div>
              <div style={styles.metaRow}>
                <span style={styles.metaItem}><BriefcaseBusiness size={14} color="#94a3b8" /> {profile.position}</span>
                <span style={styles.metaItem}><Users size={14} color="#94a3b8" /> {profile.department} · {profile.branch || 'CN HCM'}</span>
                <span style={styles.metaItem}><UserCheck size={14} color="#94a3b8" /> QL: {profile.manager}</span>
                <span style={styles.metaItem}><CalendarDays size={14} color="#94a3b8" /> Vào làm: {profile.startDate}</span>
              </div>
            </div>
          </div>
          <div style={styles.profileActions}>
            <button style={styles.secondaryButton} title="In hồ sơ"><Printer size={18} /></button>
            <button style={styles.secondaryButton} title="Mã QR nhân viên"><QrCode size={18} /></button>
            <button style={styles.secondaryButton}><MoreVertical size={18} /></button>
            <button style={styles.primaryButton} onClick={() => openEdit('personal')}>
              <Edit3 size={16} /> Sửa hồ sơ
            </button>
          </div>
        </section>

        <QuickStats profile={profile} />

        <nav style={styles.tabBar}>
          {profileTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ ...styles.tab, ...(activeTab === tab ? styles.tabActive : {}) }}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div style={styles.tabContent}>
          {activeTab === 'Tổng quan' && <OverviewTab profile={profile} />}
          {activeTab === 'Cá nhân' && <GeneralTab profile={profile} onEdit={openEdit} />}
          {activeTab === 'Công việc' && <WorkTab profile={profile} onEdit={() => openEdit('work')} />}
          {activeTab === 'Hợp đồng' && <ContractTab profile={profile} onEdit={() => openEdit('contract')} />}
          {activeTab === 'Lương & Phụ cấp' && <SalaryTab profile={profile} onEdit={() => openEdit('salary')} />}
          {activeTab === 'Bảo hiểm & Thuế' && <InsuranceTab profile={profile} onEdit={() => openEdit('insurance')} />}
          {activeTab === 'Ngân hàng' && <BankTab profile={profile} onEdit={() => openEdit('bank')} />}
          {activeTab === 'Tài liệu' && <DocumentsTab profile={profile} />}
          {activeTab === 'Tài sản' && <AssetsTab profile={profile} />}
        </div>
      </main>

      {editOpen && (
        <EditDrawer
          profile={profile}
          section={editSection}
          onClose={() => setEditOpen(false)}
        />
      )}
    </div>
  );
};

export default EmployeeDetail;
