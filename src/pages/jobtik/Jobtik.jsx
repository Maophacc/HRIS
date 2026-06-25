import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Plus, CheckCircle, Clock, AlertTriangle, Edit2, Trash2 } from 'lucide-react';

const Jobtik = () => {
  const { tasks, setTasks } = useAppContext();
  const [showAdd, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [taskForm, setTaskForm] = useState({ title: '', status: 'In Progress', progress: 0, deadline: '' });

  const handleAction = (e) => {
    e.preventDefault();
    if (editingId) {
      setTasks(tasks.map(t => t.id === editingId ? { ...taskForm, id: editingId } : t));
      setEditingId(null);
    } else {
      setTasks([{ ...taskForm, id: Date.now() }, ...tasks]);
    }
    setTaskForm({ title: '', status: 'In Progress', progress: 0, deadline: '' });
    setShowAdd(false);
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setTaskForm(task);
    setShowAdd(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Xóa công việc này?')) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <div style={{ textAlign: 'left' }}>
          <h1 className="page-title">Bảng công việc</h1>
          <p className="page-subtitle">Theo dõi và quản lý tiến độ thực hiện dự án</p>
        </div>
        <button className="btn btn-primary" onClick={() => { setShowAdd(!showAdd); setEditingId(null); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <Plus size={20} />
          {showAdd ? 'Đóng' : 'Thêm công việc'}
        </button>
      </div>

      {showAdd && (
        <div className="card" style={{ marginBottom: '32px' }}>
          <h3 style={{ marginTop: 0, textAlign: 'left' }}>{editingId ? 'Chỉnh sửa công việc' : 'Tạo công việc mới'}</h3>
          <form onSubmit={handleAction} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div className="input-group" style={{ gridColumn: 'span 2', textAlign: 'left' }}>
              <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Tên công việc</label>
              <input type="text" value={taskForm.title} onChange={e => setTaskForm({...taskForm, title: e.target.value})} required style={{ width: '100%', boxSizing: 'border-box' }} />
            </div>
            <div className="input-group" style={{ textAlign: 'left' }}>
              <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Trạng thái</label>
              <select value={taskForm.status} onChange={e => setTaskForm({...taskForm, status: e.target.value})} style={{ width: '100%', boxSizing: 'border-box' }}>
                <option value="In Progress">Đang thực hiện</option>
                <option value="Completed">Đã hoàn thành</option>
                <option value="On Hold">Tạm dừng</option>
              </select>
            </div>
            <div className="input-group" style={{ textAlign: 'left' }}>
              <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Hạn chót</label>
              <input type="date" value={taskForm.deadline} onChange={e => setTaskForm({...taskForm, deadline: e.target.value})} required style={{ width: '100%', boxSizing: 'border-box' }} />
            </div>
            <div className="input-group" style={{ gridColumn: 'span 2', textAlign: 'left' }}>
              <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Tiến độ: {taskForm.progress}%</label>
              <input type="range" min="0" max="100" value={taskForm.progress} onChange={e => setTaskForm({...taskForm, progress: e.target.value})} style={{ width: '100%' }} />
            </div>
            <div style={{ gridColumn: 'span 2', display: 'flex', gap: '12px' }}>
              <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer' }}>{editingId ? 'Cập nhật' : 'Xác nhận thêm'}</button>
              <button type="button" className="btn btn-edit" onClick={() => { setShowAdd(false); setEditingId(null); }} style={{ cursor: 'pointer' }}>Hủy</button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
        {tasks.map(task => (
          <div key={task.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className={`status-badge ${task.status === 'Completed' ? 'status-approved' : task.status === 'On Hold' ? 'status-rejected' : 'status-pending'}`}>
                {task.status}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => startEdit(task)} className="btn btn-edit" style={{ padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Edit2 size={14} /></button>
                <button onClick={() => handleDelete(task.id)} className="btn btn-danger" style={{ padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={14} /></button>
              </div>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', textAlign: 'left' }}>{task.title}</h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Tiến độ</span>
                <span>{task.progress}%</span>
              </div>
              <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${task.progress}%`, background: 'linear-gradient(90deg, #008080 0%, #00a89a 100%)', transition: 'width 0.3s' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
              <Clock size={14} />
              <span>Hạn: {task.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobtik;
