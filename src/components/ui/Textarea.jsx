import React from 'react';

const styles = {
  formField: { display: 'flex', flexDirection: 'column', gap: 7, color: '#334155', fontSize: 14, fontWeight: 800 },
  textarea: { height: 88, border: '1px solid #cfdbe8', borderRadius: 6, resize: 'none', padding: 14, font: 'inherit', fontWeight: 400, width: '100%', boxSizing: 'border-box' },
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

const Textarea = ({ label, placeholder, ...props }) => (
  <label style={styles.formField}>
    <span>{renderLabel(label)}</span>
    <textarea placeholder={placeholder} style={styles.textarea} {...props} />
  </label>
);

export default Textarea;
