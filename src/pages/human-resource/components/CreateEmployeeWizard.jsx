import React from 'react';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import WizardStepper from './WizardStepper';
import WizardAside from './WizardAside';
import WizardContent from './WizardContent';

const styles = {
  main: { padding: '26px 34px 104px', maxWidth: 1680, margin: '0 auto' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 7, color: '#718198', fontSize: 14, marginBottom: 12 },
  backLink: { display: 'inline-flex', alignItems: 'center', gap: 6, border: 0, background: 'transparent', color: '#718198', fontSize: 14, cursor: 'pointer' },
  createHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 22, marginBottom: 24 },
  pageTitle: { margin: 0, fontSize: 30, lineHeight: 1.15, fontWeight: 900, color: '#111827' },
  pageDesc: { margin: '8px 0 0', fontSize: 15, color: '#718198' },
  headerActions: { display: 'flex', gap: 14, alignItems: 'center' },
  primaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 42, border: 0, borderRadius: 7, padding: '0 18px', background: '#00796b', color: '#fff', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  greenButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 42, border: 0, borderRadius: 7, padding: '0 18px', background: '#49ad17', color: '#fff', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  secondaryButton: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 40, border: '1px solid #cfdbe8', borderRadius: 7, padding: '0 16px', background: '#fff', color: '#334155', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  singleWizardLayout: { display: 'block' },
  wizardLayout: { display: 'grid', gridTemplateColumns: '330px 1fr', gap: 28 },
  formCard: { background: '#fff', border: '1px solid #dde7f2', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px rgba(15,23,42,.05)', paddingBottom: 26 },
  stickyFooter: { position: 'fixed', left: 0, right: 0, bottom: 0, height: 74, background: '#fff', borderTop: '1px solid #e5edf5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px', zIndex: 60 },
  footerTextButton: { border: 0, background: 'transparent', color: '#475569', fontSize: 14, fontWeight: 800, cursor: 'pointer' },
  footerRight: { display: 'flex', gap: 12 },
};

const CreateEmployeeWizard = ({ step, setStep, onCancel, onDone }) => {
  const next = () => (step === 8 ? onDone() : setStep(step + 1));
  const previous = () => (step === 1 ? onCancel() : setStep(step - 1));

  return (
    <>
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <button style={styles.backLink} onClick={onCancel}><ArrowLeft size={18} /> Nhân sự</button>
          <span>›</span>
          <strong>Tạo nhân viên mới</strong>
        </div>
        <div style={styles.createHeader}>
          <div>
            <h1 style={styles.pageTitle}>{step === 7 ? 'Tạo hồ sơ nhân viên' : 'Tạo nhân viên mới'}</h1>
            <p style={styles.pageDesc}>Biểu mẫu nhiều bước giúp HR nhập hồ sơ đầy đủ nhưng không kéo dài trên một màn hình.</p>
          </div>
          {step === 6 && (
            <div style={styles.headerActions}>
              <button style={styles.secondaryButton}>Lưu nháp</button>
              <button style={styles.greenButton}>Hoàn thành & Tạo mới</button>
            </div>
          )}
        </div>
        <WizardStepper step={step} setStep={setStep} />
        <div style={step === 7 || step === 8 ? styles.singleWizardLayout : styles.wizardLayout}>
          {step !== 7 && step !== 8 && <WizardAside step={step} />}
          <div style={styles.formCard}>
            <WizardContent step={step} setStep={setStep} />
          </div>
        </div>
      </main>
      <footer style={styles.stickyFooter}>
        <button style={styles.footerTextButton} onClick={previous}>{step === 1 ? 'Hủy' : `← Quay lại bước ${step - 1}`}</button>
        <div style={styles.footerRight}>
          <button style={styles.secondaryButton}><Save size={18} /> Lưu nháp</button>
          <button style={styles.primaryButton} onClick={next}>{step === 8 ? 'Tạo nhân viên' : 'Tiếp tục'} <ArrowRight size={18} /></button>
        </div>
      </footer>
    </>
  );
};

export default CreateEmployeeWizard;
