import React from 'react';
import { Check } from 'lucide-react';

const wizardSteps = ['Cá nhân', 'Công việc', 'Hợp đồng', 'Bảo hiểm', 'Thông tin Thuế', 'Ngân hàng', 'Tài liệu', 'Rà soát'];

const styles = {
  stepper: { display: 'flex', alignItems: 'center', gap: 30, borderBottom: '1px solid #dce6f0', marginBottom: 28, overflowX: 'auto', paddingBottom: 10 },
  stepItem: { display: 'inline-flex', alignItems: 'center', gap: 9, border: 0, borderBottom: '2px solid transparent', background: 'transparent', color: '#94a3b8', padding: '0 0 10px', fontSize: 15, fontWeight: 800, cursor: 'pointer', whiteSpace: 'nowrap' },
  stepActive: { color: '#49ad17', borderBottomColor: '#49ad17' },
  stepCircle: { width: 28, height: 28, borderRadius: 999, display: 'grid', placeItems: 'center', background: '#eaf0f6', color: '#94a3b8', fontWeight: 900 },
  stepActiveCircle: { background: '#dff3d9', color: '#49ad17', outline: '3px solid #eff9ec' },
  stepDoneCircle: { background: '#49ad17', color: '#fff' },
};

const WizardStepper = ({ step, setStep }) => (
  <div style={styles.stepper}>
    {wizardSteps.map((label, index) => {
      const number = index + 1;
      const done = number < step;
      const active = number === step;
      return (
        <button key={label} onClick={() => setStep(number)} style={{ ...styles.stepItem, ...(active ? styles.stepActive : {}) }}>
          <span style={{ ...styles.stepCircle, ...(done ? styles.stepDoneCircle : {}), ...(active ? styles.stepActiveCircle : {}) }}>
            {done ? <Check size={17} /> : number}
          </span>
          {label}
        </button>
      );
    })}
  </div>
);

export default WizardStepper;
