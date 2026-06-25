import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { User, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/')}>
          <svg width="130" height="56" viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="28" width="16" height="16" fill="#0ea5e9" />
            <rect x="38" y="28" width="16" height="16" fill="#0ea5e9" />
            <rect x="56" y="28" width="16" height="16" fill="#4b5563" />
            <rect x="56" y="10" width="16" height="16" fill="#e11d48" />
            <rect x="56" y="46" width="16" height="16" fill="#84cc16" />
            <rect x="74" y="28" width="16" height="16" fill="#eab308" />
            <text x="100" y="44" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="42" fontWeight="900" fill="#1f2937" letterSpacing="-0.5">GRSC</text>
            <text x="18" y="88" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="26" fontWeight="700" fill="#65a30d" letterSpacing="0.5">Green Speed</text>
            <text x="20" y="104" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="9.5" fontWeight="800" fill="#4b5563" letterSpacing="0.5">HR &amp; CO-PACKING SOLUTIONS</text>
          </svg>
        </div>
        
        <div className="search-container" style={{ flex: '0 1 350px' }}>
          <Search size={18} className="search-icon" />
          <input className="search-input" type="text" placeholder="Tìm nhân viên, hợp đồng, tài liệu..." />
        </div>
      </div>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '8px', position: 'relative' }}>
          <Bell size={20} />
          <div style={{ position: 'absolute', top: '0', right: '2px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></div>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '20px', borderLeft: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{user?.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user?.role}</div>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
            {user?.name?.charAt(0) || 'A'}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
