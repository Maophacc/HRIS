import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Plus, Clock, CheckCircle, XCircle, Filter, Send, Edit2 } from 'lucide-react';

const Proposal = () => {
  const { proposals, setProposals } = useAppContext();
  const [newProposal, setNewProposal] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setProposals(proposals.map(p => p.id === editingId ? { ...p, content: newProposal } : p));
      setEditingId(null);
    } else {
      const id = proposals.length + 1;
      setProposals([
        { id, content: newProposal, status: 'Pending', date: new Date().toISOString().split('T')[0] },
        ...proposals
      ]);
    }
    setNewProposal('');
    setShowForm(false);
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setNewProposal(p.content);
    setShowForm(true);
  };

  const updateStatus = (id, status) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, status } : p));
  };

  return (
    <div className="container">
      <div className="page-header">
        <div style={{ textAlign: 'left' }}>
          <h1 className="page-title">Quản lý đề xuất</h1>
          <p className="page-subtitle">Phê duyệt hoặc từ chối các yêu cầu từ nhân viên</p>
        </div>
        <button className="btn btn-primary" onClick={() => { setShowForm(!showForm); setEditingId(null); setNewProposal(''); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <Plus size={20} />
          {showForm ? 'Đóng' : 'Tạo đề xuất mới'}
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: '32px' }}>
          <h3 style={{ marginTop: 0, textAlign: 'left' }}>{editingId ? 'Chỉnh sửa đề xuất' : 'Gửi đề xuất mới'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group" style={{ textAlign: 'left' }}>
              <label style={{ fontWeight: 600, marginBottom: '8px', display: 'block' }}>Nội dung chi tiết</label>
              <textarea 
                rows="4" 
                placeholder="Mô tả chi tiết yêu cầu của bạn..." 
                value={newProposal}
                onChange={e => setNewProposal(e.target.value)}
                required
                style={{ resize: 'none', width: '100%', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              <button type="submit" className="btn btn-primary" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer' }}>
                <Send size={18} />
                {editingId ? 'Cập nhật đề xuất' : 'Gửi yêu cầu ngay'}
              </button>
              <button type="button" className="btn btn-edit" onClick={() => { setShowForm(false); setEditingId(null); }} style={{ cursor: 'pointer' }}>Hủy bỏ</button>
            </div>
          </form>
        </div>
      )}

      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Lịch sử đề xuất</h3>
          <button className="btn btn-edit" style={{ width: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <Filter size={16} /> Lọc theo trạng thái
          </button>
        </div>
        <div>
          {proposals.map(p => (
            <div key={p.id} style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span className={`status-badge status-${p.status.toLowerCase()}`}>
                    {p.status === 'Pending' ? 'Đang chờ' : p.status === 'Approved' ? 'Đã duyệt' : 'Từ chối'}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{p.date}</span>
                </div>
                <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#334155', fontWeight: 400 }}>{p.content}</div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', marginLeft: '32px' }}>
                {p.status === 'Pending' && (
                  <>
                    <button onClick={() => updateStatus(p.id, 'Approved')} className="btn" style={{ background: '#dcfce7', color: '#166534', padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle size={20} />
                    </button>
                    <button onClick={() => updateStatus(p.id, 'Rejected')} className="btn" style={{ background: '#fee2e2', color: '#991b1b', padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <XCircle size={20} />
                    </button>
                    <button onClick={() => startEdit(p)} className="btn btn-edit" style={{ padding: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Edit2 size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
          {proposals.length === 0 && (
            <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Chưa có dữ liệu đề xuất.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proposal;
