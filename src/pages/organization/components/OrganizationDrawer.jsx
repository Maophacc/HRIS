import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

const OrganizationDrawer = ({ isOpen, onClose, drawerType, onSave }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [manager, setManager] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  // Reset inputs when drawer type changes or drawer opens/closes
  useEffect(() => {
    setName('');
    setCode('');
    setManager('');
    setPhone('');
    setDate(new Date().toISOString().split('T')[0]); // Default to today
    setError('');
  }, [drawerType, isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập tên.');
      return;
    }
    if (!code.trim()) {
      setError('Vui lòng nhập mã.');
      return;
    }
    
    let typeLabel = 'Pháp nhân';
    let managerName = manager || '-';
    
    if (drawerType === 'dự án') {
      typeLabel = 'Dự án';
      if (!managerName || managerName === '-') {
        setError('Vui lòng chọn quản trị viên.');
        return;
      }
    } else if (drawerType === 'phòng ban') {
      typeLabel = 'Phòng ban';
    } else if (drawerType === 'chức danh') {
      typeLabel = 'Chức danh';
    }

    onSave({
      name: name.trim(),
      code: code.trim().toUpperCase(),
      type: typeLabel,
      manager: managerName,
      members: Math.floor(Math.random() * 15) + 1, // presentation member count
      status: 'Đang hoạt động',
      phone: phone.trim(),
      date: date
    });
    
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex' }}>
      {/* Overlay */}
      <div 
        onClick={onClose}
        style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(2px)' }}
      ></div>
      
      {/* Drawer Panel */}
      <form onSubmit={handleSave} style={{ width: '400px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.1)' }}>
        
        {/* Drawer Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>
              {drawerType === 'chức danh' 
                ? 'Thêm chức danh mới' 
                : drawerType === 'phòng ban' 
                  ? 'Thêm phòng ban mới' 
                  : drawerType === 'dự án'
                    ? 'Thêm dự án mới'
                    : 'Thêm pháp nhân mới'}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
              {drawerType === 'chức danh' 
                ? 'Quản lý các chức danh trong tổ chức của bạn.' 
                : drawerType === 'phòng ban'
                  ? 'Thêm phòng ban mới vào hệ thống.'
                  : drawerType === 'dự án'
                    ? 'Thêm dự án mới để quản lý hoạt động.'
                    : 'Thêm pháp nhân, công ty thành viên mới.'}
            </p>
          </div>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body (Form) */}
        <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
          {error && (
            <div style={{ backgroundColor: '#fee2e2', border: '1px solid #fca5a5', color: '#ef4444', borderRadius: '6px', padding: '10px 12px', fontSize: '0.85rem', marginBottom: '16px' }}>
              {error}
            </div>
          )}

          {drawerType === 'dự án' ? (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Tên dự án <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Dự án Lavie..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Mã dự án <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ví dụ: LAV-01..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Quản trị viên <span style={{ color: '#ef4444' }}>*</span></label>
                <div style={{ position: 'relative' }}>
                  <select 
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}
                  >
                    <option value="">Chọn quản trị viên</option>
                    <option value="Nguyen Duc Long">Nguyen Duc Long</option>
                    <option value="Le Van Cuong">Le Van Cuong</option>
                    <option value="Tran Thi Bich">Tran Thi Bich</option>
                    <option value="Pham Minh Anh">Pham Minh Anh</option>
                    <option value="Hoang Van Kien">Hoang Van Kien</option>
                    <option value="Le Thi Huong">Le Thi Huong</option>
                  </select>
                  <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Số điện thoại</label>
                <input 
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Ngày kích hoạt</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>
            </>
          ) : drawerType === 'pháp nhân' ? (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Tên pháp nhân <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Công ty Cổ phần Công nghệ Sao Việt..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Mã pháp nhân <span style={{ color: '#ef4444' }}>*</span></label>
                  <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="SV-HQ" 
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Tỉnh/Thành phố <span style={{ color: '#ef4444' }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}>
                      <option>TP. HCM</option>
                      <option>Hà Nội</option>
                      <option>Đà Nẵng</option>
                      <option>Bình Dương</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Số điện thoại</label>
                  <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="028 1234 5678" 
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Người phụ trách</label>
                  <div style={{ position: 'relative' }}>
                    <select 
                      value={manager}
                      onChange={(e) => setManager(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}
                    >
                      <option value="">Chọn nhân sự</option>
                      <option value="Nguyen Duc Long">Nguyen Duc Long</option>
                      <option value="Le Van Cuong">Le Van Cuong</option>
                      <option value="Tran Thi Bich">Tran Thi Bich</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>
            </>
          ) : drawerType === 'phòng ban' ? (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Tên phòng ban <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên phòng ban..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>
              
              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Khối/Dự án</label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}>
                      <option>Khối CNTT</option>
                      <option>Dự án ERP</option>
                      <option>Không có</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Phòng ban cha</label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}>
                      <option>Chọn phòng ban cha</option>
                      <option>Công nghệ</option>
                      <option>Nhân sự</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Mã phòng ban <span style={{ color: '#ef4444' }}>*</span></label>
                  <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Nhập mã..." 
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Người phụ trách</label>
                  <div style={{ position: 'relative' }}>
                    <select 
                      value={manager}
                      onChange={(e) => setManager(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}
                    >
                      <option value="">Chọn nhân sự</option>
                      <option value="Tran Thi Bich">Tran Thi Bich</option>
                      <option value="Le Van Cuong">Le Van Cuong</option>
                      <option value="Pham Minh Anh">Pham Minh Anh</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f766e', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>THÔNG TIN CƠ BẢN</div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Tên chức danh <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Trưởng phòng Kinh doanh..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Mã chức danh <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ví dụ: CD-001..." 
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none' }} 
                />
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f766e', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>PHÂN LOẠI & PHÂN CẤP</div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Cấp bậc</label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}>
                      <option>Quản lý</option>
                      <option>Chuyên viên</option>
                      <option>Nhân viên</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Nhóm nghề nghiệp</label>
                  <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', appearance: 'none', outline: 'none', color: '#1e293b' }}>
                      <option>Kinh doanh</option>
                      <option>Kỹ thuật</option>
                      <option>Hành chính</option>
                    </select>
                    <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f766e', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.5px' }}>MÔ TẢ CÔNG VIỆC (JD)</div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Chi tiết mô tả</label>
                <textarea rows="4" placeholder="Nhập chi tiết nhiệm vụ, trách nhiệm..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              <div style={{ border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '24px', textAlign: 'center', backgroundColor: '#f8fafc', cursor: 'pointer' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Tải lên file JD (PDF, DOCX)</span>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        <div style={{ padding: '20px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button 
            type="button"
            onClick={onClose}
            style={{ padding: '10px 16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#475569', cursor: 'pointer' }}
          >
            Hủy
          </button>
          <button type="submit" style={{ padding: '10px 16px', backgroundColor: '#0f766e', border: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', cursor: 'pointer' }}>
            Lưu thông tin
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default OrganizationDrawer;
