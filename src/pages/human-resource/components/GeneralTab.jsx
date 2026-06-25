import React from 'react';
import { User, Phone, Users, Banknote, Mail, MapPin } from 'lucide-react';
import { InfoCard, InfoRow, EmptyState } from './DetailHelpers';

const styles = {
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22 },
  contactGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 },
  contactCard: { border: '1px solid #e5edf5', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'left' },
  contactName: { fontSize: 15, fontWeight: 700 },
  contactRelation: { color: '#64748b', fontSize: 13 },
  contactPhone: { display: 'inline-flex', alignItems: 'center', gap: 6, color: '#00796b', fontWeight: 700, marginTop: 4 },
};

const GeneralTab = ({ profile, onEdit }) => (
  <div style={styles.cardsGrid}>
    <InfoCard title="Thông tin cá nhân" icon={User} onEdit={() => onEdit('personal')}>
      <InfoRow label="Ngày sinh" value={profile.dob} />
      <InfoRow label="Giới tính" value={profile.gender} />
      <InfoRow label="Quốc tịch" value={profile.nationality} />
      <InfoRow label="Tình trạng hôn nhân" value={profile.maritalStatus} />
      <InfoRow label="Số CCCD" value={profile.cccd} />
      <InfoRow label="Ngày cấp CCCD" value={profile.cccdIssueDate} />
      <InfoRow label="Nơi cấp CCCD" value={profile.cccdIssuePlace} />
    </InfoCard>

    <InfoCard title="Thông tin liên hệ" icon={Phone} onEdit={() => onEdit('contact')}>
      <InfoRow label="Số điện thoại" value={profile.phone} icon={Phone} />
      <InfoRow label="Email cá nhân" value={profile.personalEmail} icon={Mail} />
      <InfoRow label="Email công việc" value={profile.workEmail} icon={Mail} />
      <InfoRow label="Địa chỉ thường trú" value={profile.permanentAddress} icon={MapPin} />
      <InfoRow label="Địa chỉ tạm trú" value={profile.temporaryAddress} icon={MapPin} />
    </InfoCard>

    <InfoCard title="Gia đình & Liên hệ khẩn cấp" icon={Users} onEdit={() => onEdit('emergency')} wide>
      {profile.emergencyContacts.length === 0 ? (
        <EmptyState text="Chưa có liên hệ khẩn cấp" />
      ) : (
        <div style={styles.contactGrid}>
          {profile.emergencyContacts.map((c) => (
            <div key={c.phone} style={styles.contactCard}>
              <strong style={styles.contactName}>{c.name}</strong>
              <span style={styles.contactRelation}>{c.relation}</span>
              <span style={styles.contactPhone}><Phone size={14} /> {c.phone}</span>
            </div>
          ))}
        </div>
      )}
    </InfoCard>
  </div>
);

export default GeneralTab;
