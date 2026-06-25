import React from 'react';
import { FileSpreadsheet, Download, UploadCloud } from 'lucide-react';

const styles = {
  templateBox: { border: '1px solid #dde7f2', borderRadius: 10, padding: 28, display: 'flex', gap: 22, background: '#fbfdff' },
  secondaryTeal: { display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid #00796b', borderRadius: 6, background: '#fff', color: '#00796b', padding: '12px 18px', fontWeight: 900, cursor: 'pointer' },
  drawerSectionTitle: { margin: '34px 0 16px', fontSize: '16px', fontWeight: 700 },
  dropZone: { minHeight: 320, border: '2px dashed #cfdbe8', borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#64748b' },
  note: { textAlign: 'center', color: '#718198', marginTop: 16 },
};

const ImportUpload = () => (
  <>
    <div style={styles.templateBox}>
      <FileSpreadsheet size={34} color="#00796b" />
      <div>
        <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700 }}>File mẫu nhân viên</h3>
        <p style={{ margin: '0 0 16px', color: '#64748b', fontSize: 13 }}>Sử dụng file mẫu để đảm bảo dữ liệu được định dạng chính xác trước khi tải lên hệ thống.</p>
        <button style={styles.secondaryTeal}><Download size={17} /> Tải file mẫu Excel</button>
      </div>
    </div>
    <h3 style={styles.drawerSectionTitle}>Tải file lên</h3>
    <div style={styles.dropZone}>
      <UploadCloud size={44} color="#94a3b8" />
      <strong style={{ color: '#1e293b' }}>Chọn file Excel .xlsx hoặc .xls</strong>
      <span>Kéo thả file vào đây hoặc <b>duyệt thư mục</b></span>
      <small>Kích thước tối đa: 10MB</small>
    </div>
    <p style={styles.note}>UI đang mô phỏng đọc file và dùng dữ liệu preview mẫu.</p>
  </>
);

export default ImportUpload;
