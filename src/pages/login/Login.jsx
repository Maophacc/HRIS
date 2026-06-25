import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      setError('');
      navigate('/home');
    } else {
      setError('Thông tin đăng nhập không chính xác. Vui lòng thử lại.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #d8f3ec 0%, #e2f5f1 40%, #ffffff 100%)', // Teal gradient
      fontFamily: 'Be Vietnam Pro, sans-serif',
      position: 'relative'
    }}>
      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '420px',
          background: '#ffffff',
          padding: '40px 36px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05), 0 20px 48px rgba(0, 0, 0, 0.05)'
        }}>
          {/* Logo Area */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px' }}>
              <svg width="260" height="112" viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg">
                {/* Cross logo elements */}
                <rect x="20" y="28" width="16" height="16" fill="#0ea5e9" />
                <rect x="38" y="28" width="16" height="16" fill="#0ea5e9" />
                <rect x="56" y="28" width="16" height="16" fill="#4b5563" />
                <rect x="56" y="10" width="16" height="16" fill="#e11d48" />
                <rect x="56" y="46" width="16" height="16" fill="#84cc16" />
                <rect x="74" y="28" width="16" height="16" fill="#eab308" />

                {/* Text GRSC */}
                <text x="100" y="44" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="42" fontWeight="900" fill="#1f2937" letterSpacing="-0.5">GRSC</text>

                {/* Green Speed */}
                <text x="18" y="88" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="26" fontWeight="700" fill="#65a30d" letterSpacing="0.5">Green Speed</text>

                {/* Subtitle */}
                <text x="20" y="104" fontFamily="'Be Vietnam Pro', sans-serif" fontSize="9.5" fontWeight="800" fill="#4b5563" letterSpacing="0.5">HR &amp; CO-PACKING SOLUTIONS</text>
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Tên đăng nhập</label>
              <input
                type="text"
                placeholder="Nhập mã nhân viên của bạn"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  boxSizing: 'border-box',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '8px', display: 'block', textAlign: 'left' }}>Mật khẩu</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  placeholder="password123"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    paddingRight: '40px',
                    boxSizing: 'border-box',
                    background: '#fff',
                    border: error ? '1px solid #f87171' : '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#f87171' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div style={{
                color: '#ef4444',
                fontSize: '0.75rem',
                marginBottom: '24px',
                marginTop: '6px',
                textAlign: 'left'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#00796b', // Teal main color
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: error ? '0' : '24px'
              }}
              onMouseOver={(e) => e.target.style.background = '#00695c'}
              onMouseOut={(e) => e.target.style.background = '#00796b'}
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>

      {/* Footer Area */}
      <div style={{
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ffffff',
        fontSize: '0.75rem',
        color: '#64748b'
      }}>
        <div>Copyright © 2020</div>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Bảo mật</a>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Điều khoản</a>
          <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Hỗ trợ</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
