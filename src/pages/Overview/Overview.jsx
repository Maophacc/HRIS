import React from 'react';
import { 
  Download, Plus, 
  Users, CheckCircle, Clock, AlertTriangle, 
  UserPlus, UserMinus, MoreHorizontal, Gift, 
  CheckSquare, History
} from 'lucide-react';
import TopNavbar from '../../components/layout/TopNavbar';
import MetricCard from './components/MetricCard';
import BarRow from './components/BarRow';
import TableRowAvatar from './components/TableRowAvatar';
import BirthdayRow from './components/BirthdayRow';
import TodoRow from './components/TodoRow';
import TimelineRow from './components/TimelineRow';

const Overview = () => {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Be Vietnam Pro, sans-serif' }}>
      <TopNavbar activeTab="Tổng quan" />

      {/* Main Content */}
      <div style={{ padding: '26px 34px 104px', maxWidth: '1680px', margin: '0 auto' }}>
        
        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>NHÂN SỰ LỖI</div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#334155', margin: '0 0 8px 0' }}>Tổng quan nhân sự</h1>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Theo dõi sức khỏe dữ liệu nhân sự, hợp đồng sắp hết hạn và các việc HR cần xử lý trong tháng.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#334155', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <Download size={16} /> Xuất báo cáo
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: '#0f766e', border: 'none', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', cursor: 'pointer', boxShadow: '0 1px 2px rgba(15,118,110,0.2)' }}>
              <Plus size={16} /> Tạo nhân viên
            </button>
          </div>
        </div>

        {/* 6 Key Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <MetricCard title="Tổng nhân viên" value="30" subtitle="Toàn công ty Sao Việt" icon={<Users size={20} color="#94a3b8" />} />
          <MetricCard title="Đang làm" value="21" subtitle="Nhân sự đang hoạt động" icon={<CheckCircle size={20} color="#10b981" />} />
          <MetricCard title="Thử việc" value="4" subtitle="Cần theo dõi đánh giá" subtitleColor="#f59e0b" icon={<Clock size={20} color="#f59e0b" />} />
          <MetricCard title="Hợp đồng sắp hết hạn" value="6" subtitle="Trong 45 ngày tới" subtitleColor="#ef4444" icon={<AlertTriangle size={20} color="#ef4444" />} />
          <MetricCard title="Nhân viên mới tháng này" value="4" subtitle="Vào làm trong tháng 05/2026" icon={<UserPlus size={20} color="#3b82f6" />} />
          <MetricCard title="Đã nghỉ" value="1" subtitle="Ghi nhận trong dữ liệu hiện tại" icon={<UserMinus size={20} color="#94a3b8" />} />
        </div>

        {/* Charts Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {/* Chart 1: Bar */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Nhân sự theo phòng ban</h3>
              <MoreHorizontal size={20} color="#94a3b8" cursor="pointer" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <BarRow label="CNTT" value={12} total={30} color="#10b981" />
              <BarRow label="Kinh doanh" value={8} total={30} color="#3b82f6" />
              <BarRow label="Kỹ thuật" value={6} total={30} color="#f59e0b" />
              <BarRow label="Nhân sự" value={4} total={30} color="#a855f7" />
            </div>
          </div>

          {/* Chart 2: Donut */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Phân bổ trạng thái</h3>
              <MoreHorizontal size={20} color="#94a3b8" cursor="pointer" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', position: 'relative' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '16px solid #94a3b8', borderTopColor: '#10b981', borderRightColor: '#f59e0b', borderBottomColor: '#3b82f6' }}></div>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#334155' }}>30</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Tổng số</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px', fontSize: '0.8rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div> Đang làm (21)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div> Thử việc (4)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }}></div> Nghỉ phép (2)</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#94a3b8' }}></div> Khác (3)</div>
            </div>
          </div>

          {/* Chart 3: Line (Placeholder) */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Vào làm và nghỉ việc</h3>
              <div style={{ fontSize: '0.8rem', color: '#64748b', backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>6 tháng qua ▾</div>
            </div>
            <div style={{ height: '140px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: '8px', padding: '0 10px' }}>
              {/* Dummy bars for chart */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '40px', backgroundColor: '#10b981', borderRadius: '3px' }}></div><span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>T12</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '60px', backgroundColor: '#10b981', borderRadius: '3px' }}></div><span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>T01</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '20px', backgroundColor: '#10b981', borderRadius: '3px' }}></div><span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>T02</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '50px', backgroundColor: '#10b981', borderRadius: '3px' }}></div><span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>T03</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '80px', backgroundColor: '#10b981', borderRadius: '3px' }}></div><span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>T04</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><div style={{ width: '6px', height: '30px', backgroundColor: '#10b981', borderRadius: '3px' }}></div><span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>T05</span></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '0.8rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div> Vào làm</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#94a3b8' }}></div> Nghỉ việc</div>
            </div>
          </div>
        </div>

        {/* Lists Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          {/* List 1 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} color="#ef4444" />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155', margin: 0 }}>Hợp đồng sắp hết hạn</h3>
                <span style={{ backgroundColor: '#fee2e2', color: '#ef4444', fontSize: '0.75rem', fontWeight: 600, padding: '2px 8px', borderRadius: '12px' }}>6</span>
              </div>
              <a href="#" style={{ color: '#0f766e', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Xem tất cả</a>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ color: '#94a3b8', borderBottom: '1px solid #f1f5f9', textAlign: 'left' }}>
                  <th style={{ paddingBottom: '12px', fontWeight: 500 }}>NHÂN VIÊN</th>
                  <th style={{ paddingBottom: '12px', fontWeight: 500 }}>MÃ HĐ</th>
                  <th style={{ paddingBottom: '12px', fontWeight: 500, textAlign: 'right' }}>NGÀY HẾT HẠN</th>
                </tr>
              </thead>
              <tbody>
                <TableRowAvatar name="Nguyễn Văn A" sub="NV" id="HD-2023-014" date="15/06/2026" color="#ef4444" />
                <TableRowAvatar name="Trần Thị B" sub="TB" id="HD-2023-015" date="20/06/2026" color="#ef4444" />
                <TableRowAvatar name="Lê Văn C" sub="LC" id="HD-2023-022" date="05/07/2026" color="#f59e0b" />
              </tbody>
            </table>
          </div>

          {/* List 2 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserPlus size={18} color="#3b82f6" />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155', margin: 0 }}>Nhân viên mới</h3>
                <span style={{ backgroundColor: '#dbeafe', color: '#3b82f6', fontSize: '0.75rem', fontWeight: 600, padding: '2px 8px', borderRadius: '12px' }}>4</span>
              </div>
              <a href="#" style={{ color: '#0f766e', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Xem tất cả</a>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ color: '#94a3b8', borderBottom: '1px solid #f1f5f9', textAlign: 'left' }}>
                  <th style={{ paddingBottom: '12px', fontWeight: 500 }}>NHÂN VIÊN</th>
                  <th style={{ paddingBottom: '12px', fontWeight: 500 }}>VỊ TRÍ</th>
                  <th style={{ paddingBottom: '12px', fontWeight: 500, textAlign: 'right' }}>NGÀY VÀO LÀM</th>
                </tr>
              </thead>
              <tbody>
                <TableRowAvatar name="Phạm Văn D" sub="PD" id="Lập trình viên" date="01/05/2026" />
                <TableRowAvatar name="Hoàng Thị E" sub="HE" id="Kế toán" date="05/05/2026" />
                <TableRowAvatar name="Đỗ Văn G" sub="DG" id="Nhân sự" date="10/05/2026" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '16px' }}>
          {/* Sinh nhật */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Gift size={18} color="#a855f7" />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Sinh nhật sắp tới</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <BirthdayRow day="22" month="T05" name="Nguyễn Văn H" dept="Kinh doanh" status="Ngày mai" />
              <BirthdayRow day="25" month="T05" name="Trần Lê K" dept="Kỹ thuật" status="4 ngày nữa" />
            </div>
          </div>

          {/* Việc cần xử lý */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckSquare size={18} color="#f59e0b" />
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Việc cần xử lý</h3>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '12px' }}>3 việc</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <TodoRow text="Xác minh tài liệu Phạm Văn D" sub="Chưa nộp bằng đại học" />
              <TodoRow text="Đánh giá thử việc Lê Văn M" sub="Đến hạn: 25/05/2026" subColor="#f59e0b" />
              <TodoRow text="Gia hạn hợp đồng Nguyễn Văn A" sub="Sắp hết hạn (15/06)" subColor="#ef4444" />
            </div>
          </div>

          {/* Hoạt động gần đây */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <History size={18} color="#64748b" />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', margin: 0 }}>Hoạt động gần đây</h3>
            </div>
            <div style={{ position: 'relative', borderLeft: '2px solid #e2e8f0', marginLeft: '8px', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <TimelineRow title="Thêm nhân viên mới" desc="Đỗ Văn G đã được thêm vào hệ thống • 1 giờ trước" dotColor="#10b981" />
              <TimelineRow title="Cập nhật phòng ban" desc="Chuyển 2 nhân sự sang phòng CNTT • 3 giờ trước" dotColor="#cbd5e1" />
              <TimelineRow title="Duyệt nghỉ phép" desc="Đã duyệt đơn nghỉ phép cho Lê Văn C • Hôm qua" dotColor="#cbd5e1" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
