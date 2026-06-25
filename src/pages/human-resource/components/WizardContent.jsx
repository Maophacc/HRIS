import React, { useState } from 'react';
import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Check,
  FileCheck2,
  FileText,
  FolderOpen,
  IdCard,
  User,
  X,
  Trash2,
  Edit,
  Info,
  Calendar,
  UserCheck,
  RefreshCw,
  Plus
} from 'lucide-react';
import Input from '../../../components/ui/Input';
import SelectInput from '../../../components/ui/SelectInput';
import Textarea from '../../../components/ui/Textarea';
import Divider from '../../../components/ui/Divider';

const styles = {
  formGrid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 28px', padding: '24px 28px' },
  formGrid2: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 28px', padding: '24px 28px' },
  bankForm: { maxWidth: 860, margin: '0 auto', padding: '34px 0', display: 'grid', gap: 22 },
  checkLine: { display: 'flex', alignItems: 'center', gap: 10, color: '#334155', fontSize: 15, fontWeight: 800, marginTop: 18 },
  checkedBox: { width: 22, height: 22, borderRadius: 5, background: '#49ad17', color: '#fff', display: 'grid', placeItems: 'center' },
  documentHeader: { padding: '28px 30px 24px', borderBottom: '1px solid #e5edf5' },
  documentGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: 30 },
  uploadTile: { minHeight: 220, border: '2px dashed #d7e2ed', borderRadius: 9, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center', background: '#fbfdff' },
  uploadIcon: { width: 56, height: 56, borderRadius: 999, display: 'grid', placeItems: 'center' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 40, border: '1px solid #cfdbe8', borderRadius: 7, padding: '0 16px', background: '#fff', color: '#334155', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  reviewHero: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 10, padding: 28, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 },
  closeText: { border: 0, background: 'transparent', display: 'inline-flex', alignItems: 'center', gap: 6, color: '#64748b', fontWeight: 800, cursor: 'pointer' },
  reviewTitle: { fontSize: 26, margin: '0 0 8px' },
  reviewGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 26 },
  reviewCard: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 10, overflow: 'hidden' },
  reviewCardHeader: { height: 66, borderBottom: '1px solid #e5edf5', padding: '0 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  reviewItems: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, padding: 26 },
  reviewLine: { marginTop: 22, background: '#fff', border: '1px solid #dde7f2', borderRadius: 10, minHeight: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' },
  sectionTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 36 },
  emptyBox: { margin: '10px 28px 0', border: '1px dashed #cfdbe8', borderRadius: 8, minHeight: 120, display: 'grid', placeItems: 'center', textAlign: 'center', color: '#718198', fontWeight: 800 },
  linkButton: { border: 0, background: 'transparent', color: '#00796b', fontWeight: 900, fontSize: 14, cursor: 'pointer' },
  cardTitle: { minHeight: 66, borderBottom: '1px solid #e5edf5', display: 'flex', alignItems: 'center', gap: 12, padding: '0 28px' },
  sectionLabel: { margin: '24px 28px 12px', paddingBottom: 12, borderBottom: '1px solid #edf2f7', color: '#334155' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 13, marginTop: 12 },
  th: { padding: '12px 14px', background: '#f8fafc', color: '#64748b', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #cbd5e1', textAlign: 'left' },
  td: { padding: '14px', borderBottom: '1px solid #edf2f7', color: '#334155', fontSize: 13, textAlign: 'left', verticalAlign: 'middle' },
  actionBtn: { border: 0, background: 'transparent', color: '#64748b', cursor: 'pointer', padding: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
  drawerLayer: { position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' },
  drawerScrim: { position: 'absolute', inset: 0, background: 'rgba(15,23,42,.42)', backdropFilter: 'blur(4px)' },
  drawerPanel: { position: 'relative', width: 480, maxWidth: '92vw', background: '#fff', height: '100%', boxShadow: '-20px 0 44px rgba(15,23,42,.12)', display: 'flex', flexDirection: 'column', zIndex: 1001, fontFamily: 'Be Vietnam Pro, sans-serif' },
  drawerHeader: { padding: '24px 28px', borderBottom: '1px solid #e5edf5', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  drawerTitle: { margin: 0, fontSize: 18, fontWeight: '900', color: '#1e293b' },
  drawerSubtitle: { margin: '4px 0 0', color: '#64748b', fontSize: '13px', lineHeight: '1.4' },
  drawerBody: { flex: 1, overflow: 'auto', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '16px' },
  drawerFooter: { minHeight: 76, borderTop: '1px solid #e5edf5', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '0 28px', background: '#f8fafc' },
  warningCard: { display: 'flex', gap: '10px', background: '#eefcf6', border: '1px solid #c2f3dc', borderRadius: '8px', padding: '12px 16px', color: '#0f5132', fontSize: '13px', textAlign: 'left', lineHeight: '1.4' },
};

const CardTitle = ({ icon: Icon, title, subtitle, badge }) => (
  <div style={{ ...styles.cardTitle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Icon size={24} color="#94a3b8" />
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{title}</h2>
        {subtitle && <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 13 }}>{subtitle}</p>}
      </div>
    </div>
    {badge && (
      <span style={{
        background: '#eff6ff',
        color: '#1e40af',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {badge}
      </span>
    )}
  </div>
);

const SectionLabel = ({ label }) => <h3 style={styles.sectionLabel}>{label}</h3>;

const UploadTile = ({ title, desc, icon: Icon, color }) => (
  <div style={styles.uploadTile}>
    <div style={{ ...styles.uploadIcon, color, background: `${color}12` }}><Icon size={30} /></div>
    <strong>{title}</strong>
    <span style={{ fontSize: 12, color: '#64748b' }}>{desc}</span>
    <button style={styles.secondaryButton}>Chọn file</button>
  </div>
);

const ReviewCard = ({ title, items, onEdit }) => (
  <div style={styles.reviewCard}>
    <div style={styles.reviewCardHeader}>
      <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>{title}</h3>
      <button onClick={onEdit} style={{ border: 0, background: 'transparent', color: '#00796b', fontWeight: 700, cursor: 'pointer' }}>Sửa</button>
    </div>
    <div style={styles.reviewItems}>
      {items.map((item) => {
        const [label, value] = item.split('|');
        return (
          <div key={item} style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'left' }}>
            <span style={{ color: '#64748b', fontSize: 12 }}>{label}</span>
            <strong style={{ fontSize: 14 }}>{value}</strong>
          </div>
        );
      })}
    </div>
  </div>
);

const ReviewLine = ({ title, desc }) => (
  <div style={styles.reviewLine}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <FileCheck2 size={24} color="#00796b" />
      <div style={{ textAlign: 'left' }}>
        <strong style={{ fontSize: 14 }}>{title}</strong>
        <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 13 }}>{desc}</p>
      </div>
    </div>
    <Check size={24} color="#22c55e" />
  </div>
);

const WizardContent = ({ step, setStep }) => {
  // Local states for dependents and tax info
  const [dependents, setDependents] = useState([
    { id: 1, name: 'Nguyễn Thị Thanh Anh', relation: 'Con ruột', taxId: '8549321740', date: '02/05/2016' }
  ]);
  const [dependentDrawerOpen, setDependentDrawerOpen] = useState(false);
  const [depName, setDepName] = useState('');
  const [depRelation, setDepRelation] = useState('Con ruột');
  const [depIdCode, setDepIdCode] = useState('');
  const [depDob, setDepDob] = useState('');
  const [depFromDate, setDepFromDate] = useState('');
  const [depToDate, setDepToDate] = useState('');
  const [depCommit, setDepCommit] = useState(false);

  const [mstCaNhan, setMstCaNhan] = useState('8547215904');
  const [mstCongTy, setMstCongTy] = useState('0313886588');
  const [coQuanThue, setCoQuanThue] = useState('Cục Thuế TP Hồ Chí Minh');
  const [noiGiamTru, setNoiGiamTru] = useState('Công ty Green Speed');

  const handleDeleteDependent = (id) => {
    setDependents(dependents.filter(d => d.id !== id));
  };

  const handleSaveDependent = () => {
    if (!depName || !depIdCode || !depDob || !depFromDate) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc (*)');
      return;
    }
    if (!depCommit) {
      alert('Vui lòng cam kết thông tin khai báo trước khi lưu.');
      return;
    }
    const newDep = {
      id: dependents.length + 1,
      name: depName,
      relation: depRelation,
      taxId: depIdCode,
      date: depDob
    };
    setDependents([...dependents, newDep]);
    
    // Reset fields
    setDepName('');
    setDepRelation('Con ruột');
    setDepIdCode('');
    setDepDob('');
    setDepFromDate('');
    setDepToDate('');
    setDepCommit(false);
    setDependentDrawerOpen(false);
  };

  if (step === 1) {
    return (
      <>
        <CardTitle icon={User} title="Thông tin cá nhân" />
        <div style={styles.formGrid3}>
          <Input label="Họ và tên *" value="Nguyễn Minh Khôi" />
          <SelectInput label="Giới tính *" value="Nam" />
          <Input label="Ngày sinh *" value="08/12/1996" type="date" />
          <Input label="Quốc tịch" value="Việt Nam" />
          <SelectInput label="Tình trạng hôn nhân" value="Độc thân" />
          <Input label="Số điện thoại *" value="0912345678" />
        </div>
        <Divider />
        <div style={styles.formGrid2}>
          <Input label="Email cá nhân" value="khoi.nguyen@gmail.com" />
          <Input label="Số CCCD *" value="079096012345" />
          <Input label="Ngày cấp CCCD" value="05/20/2021" type="date" />
          <Input label="Nơi cấp CCCD" value="Cục Cảnh sát QLHC về TTXH" />
          <Textarea label="Địa chỉ thường trú" placeholder="Nhập địa chỉ ghi trên sổ hộ khẩu/CCCD" />
          <Textarea label="Địa chỉ tạm trú" placeholder="Nhập địa chỉ hiện tại đang sinh sống" />
        </div>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <CardTitle icon={BriefcaseBusiness} title="Thông tin công việc" />
        <div style={styles.formGrid2}>
          <Input label="Mã nhân viên *" value="SV-0031" />
          <Input label="Email công việc" placeholder="nhanvien@saoviet.com" />
          <SelectInput label="Chi nhánh" value="Chọn chi nhánh" />
          <SelectInput label="Phòng ban *" value="Chọn phòng ban" />
          <SelectInput label="Chức danh *" value="Chọn chức danh" />
          <SelectInput label="Cấp bậc" value="Chọn cấp bậc" />
          <SelectInput label="Quản lý trực tiếp" value="Chọn người quản lý" />
          <Input label="Ngày vào làm *" value="06/03/2026" type="date" />
        </div>
        <div style={styles.formGrid3}>
          <SelectInput label="Loại lao động" value="Chính thức" />
          <SelectInput label="Địa điểm làm việc" value="Văn phòng" />
          <SelectInput label="Trạng thái" value="Đang làm việc" />
        </div>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <CardTitle icon={FileText} title="Thông tin hợp đồng" />
        <div style={styles.formGrid2}>
          <SelectInput label="Loại hợp đồng *" value="Chính thức" />
          <Input label="Số hợp đồng *" value="HDLD-2026-0031" />
          <Input label="Ngày bắt đầu *" value="06/03/2026" type="date" />
          <Input label="Ngày kết thúc" value="08/02/2026" type="date" />
          <Input label="Bắt đầu thử việc" type="date" placeholder="Chọn ngày" />
          <Input label="Kết thúc thử việc" type="date" placeholder="Chọn ngày" />
        </div>
        <Divider />
        <div style={styles.formGrid2}>
          <Input label="Lương cơ bản *" value="18.000.000" suffix="VND" />
          <SelectInput label="Hình thức trả lương" value="Chuyển khoản" />
          <SelectInput label="Trạng thái hợp đồng" value="Đang hiệu lực" />
        </div>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <CardTitle icon={Building2} title="Thông tin Bảo hiểm" badge="Bắt buộc" />
        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '12px', fontWeight: '800', color: '#64748b', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', marginBottom: '4px', letterSpacing: '0.5px', textAlign: 'left' }}>
            BẢO HIỂM XÃ HỘI & Y TẾ
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 28px' }}>
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Input label="Số sổ BHXH *" placeholder="Nhập số sổ BHXH" />
              
              <div>
                <Input label="Mức lương đóng bảo hiểm *" value="15,000,000" suffix="VND" />
                <div style={{ fontSize: '11px', color: '#64748b', fontStyle: 'italic', marginTop: '4px', textAlign: 'left', fontWeight: '500' }}>
                  Đề xuất dựa trên mức lương cơ bản trong Hợp đồng.
                </div>
              </div>

              <Input label="Ngày tham gia bảo hiểm *" value="11/01/2023" type="date" />
              <Input label="Nơi đăng ký KCB *" placeholder="Nhập tên bệnh viện/cơ sở y tế" />
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Input label="Số thẻ BHYT" placeholder="Nhập mã thẻ BHYT" />
              
              <div>
                <Input label="Ngày bắt đầu áp dụng" type="date" placeholder="dd/mm/yyyy" />
                <div style={{ fontSize: '11px', color: '#64748b', fontStyle: 'italic', marginTop: '4px', textAlign: 'left', fontWeight: '500', lineHeight: '1.4' }}>
                  Tự động lấy thông tin từ ngày hiệu lực hợp đồng phụ lục hợp đồng mới nhất
                </div>
              </div>

              <Input label="Ngày kết thúc" type="date" placeholder="mm/dd/yyyy" />
            </div>
          </div>

          {/* Change log */}
          <div style={{ marginTop: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
              <RefreshCw size={16} color="#00796b" /> Lịch sử thay đổi
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 16px', textAlign: 'left' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>[12/01/2023 14:30]</span>
                <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: '#64748b' }}></span>
                <span style={{ fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                  <strong>Nguyễn Văn A</strong> đã thay đổi Mức lương đóng BH từ 12,000,000 thành <span style={{ color: '#16a34a', fontWeight: '700' }}>15,000,000</span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 16px', textAlign: 'left' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>[11/01/2023 09:15]</span>
                <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: '#64748b' }}></span>
                <span style={{ fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                  Hệ thống: Khởi tạo dữ liệu - <span style={{ color: '#16a34a', fontWeight: '700' }}>Đã thiết lập</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <CardTitle icon={Building2} title="Thông tin Thuế" subtitle="Cập nhật thông tin mã số thuế cá nhân và danh sách người phụ thuộc để giảm trừ gia cảnh TNCN." />
        <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 28px' }}>
            <Input label="Mã số thuế cá nhân *" value={mstCaNhan} onChange={(e) => setMstCaNhan(e.target.value)} />
            <Input label="Mã số thuế công ty *" value={mstCongTy} onChange={(e) => setMstCongTy(e.target.value)} />
            <Input label="Tên cơ quan thuế quản lý" value={coQuanThue} onChange={(e) => setCoQuanThue(e.target.value)} />
            <Input label="Nơi đăng ký giảm trừ gia cảnh" value={noiGiamTru} onChange={(e) => setNoiGiamTru(e.target.value)} />
          </div>

          {/* List of dependents */}
          <div style={{ border: '1px solid #dde7f2', borderRadius: '8px', overflow: 'hidden', marginTop: '10px' }}>
            <div style={{ background: '#f8fafc', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '14px', color: '#334155' }}>Danh sách người phụ thuộc</strong>
              <button 
                onClick={() => setDependentDrawerOpen(true)}
                style={{
                  border: '1px solid #00796b',
                  borderRadius: '6px',
                  background: '#fff',
                  color: '#00796b',
                  fontSize: '13px',
                  fontWeight: '700',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Plus size={14} /> Thêm người phụ thuộc
              </button>
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>STT</th>
                  <th style={styles.th}>Họ và tên</th>
                  <th style={styles.th}>Mối quan hệ</th>
                  <th style={styles.th}>Mã số thuế</th>
                  <th style={styles.th}>Ngày sinh/Ngày áp dụng</th>
                  <th style={styles.th}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {dependents.map((dep, index) => (
                  <tr key={dep.id}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={{ ...styles.td, fontWeight: '700' }}>{dep.name}</td>
                    <td style={styles.td}>{dep.relation}</td>
                    <td style={styles.td}>{dep.taxId}</td>
                    <td style={styles.td}>{dep.date}</td>
                    <td style={styles.td}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={styles.actionBtn}><Edit size={14} color="#00796b" /></button>
                        <button onClick={() => handleDeleteDependent(dep.id)} style={styles.actionBtn}><Trash2 size={14} color="#ef4444" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {dependents.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ ...styles.td, textAlign: 'center', color: '#64748b', padding: '20px' }}>
                      Chưa có người phụ thuộc nào được thêm.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Change log */}
          <div style={{ marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <RefreshCw size={16} color="#00796b" /> Lịch sử thay đổi
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '10px 14px', textAlign: 'left' }}>
                <UserCheck size={16} color="#16a34a" />
                <span style={{ fontSize: '13px', color: '#14532d', fontWeight: '500' }}>
                  <strong>01/01/2024</strong> - Người phụ thuộc <strong>Nguyễn Thị Thanh Anh</strong> - <span style={{ color: '#16a34a', fontWeight: '700' }}>Đang áp dụng</span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '10px 14px', textAlign: 'left' }}>
                <RefreshCw size={16} color="#16a34a" />
                <span style={{ fontSize: '13px', color: '#14532d', fontWeight: '500' }}>
                  <strong>15/12/2023</strong> - Thay đổi MST cá nhân - <span style={{ color: '#16a34a', fontWeight: '700' }}>Hoàn thành</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dependent Modal Drawer */}
        {dependentDrawerOpen && (
          <div style={styles.drawerLayer}>
            <div style={styles.drawerScrim} onClick={() => setDependentDrawerOpen(false)} />
            <div style={styles.drawerPanel}>
              <div style={styles.drawerHeader}>
                <div>
                  <h2 style={styles.drawerTitle}>Thêm người phụ thuộc</h2>
                  <p style={styles.drawerSubtitle}>Đăng ký thông tin người phụ thuộc để giảm trừ gia cảnh TNCN.</p>
                </div>
                <button onClick={() => setDependentDrawerOpen(false)} style={{ border: 0, background: 'transparent', color: '#94a3b8', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>
              <div style={styles.drawerBody}>
                <Input label="Họ và tên *" value={depName} onChange={(e) => setDepName(e.target.value)} placeholder="Nhập họ và tên người phụ thuộc" />
                <SelectInput label="Mối quan hệ *" value={depRelation} onChange={(val) => setDepRelation(val)} selectOptions={['Con ruột', 'Vợ/Chồng', 'Cha/Mẹ', 'Khác']} />
                <Input label="Số CCCD/Mã định danh *" value={depIdCode} onChange={(e) => setDepIdCode(e.target.value)} placeholder="Nhập số định danh cá nhân" />
                <Input label="Ngày sinh *" value={depDob} onChange={(e) => setDepDob(e.target.value)} type="date" placeholder="Chọn ngày sinh" />
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Từ ngày *" value={depFromDate} onChange={(e) => setDepFromDate(e.target.value)} type="date" placeholder="Từ ngày" />
                  <Input label="Đến ngày" value={depToDate} onChange={(e) => setDepToDate(e.target.value)} type="date" placeholder="Đến ngày" />
                </div>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '13px', fontWeight: '500', color: '#475569', marginTop: '6px' }}>
                  <input type="checkbox" checked={depCommit} onChange={(e) => setDepCommit(e.target.checked)} style={{ marginTop: '2px', accentColor: '#00796b' }} />
                  <span>Cam kết thông tin khai báo là chính xác và tự chịu trách nhiệm trước pháp luật.</span>
                </label>

                <div style={styles.warningCard}>
                  <div style={{ color: '#0f5132', marginTop: '2px' }}><Info size={16} /></div>
                  <div>Cá nhân đăng ký MST cho người phụ thuộc chậm nhất là ngày 31/12 của năm đăng ký giảm trừ gia cảnh.</div>
                </div>
              </div>
              <div style={styles.drawerFooter}>
                <button 
                  onClick={() => setDependentDrawerOpen(false)}
                  style={{
                    border: '1px solid #cfdbe8',
                    borderRadius: '8px',
                    background: '#fff',
                    color: '#475569',
                    fontSize: '13px',
                    fontWeight: '700',
                    padding: '8px 16px',
                    cursor: 'pointer'
                  }}
                >
                  Hủy
                </button>
                <button 
                  onClick={handleSaveDependent}
                  style={{
                    border: 0,
                    borderRadius: '8px',
                    background: '#00796b',
                    color: '#fff',
                    fontSize: '13px',
                    fontWeight: '700',
                    padding: '8px 16px',
                    cursor: 'pointer'
                  }}
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <CardTitle icon={Banknote} title="Bước 6: Ngân hàng" subtitle="Thông tin tài khoản nhận lương của nhân viên." />
        <div style={styles.bankForm}>
          <SelectInput label="Ngân hàng *" value="Vietcombank - Ngân hàng TMCP Ngoại thương VN" />
          <Input label="Chi nhánh ngân hàng *" value="Chi nhánh Sài Gòn" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 28px' }}>
            <Input label="Số tài khoản *" value="1900123456789" />
            <Input label="Chủ tài khoản *" value="NGUYEN MINH KHOI" />
          </div>
          <label style={styles.checkLine}>
            <span style={styles.checkedBox}><Check size={16} /></span>
            Đặt làm tài khoản nhận lương mặc định
          </label>
        </div>
      </>
    );
  }

  if (step === 7) {
    const docs = [
      ['Mặt trước CCCD', 'JPG, PNG, PDF (Tối đa 5MB)', IdCard, '#3b82f6'],
      ['Mặt sau CCCD', 'JPG, PNG, PDF (Tối đa 5MB)', IdCard, '#3b82f6'],
      ['CV', 'PDF, DOCX (Tối đa 10MB)', FileText, '#a855f7'],
      ['Bằng cấp hoặc chứng chỉ', 'JPG, PNG, PDF (Tối đa 5MB)', BadgeCheck, '#f97316'],
      ['Hợp đồng đã ký', 'PDF (Tối đa 10MB)', FileCheck2, '#22c55e'],
      ['Tài liệu khác', 'Mọi định dạng (Tối đa 20MB)', FolderOpen, '#64748b'],
    ];
    return (
      <>
        <div style={styles.documentHeader}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Bước 7: Tài liệu</h2>
          <p style={{ color: '#64748b', fontSize: 13, margin: '4px 0 0' }}>Tải lên các tài liệu cần thiết để hoàn tất hồ sơ nhân viên.</p>
        </div>
        <div style={styles.documentGrid}>
          {docs.map(([title, desc, Icon, color]) => <UploadTile key={title} title={title} desc={desc} icon={Icon} color={color} />)}
        </div>
      </>
    );
  }

  return (
    <div style={{ padding: '24px 28px' }}>
      <div style={styles.reviewHero}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Tạo nhân viên mới</h1>
          <p style={{ color: '#64748b', fontSize: 13, margin: '4px 0 0' }}>Hoàn tất các bước dưới đây để thiết lập hồ sơ nhân sự đầy đủ.</p>
        </div>
        <button style={styles.closeText}><X size={18} /> Đóng</button>
      </div>
      <h2 style={styles.reviewTitle}>Bước 8: Rà soát</h2>
      <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 16px' }}>Kiểm tra lại toàn bộ thông tin trước khi hoàn tất tạo hồ sơ nhân viên.</p>
      <div style={styles.reviewGrid}>
        <ReviewCard title="Thông tin cá nhân" onEdit={() => setStep(1)} items={['Họ và tên|Nguyễn Minh Khôi', 'Giới tính|Nam', 'Ngày sinh|08/12/1996', 'Quốc tịch|Việt Nam', 'Email cá nhân|khoi.nguyen@gmail.com', 'Số CCCD|079096012345']} />
        <ReviewCard title="Thông tin công việc & Hợp đồng" onEdit={() => setStep(2)} items={['Loại hợp đồng|Hợp đồng thử việc', 'Vị trí chức danh|Chuyên viên marketing', 'Phòng ban|Phòng Marketing', 'Ngày gia nhập|01/01/2024']} />
        <ReviewCard title="Thông tin Bảo hiểm & Thuế" onEdit={() => setStep(4)} items={['Đơn vị đóng BH|Green Speed JSC', 'Mức lương đóng BH|15,000,000 VND', 'Mã số thuế cá nhân|8547215904', 'Người phụ thuộc|Nguyễn Thị Thanh Anh (Con ruột)']} />
        <ReviewCard title="Thông tin Ngân hàng" onEdit={() => setStep(6)} items={['Ngân hàng|Vietcombank', 'Chi nhánh|Chi nhánh Sài Gòn', 'Số tài khoản|1900123456789', 'Chủ tài khoản|NGUYEN MINH KHOI']} />
      </div>
      <ReviewLine title="Thông tin Lương & Phúc lợi" desc="Đã thiết lập mức lương cơ bản và phụ cấp." />
      <ReviewLine title="Tài khoản & Phân quyền" desc="Đã cấp tài khoản portal: khoinm@saoviet.vn" />
    </div>
  );
};

export default WizardContent;
