import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Trash2, Plus, DollarSign, List, UserCheck, RefreshCw, Upload, CheckCircle, Calendar } from 'lucide-react';
import { useAppContext } from '../../../context/AppContext';

const styles = {
  drawerLayer: { position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' },
  drawerScrim: { position: 'absolute', inset: 0, background: 'rgba(15,23,42,.42)', backdropFilter: 'blur(4px)' },
  editDrawer: { position: 'relative', width: 580, maxWidth: '92vw', background: '#fff', height: '100%', boxShadow: '-20px 0 44px rgba(15,23,42,.12)', display: 'flex', flexDirection: 'column', fontFamily: 'Be Vietnam Pro, sans-serif' },
  drawerHeader: { padding: '24px 28px', borderBottom: '1px solid #e5edf5', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  drawerTitle: { margin: 0, fontSize: 18, fontWeight: '900', color: '#1e293b' },
  drawerSubtitle: { margin: '4px 0 0', color: '#64748b', fontSize: '13px' },
  closeButton: { border: 0, background: 'transparent', color: '#94a3b8', cursor: 'pointer', display: 'grid', placeItems: 'center' },
  drawerBody: { flex: 1, overflow: 'auto', padding: '24px 28px' },
  drawerFooter: { minHeight: 76, borderTop: '1px solid #e5edf5', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, padding: '0 28px', background: '#f8fafc' },
  formGrid: { display: 'flex', flexDirection: 'column', gap: 18 },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', margin: '12px 0 6px 0', fontSize: '12px', fontWeight: '800', color: '#4fa819', textTransform: 'uppercase', letterSpacing: '0.5px' },
  formField: { display: 'flex', flexDirection: 'column', gap: 6, color: '#334155', fontSize: '13px', fontWeight: '700', textAlign: 'left' },
  inputWrap: { minHeight: 40, border: '1px solid #cfdbe8', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: 10, padding: '0 12px', background: '#fff', position: 'relative' },
  inputField: { border: 0, outline: 0, flex: 1, font: 'inherit', fontWeight: 500, background: 'transparent', width: '100%', color: '#334155' },
  textarea: { height: 76, border: '1px solid #cfdbe8', borderRadius: '6px', resize: 'none', padding: '12px', font: 'inherit', fontWeight: 500, width: '100%', boxSizing: 'border-box', color: '#334155', outline: 0 },
  primaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, minHeight: 40, border: 0, borderRadius: '8px', padding: '0 16px', background: '#4fa819', color: '#fff', fontSize: '13px', fontWeight: '700', cursor: 'pointer' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, minHeight: 38, border: '1px solid #cfdbe8', borderRadius: '8px', padding: '0 14px', background: '#fff', color: '#475569', fontSize: '13px', fontWeight: '700', cursor: 'pointer' },
  
  // Allowance List styles
  allowanceRow: { display: 'grid', gridTemplateColumns: '1.2fr 1fr auto', gap: '12px', alignItems: 'center', marginBottom: '8px' },
  addBtn: { border: 'none', background: 'none', color: '#4fa819', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', alignSelf: 'flex-end' },
  trashBtn: { border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px' },

  // Approver and summary styles
  approverCard: { display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #cfdbe8', borderRadius: '6px', padding: '8px 12px', background: '#fff', cursor: 'pointer' },
  approverAvatar: { width: '28px', height: '28px', borderRadius: '50%', background: '#4fa819', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '11px', fontWeight: '700' },
  summaryBox: { background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px', borderBottom: '1px solid #f1f5f9' },
  summaryVal: { fontWeight: '700', color: '#334155' },
  changeBadge: { background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '800' },
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

const renderLabel = (label) => {
  if (!label) return null;
  if (typeof label !== 'string') return label;
  if (label.includes('*')) {
    const parts = label.split('*');
    return (
      <>
        {parts[0]}
        <span style={{ color: '#ef4444' }}>*</span>
        {parts.slice(1).join('*')}
      </>
    );
  }
  return label;
};

const FormField = ({ label, value, onChange, select, selectOptions, textarea, suffix, placeholder, type }) => {
  if (type === 'date') {
    const handleDateChange = (e) => {
      const isoVal = e.target.value;
      const formatted = formatDate(isoVal);
      if (onChange) {
        onChange(formatted);
      }
    };

    const isoDate = toISODate(value);
    const displayDate = formatDate(value);

    return (
      <label style={styles.formField}>
        <span>{renderLabel(label)}</span>
        <div style={{ ...styles.inputWrap, cursor: 'pointer', position: 'relative' }}>
          <input
            type="text"
            readOnly
            value={displayDate}
            placeholder={placeholder || 'Chọn ngày'}
            style={{ ...styles.inputField, cursor: 'pointer' }}
          />
          <Calendar size={16} color="#94a3b8" style={{ pointerEvents: 'none' }} />
          <input
            type="date"
            value={isoDate}
            onChange={handleDateChange}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
              zIndex: 2,
            }}
          />
        </div>
      </label>
    );
  }

  return (
    <label style={styles.formField}>
      <span>{renderLabel(label)}</span>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} style={styles.textarea} placeholder={placeholder} />
      ) : select ? (
        <div style={styles.inputWrap}>
          <select value={value} onChange={(e) => onChange(e.target.value)} style={{ ...styles.inputField, appearance: 'none', WebkitAppearance: 'none', border: 0, outline: 0 }}>
            {selectOptions ? selectOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            )) : (
              <option value={value}>{value}</option>
            )}
          </select>
          <ChevronDown size={16} color="#94a3b8" style={{ pointerEvents: 'none', position: 'absolute', right: '12px' }} />
        </div>
      ) : (
        <div style={styles.inputWrap}>
          <input value={value} onChange={(e) => onChange(e.target.value)} style={styles.inputField} placeholder={placeholder} />
          {suffix && <b style={{ color: '#94a3b8', fontSize: '13px' }}>{suffix}</b>}
        </div>
      )}
    </label>
  );
};

const EditDrawer = ({ profile, section, onClose }) => {
  const { setEmployees } = useAppContext();

  const titles = {
    personal: 'Chỉnh sửa thông tin cá nhân',
    contact: 'Chỉnh sửa thông tin liên hệ',
    emergency: 'Chỉnh sửa liên hệ khẩn cấp',
    work: 'Chỉnh sửa thông tin công việc',
    salary: 'Chỉnh sửa Lương & Phụ cấp',
    contract: 'Chỉnh sửa hợp đồng',
    insurance: 'Sửa bảo hiểm và thuế',
    bank: 'Sửa thông tin ngân hàng',
    document: 'Cập nhật tài liệu nhân sự',
  };

  // Salary Editing State variables
  const [basicSalary, setBasicSalary] = useState(String(profile.salary || 25000000));
  const [effectiveDate, setEffectiveDate] = useState('12/01/2023');
  const [payMethod, setPayMethod] = useState(profile.payMethod || 'Chuyển khoản ngân hàng');
  const [insuranceRate, setInsuranceRate] = useState('100');
  const [allowances, setAllowances] = useState(
    profile.allowances ? profile.allowances.map(a => ({ name: a.name, amount: String(a.amount) })) : []
  );
  const [reason, setReason] = useState('');
  const [approver, setApprover] = useState('Trần Văn Quân (Trưởng phòng Nhân sự)');

  // Dynamic salary metrics
  const currentSalary = profile.salaryHistory?.[1]?.newSalary || profile.salary * 0.9 || 22500000;
  const newSalaryNum = Number(basicSalary.replace(/,/g, '')) || 0;
  const changePercent = currentSalary > 0 ? ((newSalaryNum - currentSalary) / currentSalary) * 100 : 0;
  const changeSign = changePercent >= 0 ? '+' : '';

  // Other sections generic state
  const [name, setName] = useState(profile.name);
  const [gender, setGender] = useState(profile.gender || 'Nam');
  const [dob, setDob] = useState(profile.dob || '');
  const [nationality, setNationality] = useState(profile.nationality || 'Việt Nam');
  const [maritalStatus, setMaritalStatus] = useState(profile.maritalStatus || 'Độc thân');
  const [cccd, setCccd] = useState(profile.cccd || '');
  
  const [phone, setPhone] = useState(profile.phone || '');
  const [personalEmail, setPersonalEmail] = useState(profile.personalEmail || '');
  const [workEmail, setWorkEmail] = useState(profile.workEmail || '');
  const [permanentAddress, setPermanentAddress] = useState(profile.permanentAddress || '');
  const [temporaryAddress, setTemporaryAddress] = useState(profile.temporaryAddress || '');

  const [department, setDepartment] = useState(profile.department || '');
  const [position, setPosition] = useState(profile.position || '');
  const [manager, setManager] = useState(profile.manager || '');
  const [level, setLevel] = useState(profile.level || '');
  const [workLocation, setWorkLocation] = useState(profile.workLocation || '');
  const [status, setStatus] = useState(profile.status || 'Đang làm');

  const [contractNumber, setContractNumber] = useState(profile.contractNumber || '');
  const [contractType, setContractType] = useState(profile.contractType || '');
  const [startDate, setStartDate] = useState(profile.startDate || '');
  const [contractEndDate, setContractEndDate] = useState(profile.contractEndDate || '');

  const [taxId, setTaxId] = useState(profile.taxId || '');
  const [bhxhNumber, setBhxhNumber] = useState(profile.bhxhNumber || '');
  const [bhytNumber, setBhytNumber] = useState(profile.bhytNumber || '');
  const [insuranceSalary, setInsuranceSalary] = useState(String(profile.insuranceSalary || ''));
  const [insuranceStartDate, setInsuranceStartDate] = useState(profile.insuranceStartDate || '08/01/2024');
  const [medicalFacility, setMedicalFacility] = useState('');
  const [dependentsText, setDependentsText] = useState('');

  // Bank edit states
  const [bankName, setBankName] = useState(profile.bank?.name || 'Vietcombank');
  const [bankBranch, setBankBranch] = useState(profile.bank?.branch || '');
  const [bankAccount, setBankAccount] = useState(profile.bank?.account || '');
  const [bankHolder, setBankHolder] = useState(profile.bank?.holder || '');
  const [verificationNotes, setVerificationNotes] = useState('');

  // Document upload states
  const [docType, setDocType] = useState('Căn cước công dân (CCCD)');
  const [docStatus, setDocStatus] = useState('Chờ duyệt');
  const [docNotes, setDocNotes] = useState('');

  // Allowance actions
  const handleAddAllowance = () => {
    setAllowances([...allowances, { name: '', amount: '' }]);
  };

  const handleRemoveAllowance = (index) => {
    setAllowances(allowances.filter((_, i) => i !== index));
  };

  const handleUpdateAllowance = (index, field, value) => {
    const updated = allowances.map((a, i) => {
      if (i === index) {
        return { ...a, [field]: value };
      }
      return a;
    });
    setAllowances(updated);
  };

  const handleSave = () => {
    setEmployees(prev => prev.map(emp => {
      if (String(emp.id) === String(profile.id)) {
        const updated = { ...emp };
        if (section === 'personal') {
          updated.name = name;
          updated.gender = gender;
          updated.birthDate = dob;
          updated.nationality = nationality;
          updated.maritalStatus = maritalStatus;
          updated.cccd = cccd;
        } else if (section === 'contact') {
          updated.phone = phone;
          updated.personalEmail = personalEmail;
          updated.email = workEmail; // workEmail maps to base email
          updated.permanentAddress = permanentAddress;
          updated.temporaryAddress = temporaryAddress;
        } else if (section === 'work') {
          updated.department = department;
          updated.position = position;
          updated.manager = manager;
          updated.level = level;
          updated.workLocation = workLocation;
          updated.status = status;
        } else if (section === 'contract') {
          updated.contractNumber = contractNumber;
          updated.contractType = contractType;
          updated.startDate = startDate;
          updated.contractEndDate = contractEndDate;
        } else if (section === 'insurance') {
          updated.taxId = taxId;
          updated.bhxhNumber = bhxhNumber;
          updated.bhytNumber = bhytNumber;
          updated.insuranceStartDate = insuranceStartDate;
          // Keep medical facility and dependents mock updated locally
        } else if (section === 'bank') {
          updated.bank = {
            name: bankName,
            branch: bankBranch,
            account: bankAccount,
            holder: bankHolder
          };
        } else if (section === 'document') {
          const docName = docType === 'Căn cước công dân (CCCD)' ? 'Căn cước công dân' : docType;
          const existIndex = updated.documents ? updated.documents.findIndex(d => d.name === docName) : -1;
          const newDoc = {
            name: docName,
            type: docType === 'Căn cước công dân (CCCD)' ? 'CCCD' : 'Hợp đồng',
            file: `${profile.code.toLowerCase()}-${docType === 'Căn cước công dân (CCCD)' ? 'cccd' : 'hop-dong'}.pdf`,
            date: new Date().toLocaleDateString('vi-VN'),
            status: docStatus
          };
          if (existIndex > -1) {
            updated.documents = updated.documents.map((d, idx) => idx === existIndex ? newDoc : d);
          } else {
            updated.documents = [...(updated.documents || []), newDoc];
          }
        } else if (section === 'salary') {
          updated.salary = Number(basicSalary) || updated.salary;
          updated.payMethod = payMethod;
        }
        return updated;
      }
      return emp;
    }));
    onClose();
  };

  return (
    <div style={styles.drawerLayer}>
      <div style={styles.drawerScrim} onClick={onClose} />
      <aside style={styles.editDrawer}>
        <div style={styles.drawerHeader}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={styles.drawerTitle}>{titles[section] || 'Chỉnh sửa thông tin'}</h2>
            <p style={styles.drawerSubtitle}>{profile.name} · {profile.code} {profile.department ? `· ${profile.department}` : ''}</p>
          </div>
          <button style={styles.closeButton} onClick={onClose}><X size={22} /></button>
        </div>
        
        <div style={styles.drawerBody}>
          {section === 'salary' ? (
            <div style={styles.formGrid}>
              {/* SECTION: THÔNG TIN LƯƠNG */}
              <div style={styles.sectionHeader}>
                <DollarSign size={15} style={{ marginRight: '4px' }} />
                Thông tin lương
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <FormField 
                  label="Lương cơ bản" 
                  value={basicSalary} 
                  onChange={setBasicSalary} 
                  suffix="VND" 
                />
                <FormField 
                  label="Ngày áp dụng" 
                  value={effectiveDate} 
                  onChange={setEffectiveDate} 
                  type="date"
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '14px' }}>
                <FormField 
                  label="Hình thức trả lương" 
                  value={payMethod} 
                  onChange={setPayMethod} 
                  select 
                  selectOptions={['Chuyển khoản ngân hàng', 'Tiền mặt', 'Khác']} 
                />
                <FormField 
                  label="Tỷ lệ đóng bảo hiểm" 
                  value={insuranceRate} 
                  onChange={setInsuranceRate} 
                  suffix="%" 
                />
              </div>

              {/* SECTION: DANH SÁCH PHỤ CẤP */}
              <div style={{ ...styles.sectionHeader, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <List size={15} style={{ marginRight: '4px' }} />
                  Danh sách phụ cấp
                </div>
                <button style={styles.addBtn} onClick={handleAddAllowance}>
                  <Plus size={14} /> Thêm
                </button>
              </div>
              <div>
                {allowances.map((item, idx) => (
                  <div key={idx} style={styles.allowanceRow}>
                    <div style={styles.inputWrap}>
                      <input 
                        value={item.name} 
                        onChange={(e) => handleUpdateAllowance(idx, 'name', e.target.value)} 
                        placeholder="Tên phụ cấp" 
                        style={styles.inputField} 
                      />
                    </div>
                    <div style={styles.inputWrap}>
                      <input 
                        value={item.amount} 
                        onChange={(e) => handleUpdateAllowance(idx, 'amount', e.target.value)} 
                        placeholder="Số tiền" 
                        style={styles.inputField} 
                      />
                      <b style={{ color: '#94a3b8', fontSize: '11px' }}>VND</b>
                    </div>
                    <button style={styles.trashBtn} onClick={() => handleRemoveAllowance(idx)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                {allowances.length === 0 && (
                  <p style={{ margin: '8px 0', fontSize: '12px', color: '#94a3b8', textAlign: 'left' }}>
                    Chưa thiết lập phụ cấp
                  </p>
                )}
              </div>

              {/* SECTION: LÝ DO CHỈNH SỬA */}
              <FormField 
                label="Lý do chỉnh sửa" 
                value={reason} 
                onChange={setReason} 
                textarea 
                placeholder="Nhập lý do điều chỉnh lương..." 
              />

              {/* SECTION: QUY TRÌNH PHÊ DUYỆT */}
              <div style={styles.sectionHeader}>
                <UserCheck size={15} style={{ marginRight: '4px' }} />
                Quy trình phê duyệt
              </div>
              <div style={styles.formField}>
                <span>Người duyệt trực tiếp</span>
                <div style={styles.approverCard}>
                  <div style={styles.approverCard}>
                    <div style={styles.approverAvatar}>Q</div>
                    <div style={{ textAlign: 'left' }}>
                      <strong style={{ fontSize: '13px', color: '#334155' }}>Trần Văn Quân</strong>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>Trưởng phòng Nhân sự</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: METRICS BẢNG TỔNG HỢP */}
              <div style={styles.summaryBox}>
                <div style={styles.summaryRow}>
                  <span>Lương hiện tại</span>
                  <span style={styles.summaryVal}>{currentSalary.toLocaleString('vi-VN')} VND</span>
                </div>
                <div style={styles.summaryRow}>
                  <span>Lương mới</span>
                  <strong style={{ ...styles.summaryVal, color: '#4fa819' }}>
                    {newSalaryNum.toLocaleString('vi-VN')} VND
                  </strong>
                </div>
                <div style={{ ...styles.summaryRow, borderBottom: 0, paddingBottom: 0 }}>
                  <span>Biến động</span>
                  <span style={{ 
                    ...styles.changeBadge, 
                    background: changePercent >= 0 ? '#dcfce7' : '#fee2e2',
                    color: changePercent >= 0 ? '#166534' : '#ef4444' 
                  }}>
                    {changeSign}{changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div style={styles.formGrid}>
              {section === 'personal' && (
                <>
                  <FormField label="Họ và tên" value={name} onChange={setName} />
                  <FormField label="Giới tính" value={gender} onChange={setGender} select selectOptions={['Nam', 'Nữ', 'Khác']} />
                  <FormField label="Ngày sinh" value={dob} onChange={setDob} type="date" />
                  <FormField label="Quốc tịch" value={nationality} onChange={setNationality} />
                  <FormField label="Tình trạng hôn nhân" value={maritalStatus} onChange={setMaritalStatus} select selectOptions={['Độc thân', 'Đã kết hôn', 'Đã ly hôn']} />
                  <FormField label="Số CCCD" value={cccd} onChange={setCccd} />
                </>
              )}
              {section === 'contact' && (
                <>
                  <FormField label="Số điện thoại" value={phone} onChange={setPhone} />
                  <FormField label="Email cá nhân" value={personalEmail} onChange={setPersonalEmail} />
                  <FormField label="Email công việc" value={workEmail} onChange={setWorkEmail} />
                  <FormField label="Địa chỉ thường trú" value={permanentAddress} onChange={setPermanentAddress} textarea />
                  <FormField label="Địa chỉ tạm trú" value={temporaryAddress} onChange={setTemporaryAddress} textarea />
                </>
              )}
              {section === 'work' && (
                <>
                  <FormField label="Phòng ban" value={department} onChange={setDepartment} select selectOptions={['Phòng Nhân sự', 'Phòng Kỹ thuật', 'Phòng Marketing', 'Phòng Kinh doanh']} />
                  <FormField label="Chức vụ" value={position} onChange={setPosition} select selectOptions={['Chuyên viên nhân sự', 'Senior Developer', 'Junior Developer', 'Intern', 'Trưởng phòng']} />
                  <FormField label="Quản lý trực tiếp" value={manager} onChange={setManager} select selectOptions={['Trần Thị Mai', 'Nguyễn Đức Long', 'Bùi Thị Ngân']} />
                  <FormField label="Cấp bậc" value={level} onChange={setLevel} select selectOptions={['Nhân viên (Staff)', 'Quản lý', 'Giám đốc']} />
                  <FormField label="Địa điểm làm việc" value={workLocation} onChange={setWorkLocation} select selectOptions={['Tầng 12, Tòa nhà , Quận 1', 'Văn phòng', 'Remote', 'Hybrid']} />
                  <FormField label="Trạng thái" value={status} onChange={setStatus} select selectOptions={['Đang làm', 'Thử việc', 'Đã nghỉ việc']} />
                </>
              )}
              {section === 'contract' && (
                <>
                  <FormField label="Số hợp đồng" value={contractNumber} onChange={setContractNumber} />
                  <FormField label="Loại hợp đồng" value={contractType} onChange={setContractType} select selectOptions={['HĐLĐ Xác định thời hạn', 'HĐLĐ Không xác định thời hạn', 'Hợp đồng Thử việc']} />
                  <FormField label="Ngày bắt đầu" value={startDate} onChange={setStartDate} type="date" />
                  <FormField label="Ngày kết thúc" value={contractEndDate} onChange={setContractEndDate} type="date" />
                </>
              )}
              {section === 'insurance' && (
                <>
                  <FormField label="Mã số thuế cá nhân *" value={taxId} onChange={setTaxId} />
                  <FormField label="Số BHXH *" value={bhxhNumber} onChange={setBhxhNumber} />
                  <FormField label="Số BHYT *" value={bhytNumber} onChange={setBhytNumber} />
                  <FormField label="Ngày tham gia bảo hiểm" value={insuranceStartDate} onChange={setInsuranceStartDate} type="date" />
                  <FormField label="Nơi đăng ký khám chữa bệnh" value={medicalFacility} onChange={setMedicalFacility} placeholder="Bệnh viện hoặc phòng khám đăng ký ban đầu" />
                  <FormField label="Người phụ thuộc" value={dependentsText} onChange={setDependentsText} textarea placeholder="Danh sách người phụ thuộc, mã số thuế và quan hệ." />
                </>
              )}
              {section === 'document' && (
                <>
                  <FormField label="Loại tài liệu *" value={docType} onChange={setDocType} select selectOptions={['Căn cước công dân (CCCD)', 'Hợp đồng lao động', 'Bằng cấp / Chứng chỉ', 'Khác']} />
                  <FormField label="Trạng thái xác minh" value={docStatus} onChange={setDocStatus} select selectOptions={['Chờ duyệt', 'Đã xác minh', 'Thiếu']} />
                  <div style={styles.formField}>
                    <span>Tải tài liệu mới</span>
                    <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '24px', textAlign: 'center', background: '#fff', cursor: 'pointer' }}>
                      <div style={{ color: '#10b981', display: 'grid', placeItems: 'center', marginBottom: '8px' }}>
                        <Upload size={24} />
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#4fa819' }}>Chọn tệp</span>
                      <span style={{ fontSize: '13px', color: '#475569', fontWeight: '600' }}> hoặc kéo thả vào đây</span>
                      <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Hỗ trợ PDF, JPG, PNG (Tối đa 10MB)</span>
                    </div>
                  </div>
                  <FormField label="Ghi chú tài liệu" value={docNotes} onChange={setDocNotes} textarea placeholder="Ghi chú về tài liệu, ngày hết hạn hoặc lý do thay thế." />
                  <div style={{ display: 'flex', gap: '10px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '12px 16px', color: '#1e3a8a', fontSize: '13px', textAlign: 'left', lineHeight: '1.4' }}>
                    <div style={{ color: '#3b82f6', marginTop: '2px' }}><CheckCircle size={16} /></div>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '2px', color: '#1d4ed8' }}>Lưu ý khi cập nhật</strong>
                      Việc tải lên tài liệu mới sẽ thay thế tài liệu CCCD hiện tại của nhân viên {profile.name}. Bản cũ sẽ được lưu trữ trong lịch sử.
                    </div>
                  </div>
                </>
              )}
              {(section === 'emergency' || section === 'bank') && (
                <>
                  {section === 'bank' ? (
                    <>
                      <FormField label="Ngân hàng *" value={bankName} onChange={setBankName} select selectOptions={['Vietcombank', 'Techcombank', 'MB Bank', 'ACB']} />
                      <FormField label="Chi nhánh ngân hàng" value={bankBranch} onChange={setBankBranch} />
                      <FormField label="Số tài khoản *" value={bankAccount} onChange={setBankAccount} />
                      <FormField label="Chủ tài khoản *" value={bankHolder} onChange={setBankHolder} />
                      <FormField label="Ghi chú xác minh" value={verificationNotes} onChange={setVerificationNotes} textarea placeholder="Ghi chú kiểm tra tài khoản hoặc xác minh chủ tài khoản." />
                    </>
                  ) : (
                    profile.emergencyContacts.map((c, i) => (
                      <React.Fragment key={i}>
                        <FormField label={`Người liên hệ ${i + 1}`} value={c.name} />
                        <FormField label="Quan hệ" value={c.relation} />
                        <FormField label="Số điện thoại" value={c.phone} />
                      </React.Fragment>
                    ))
                  )}
                </>
              )}
            </div>
          )}
        </div>
        
        <div style={styles.drawerFooter}>
          <button style={styles.secondaryButton} onClick={onClose}>Hủy</button>
          <button style={styles.primaryButton} onClick={handleSave}>
            {section === 'salary' ? 'Lưu & Gửi duyệt' : 'Lưu thay đổi'}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default EditDrawer;
