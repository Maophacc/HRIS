import React from 'react';

const StatCard = ({ title, value, icon: Icon, color = '#0f172a' }) => {
  const styles = {
    statCard: { height: 104, background: '#fff', border: '1px solid #dde7f2', borderRadius: 9, boxShadow: '0 1px 4px rgba(15,23,42,.06)', padding: 18, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }
  };
  return (
    <article style={styles.statCard}>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: 13, color: '#64748b' }}>{title}</p>
        <strong style={{ color, fontSize: 24, fontWeight: 800 }}>{value}</strong>
      </div>
      <Icon size={30} color={`${color}55`} />
    </article>
  );
};

export default StatCard;
