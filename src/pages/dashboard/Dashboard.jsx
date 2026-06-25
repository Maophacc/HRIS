import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { Users, CheckCircle, FileText, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const { employees, proposals, tasks } = useAppContext();

  const stats = [
    { label: 'Tổng nhân sự', value: employees.length, icon: <Users size={24} />, color: '#008080', bg: 'rgba(0, 128, 128, 0.1)' },
    { label: 'Công việc', value: tasks.length, icon: <CheckCircle size={24} />, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    { label: 'Đề xuất mới', value: proposals.filter(p => p.status === 'Pending').length, icon: <FileText size={24} />, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
    { label: 'Hiệu suất', value: '92%', icon: <TrendingUp size={24} />, color: '#ec4899', bg: 'rgba(236, 72, 153, 0.1)' },
  ];

  const deptData = employees.reduce((acc, emp) => {
    const dept = acc.find(d => d.name === emp.department);
    if (dept) dept.value++;
    else acc.push({ name: emp.department, value: 1 });
    return acc;
  }, []);

  const COLORS = ['#008080', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

  return (
    <div className="container">
      <div className="page-header">
        <div style={{ textAlign: 'left' }}>
          <h1 className="page-title">Tổng quan hệ thống</h1>
          <p className="page-subtitle">Thống kê dữ liệu vận hành thời gian thực</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
        {stats.map((s, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
            <div style={{ padding: '16px', background: s.bg, color: s.color, borderRadius: '16px' }}>
              {s.icon}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{s.label}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: '24px', textAlign: 'left' }}>Phân bổ nhân sự theo phòng ban</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(99, 102, 241, 0.05)'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {deptData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0, marginBottom: '24px', textAlign: 'left' }}>Tỉ lệ hoàn thành</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tasks}
                  dataKey="progress"
                  nameKey="title"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                >
                  {tasks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
