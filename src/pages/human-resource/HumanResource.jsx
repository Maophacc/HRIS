import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { formatDate } from '../../data/employeeProfiles';
import TopNavbar from '../../components/layout/TopNavbar';
import EmployeeList from './components/EmployeeList';
import CreateEmployeeWizard from './components/CreateEmployeeWizard';
import ImportDrawer from './components/ImportDrawer';

const HumanResource = () => {
  const navigate = useNavigate();
  const { employees } = useAppContext();
  const [view, setView] = useState('list');
  const [wizardStep, setWizardStep] = useState(1);
  const [importOpen, setImportOpen] = useState(false);
  const [importStep, setImportStep] = useState(1);
  const [activeStatus, setActiveStatus] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const listEmployees = useMemo(
    () =>
      employees.map((e) => ({
        ...e,
        code: e.empCode,
        project: e.department,
        dob: formatDate(e.birthDate),
        contract: e.jobType,
        startDate: formatDate(e.startDate),
      })),
    [employees],
  );

  const filteredEmployees = useMemo(() => {
    return listEmployees.filter((employee) => {
      const keyword = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !keyword ||
        employee.name.toLowerCase().includes(keyword) ||
        employee.code.toLowerCase().includes(keyword);
      const matchesStatus = activeStatus === 'Tất cả' || employee.status === activeStatus;
      return matchesSearch && matchesStatus;
    });
  }, [activeStatus, searchTerm, listEmployees]);

  const workingCount = employees.filter((e) => e.status === 'Đang làm').length;
  const trialCount = employees.filter((e) => e.status === 'Thử việc').length;

  const openCreate = () => {
    setWizardStep(1);
    setView('create');
  };

  const openImport = () => {
    setImportStep(1);
    setImportOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f6f9fc', color: '#334155', fontFamily: 'Be Vietnam Pro, sans-serif', fontSize: 14 }}>
      <TopNavbar activeTab="Nhân sự" />
      {view === 'list' ? (
        <EmployeeList
          activeStatus={activeStatus}
          filteredEmployees={filteredEmployees}
          onCreate={openCreate}
          onImport={openImport}
          onSelect={(id) => navigate(`/human-resource/${id}`)}
          searchTerm={searchTerm}
          setActiveStatus={setActiveStatus}
          setSearchTerm={setSearchTerm}
          totalCount={employees.length}
          workingCount={workingCount}
          trialCount={trialCount}
        />
      ) : (
        <CreateEmployeeWizard
          step={wizardStep}
          setStep={setWizardStep}
          onCancel={() => setView('list')}
          onDone={() => setView('list')}
        />
      )}
      {importOpen && (
        <ImportDrawer
          step={importStep}
          setStep={setImportStep}
          onClose={() => setImportOpen(false)}
        />
      )}
    </div>
  );
};

export default HumanResource;
