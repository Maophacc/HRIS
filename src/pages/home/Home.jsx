import React from 'react';
import ModuleCard from "../../components/ModuleCard";
import { Users, CreditCard, FileText, CheckSquare, ChevronDown } from "lucide-react";
import { useAppContext } from '../../context/AppContext';

function Home() {
  const { logout } = useAppContext();

  const modules = [
    { title: "Quản lý nhân sự", description: "Quản lý hồ sơ nhân viên, tổ chức, phòng ban và thông tin nhân sự cốt lõi.", icon: <Users size={24} />, iconColor: "#10b981", link: "/overview" },
    { title: "Công lương", description: "Theo dõi chấm công, bảng công, chu kỳ lương và dữ liệu phục vụ tính lương.", icon: <CreditCard size={24} />, iconColor: "#3b82f6", link: "/salary" },
    { title: "Đề xuất", description: "Xử lý các biểu mẫu đề xuất, phê duyệt và theo dõi trạng thái thực hiện.", icon: <FileText size={24} />, iconColor: "#f97316", link: "/proposal" },
    { title: "Jobtik", description: "Truy cập không gian vận hành công việc, giao việc và theo dõi tiến độ liên quan.", icon: <CheckSquare size={24} />, iconColor: "#8b5cf6", link: "/jobtik" },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '32px 48px', display: 'flex', flexDirection: 'column' }}>
      {/* Top Nav */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginBottom: '60px' }}>
        <button style={{
          background: 'white',
          border: '1px solid #e2e8f0',
          padding: '8px 16px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 500,
          color: '#475569'
        }}>
          VI <ChevronDown size={14} />
        </button>
        <button
          onClick={logout}
          style={{
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#475569'
          }}
        >
          Đăng xuất
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>Hệ thống</h2>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>Chọn module làm việc</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>Chọn phân hệ bạn muốn truy cập để bắt đầu làm việc.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          maxWidth: '860px',
          width: '100%'
        }}>
          {modules.map((m, i) => <ModuleCard key={i} {...m} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
