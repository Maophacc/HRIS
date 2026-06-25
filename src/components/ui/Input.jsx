import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const styles = {
  formField: { display: 'flex', flexDirection: 'column', gap: 7, color: '#334155', fontSize: 14, fontWeight: 800 },
  inputWrap: { minHeight: 44, border: '1px solid #cfdbe8', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', width: '100%', boxSizing: 'border-box', position: 'relative' },
  inputField: { border: 0, outline: 0, flex: 1, font: 'inherit', fontWeight: 400, width: '100%', background: 'transparent' },
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

const Input = ({ label, value, defaultValue, placeholder = '', suffix, type, onChange, ...props }) => {
  if (type === 'date') {
    const [currentVal, setCurrentVal] = useState('');

    useEffect(() => {
      const initialVal = value !== undefined ? value : (defaultValue || '');
      setCurrentVal(initialVal);
    }, [value, defaultValue]);

    const handleDateChange = (e) => {
      const isoVal = e.target.value;
      const formatted = formatDate(isoVal);
      setCurrentVal(formatted);
      if (onChange) {
        onChange({
          target: {
            value: formatted,
            name: props.name
          }
        });
      }
    };

    const isoDate = toISODate(currentVal);
    const displayDate = formatDate(currentVal);

    return (
      <label style={styles.formField}>
        <span>{renderLabel(label)}</span>
        <div style={{ ...styles.inputWrap, cursor: 'pointer' }}>
          <input
            type="text"
            readOnly
            value={displayDate}
            placeholder={placeholder}
            style={{ ...styles.inputField, cursor: 'pointer' }}
            {...props}
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
      <div style={styles.inputWrap}>
        <input defaultValue={defaultValue !== undefined ? defaultValue : value} placeholder={placeholder} style={styles.inputField} type={type} onChange={onChange} {...props} />
        {suffix && <b>{suffix}</b>}
      </div>
    </label>
  );
};

export default Input;

