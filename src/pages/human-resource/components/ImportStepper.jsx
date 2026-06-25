import React from 'react';
import { Check } from 'lucide-react';

const styles = {
  importStepper: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 26, padding: '36px 38px' },
  importStep: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 },
  importCircle: { width: 48, height: 48, borderRadius: 999, display: 'grid', placeItems: 'center', background: '#f1f5f9', color: '#64748b', fontWeight: 900, border: '1px solid #cfdbe8' },
  importCircleActive: { background: '#00796b', color: '#fff', borderColor: '#00796b' },
};

const ImportStepper = ({ step }) => (
  <div style={styles.importStepper}>
    {['Tải tệp', 'Xem trước', 'Kết quả'].map((label, index) => {
      const number = index + 1;
      const done = number < step;
      const active = number === step;
      return (
        <div key={label} style={styles.importStep}>
          <span style={{ ...styles.importCircle, ...(active || done ? styles.importCircleActive : {}) }}>{done ? <Check size={18} /> : number}</span>
          <strong style={{ color: active ? '#00796b' : '#64748b', fontSize: 13 }}>{label}</strong>
        </div>
      );
    })}
  </div>
);

export default ImportStepper;
