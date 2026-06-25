import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Calculator, DollarSign, TrendingUp, Download, Check, Edit2 } from 'lucide-react';

const Salary = () => {
  const { employees } = useAppContext();
  const [workData, setWorkData] = useState({});
  const [editingId, setEditingId] = useState(null);

  const handleUpdate = (id, field, value) => {
    setWorkData({
      ...workData,
      [id]: {
        ...(workData[id] || { hours: 160, bonus: 0, penalty: 0 }),
        [field]: Number(value)
      }
    });
  };

  const calculateTotal = (emp) => {
    const data = workData[emp.id] || { hours: 160, bonus: 0, penalty: 0 };
    return (emp.salary + data.bonus) - data.penalty;
  };

  const totalPayroll = employees.reduce((acc, emp) => acc + calculateTotal(emp), 0);

  return (
    <div className="container">
      <div className="page-header">
        <div style={{ textAlign: 'left' }}>
          <h1 className="page-title">Bảng lương & Chấm công</h1>
          <p className="page-subtitle">Tính toán thu nhập thực tế của nhân viên hàng tháng</p>
        </div>
        <button className="btn btn-primary">
          <Download size={20} />
          Xuất báo cáo PDF
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
          <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '16px' }}>
            <DollarSign size={28} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Tổng quỹ lương</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{totalPayroll.toLocaleString()} VNĐ</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
          <div style={{ padding: '16px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', borderRadius: '16px' }}>
            <Calculator size={28} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Trung bình / Người</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{(totalPayroll / (employees.length || 1)).toLocaleString()} VNĐ</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
          <div style={{ padding: '16px', background: 'rgba(0, 128, 128, 0.1)', color: '#008080', borderRadius: '16px' }}>
            <TrendingUp size={28} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Nhân sự đã tính</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{employees.length} Thành viên</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <div className="table-container">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                <th>Nhân viên</th>
                <th>Lương cứng</th>
                <th>Giờ làm</th>
                <th>Thưởng</th>
                <th>Khấu trừ</th>
                <th>Thực nhận</th>
                <th style={{ textAlign: 'right' }}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => {
                const data = workData[emp.id] || { hours: 160, bonus: 0, penalty: 0 };
                const isEditing = editingId === emp.id;
                return (
                  <tr key={emp.id}>
                    <td style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 600, fontSize: '1rem' }}>{emp.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{emp.department}</div>
                    </td>
                    <td style={{ fontWeight: 500 }}>{emp.salary.toLocaleString()}</td>
                    <td>
                      <input 
                        type="number" 
                        disabled={!isEditing}
                        style={{ width: '80px', border: isEditing ? '1px solid var(--primary)' : 'none', background: isEditing ? 'white' : 'transparent', padding: '4px' }} 
                        value={data.hours}
                        onChange={e => handleUpdate(emp.id, 'hours', e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        disabled={!isEditing}
                        style={{ width: '100px', border: isEditing ? '1px solid var(--primary)' : 'none', background: isEditing ? 'white' : 'transparent', padding: '4px' }} 
                        value={data.bonus}
                        onChange={e => handleUpdate(emp.id, 'bonus', e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        disabled={!isEditing}
                        style={{ width: '100px', border: isEditing ? '1px solid var(--primary)' : 'none', background: isEditing ? 'white' : 'transparent', padding: '4px' }} 
                        value={data.penalty}
                        onChange={e => handleUpdate(emp.id, 'penalty', e.target.value)}
                      />
                    </td>
                    <td style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.05rem' }}>
                      {calculateTotal(emp).toLocaleString()} VNĐ
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button 
                        onClick={() => setEditingId(isEditing ? null : emp.id)} 
                        className={`btn ${isEditing ? 'btn-primary' : 'btn-edit'}`} 
                        style={{ padding: '8px 12px', display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                      >
                        {isEditing ? <Check size={18} /> : <Edit2 size={18} />}
                        {isEditing ? 'Lưu' : 'Sửa'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Salary;
