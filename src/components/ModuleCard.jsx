import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

function ModuleCard({
  icon,
  title,
  description,
  iconColor,
  link,
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{ 
        background: '#ffffff', 
        padding: '24px 28px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onClick={() => navigate(link)}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div 
          style={{ 
            backgroundColor: `${iconColor}15`, 
            color: iconColor,
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </div>
        <div style={{ color: '#cbd5e1' }}>
          <ExternalLink size={20} />
        </div>
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 8px 0', color: '#1e293b' }}>{title}</h3>
      <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#64748b', margin: 0 }}>{description}</p>
    </div>
  );
}

export default ModuleCard;