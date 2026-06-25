import React from 'react';
import { ChevronDown } from 'lucide-react';

const styles = {
  formField: { display: 'flex', flexDirection: 'column', gap: 7, color: '#334155', fontSize: 14, fontWeight: 800 },
  inputWrap: { minHeight: 44, border: '1px solid #cfdbe8', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', width: '100%', boxSizing: 'border-box' },
  inputField: { border: 0, outline: 0, flex: 1, font: 'inherit', fontWeight: 400, width: '100%', background: 'transparent' },
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

const SelectInput = ({ label, value, ...props }) => (
  <label style={styles.formField}>
    <span>{renderLabel(label)}</span>
    <div style={styles.inputWrap}>
      <input defaultValue={value} style={styles.inputField} {...props} />
      <ChevronDown size={18} color="#94a3b8" />
    </div>
  </label>
);

export default SelectInput;
