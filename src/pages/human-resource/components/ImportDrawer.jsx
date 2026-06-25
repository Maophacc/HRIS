import React from 'react';
import { X, Download } from 'lucide-react';
import ImportStepper from './ImportStepper';
import ImportUpload from './ImportUpload';
import ImportPreview from './ImportPreview';
import ImportResult from './ImportResult';

const styles = {
  drawerLayer: { position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' },
  drawerScrim: { position: 'absolute', inset: 0, background: 'rgba(15,23,42,.42)' },
  importDrawer: { position: 'relative', width: 820, maxWidth: '92vw', background: '#fff', height: '100%', boxShadow: '-20px 0 44px rgba(15,23,42,.22)', display: 'flex', flexDirection: 'column' },
  drawerHeader: { height: 104, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 38px', borderBottom: '1px solid #e5edf5' },
  closeButton: { border: 0, background: 'transparent', color: '#94a3b8', cursor: 'pointer' },
  drawerBody: { flex: 1, overflow: 'auto', padding: '0 38px 38px' },
  drawerFooter: { minHeight: 96, borderTop: '1px solid #e5edf5', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14, padding: '0 38px' },
  primaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 42, border: 0, borderRadius: 7, padding: '0 18px', background: '#00796b', color: '#fff', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 40, border: '1px solid #cfdbe8', borderRadius: 7, padding: '0 16px', background: '#fff', color: '#334155', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  dangerOutline: { display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid #fecaca', borderRadius: 8, background: '#fff', color: '#ef4444', padding: '0 20px', minHeight: 52, fontWeight: 900, cursor: 'pointer' },
};

const ImportDrawer = ({ step, setStep, onClose }) => (
  <div style={styles.drawerLayer}>
    <div style={styles.drawerScrim} onClick={onClose} />
    <aside style={styles.importDrawer}>
      <div style={styles.drawerHeader}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Nhập nhân viên từ Excel</h2>
        <button style={styles.closeButton} onClick={onClose}><X size={24} /></button>
      </div>
      <ImportStepper step={step} />
      <div style={styles.drawerBody}>
        {step === 1 && <ImportUpload />}
        {step === 2 && <ImportPreview />}
        {step === 3 && <ImportResult />}
      </div>
      <div style={styles.drawerFooter}>
        <button style={styles.secondaryButton} onClick={step === 1 ? onClose : () => setStep(step - 1)}>{step === 1 ? 'Hủy' : 'Quay lại'}</button>
        {step === 1 && <button style={styles.primaryButton} onClick={() => setStep(2)}>Tiếp tục</button>}
        {step === 2 && <button style={styles.primaryButton} onClick={() => setStep(3)}>Nhập dữ liệu</button>}
        {step === 3 && (
          <>
            <button style={styles.dangerOutline}><Download size={17} /> Tải file lỗi</button>
            <button style={styles.primaryButton} onClick={() => setStep(1)}>Nhập file khác</button>
          </>
        )}
      </div>
    </aside>
  </div>
);

export default ImportDrawer;
