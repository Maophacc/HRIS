import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
  const { logout, isSidebarCollapsed } = useAppContext();
  const menuItems = [
    { icon: <Users size={18} />, label: 'Nhân sự', path: '/human-resource' },
  ];

  return (
    <div className={`vertical-menu ${!isSidebarCollapsed ? 'open' : ''}`}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `btn btn-ghost ${isActive ? 'active' : ''}`}>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
export default Sidebar;
