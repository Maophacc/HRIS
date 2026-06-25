import React from 'react';

const styles = {
  wizardAside: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 8, padding: 24, height: 'fit-content', boxShadow: '0 1px 4px rgba(15,23,42,.05)' },
  asideTitleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  progressBar: { height: 8, borderRadius: 999, background: '#edf2f7', overflow: 'hidden', margin: '16px 0 28px' },
};

const WizardAside = ({ step }) => {
  const info = {
    1: ['Bước 1: Cá nhân', 'Xác minh danh tính, liên hệ và CCCD của nhân viên.', ['Họ và tên', 'Ngày sinh', 'Số điện thoại', 'Số CCCD']],
    2: ['Bước 2: Công việc', 'Cập nhật thông tin về vị trí, phòng ban, quản lý và các chi tiết liên quan đến công việc.', ['Mã nhân viên', 'Phòng ban', 'Chức danh', 'Ngày vào làm']],
    3: ['Bước 3: Hợp đồng', 'Cập nhật thông tin hợp đồng lao động, mức lương và thời gian làm việc của nhân viên.', ['Loại hợp đồng', 'Số hợp đồng', 'Ngày bắt đầu', 'Lương cơ bản']],
    4: ['Bước 4: Thông Tin Bảo Hiểm', 'Cập nhật thông tin bảo hiểm và các loại bảo hiểm bắt buộc để phục vụ công tác tính lương và trích nộp.', ['Mức lương đóng bảo hiểm mặc định được lấy từ hợp đồng.']],
    5: ['Bước 5: Thông tin Thuế', 'Cập nhật thông tin mã số thuế cá nhân và danh sách người phụ thuộc để giảm trừ gia cảnh TNCN.', ['Người lao động có MST cá nhân được giảm trừ gia cảnh 11.000.000 đ/tháng.', 'Mỗi người phụ thuộc được giảm trừ 4.400.000 đ/tháng khi đăng ký.']],
    6: ['Tiến trình thiết lập', 'Hoàn thành 5/8 bước', ['1. Thông tin chung', '2. Chi tiết nhân sự', '3. Thông tin liên hệ', '4. Gia đình & Khẩn cấp', '5. Ngân hàng']],
  }[step] || ['Thiết lập hồ sơ', 'Hoàn tất thông tin nhân sự.', []];

  const isWarningStyle = step === 4 || step === 5;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <aside style={styles.wizardAside}>
        <div style={styles.asideTitleRow}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, textAlign: 'left' }}>{info[0]}</h2>
          {step < 6 && <span style={{ color: '#ef4444', fontSize: 12, fontWeight: 700 }}>Chưa kiểm tra</span>}
        </div>
        <p style={{ color: '#64748b', fontSize: 13, margin: '8px 0 16px', textAlign: 'left', lineHeight: '1.4' }}>{info[1]}</p>
        {step === 6 ? (
          <div style={styles.progressBar}><span style={{ display: 'block', height: '100%', width: '75%', background: '#49ad17' }} /></div>
        ) : !isWarningStyle ? (
          <>
            <h3 style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', color: '#64748b', margin: '0 0 12px', textAlign: 'left' }}>Trường bắt buộc</h3>
            <ul style={{ paddingLeft: 20, margin: 0, color: '#334155', fontSize: 13, display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left', lineHeight: '1.4' }}>
              {info[2].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </>
        ) : null}
      </aside>

      {isWarningStyle && (
        <div style={{
          background: '#fffbeb',
          border: '1px solid #fef3c7',
          borderRadius: 8,
          padding: 20,
          textAlign: 'left',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: '#b45309', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            {step === 4 ? 'LƯU Ý QUAN TRỌNG' : 'Lưu ý thông tin Thuế'}
          </h3>
          <ul style={{ paddingLeft: 18, margin: 0, color: '#b45309', fontSize: 13, display: 'flex', flexDirection: 'column', gap: 8, lineHeight: '1.4' }}>
            {info[2].map((item) => (
              <li key={item} style={{ listStyleType: 'disc' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WizardAside;
