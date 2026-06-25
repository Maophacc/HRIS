import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([
    { id: 1, empCode: "SV-0001", name: "Nguyen Duc Long", email: "long.nguyen@company.com", birthDate: "1988-02-01", cccd: "092179002393", position: "Trưởng phòng", department: "Kỹ thuật", jobType: "Chính thức", startDate: "2020-01-01", contractEndDate: "2025-12-31", status: "Đang làm", documents: 8, salary: 20000000 },
    { id: 2, empCode: "SV-0002", name: "Tran Thi Mai", email: "mai.tran@company.com", birthDate: "2000-01-03", cccd: "092193002363", position: "Chuyên viên", department: "Nhân sự", jobType: "Thử việc", startDate: "2021-05-15", contractEndDate: "2025-08-15", status: "Thử việc", documents: 5, salary: 15000000 },
    { id: 3, empCode: "SV-0003", name: "Nguyễn Văn An", email: "nguyen.van.an@saoviet.vn", birthDate: "2003-01-01", cccd: "091509002393", position: "Chuyên viên nhân sự", department: "Phòng Nhân sự", jobType: "Chính thức", startDate: "2024-01-08", contractEndDate: "2025-12-31", status: "Đang làm", documents: 6, salary: 25000000 },
    { id: 4, empCode: "SV-0004", name: "Le Thi Huong", email: "huong.le@company.com", birthDate: "1995-05-12", cccd: "093214002111", position: "Nhân viên", department: "Marketing", jobType: "Chính thức", startDate: "2019-11-20", contractEndDate: "2025-11-20", status: "Đang làm", documents: 9, salary: 14000000 },
    { id: 5, empCode: "SV-0005", name: "Pham Minh Duc", email: "duc.pham@company.com", birthDate: "1992-07-08", cccd: "091823002501", position: "Senior Developer", department: "Kỹ thuật", jobType: "Chính thức", startDate: "2020-06-01", contractEndDate: "2025-06-01", status: "Đang làm", documents: 7, salary: 22000000 },
    { id: 6, empCode: "SV-0006", name: "Vo Tran Hoai", email: "hoai.vo@company.com", birthDate: "1998-03-15", cccd: "092345002789", position: "Junior Developer", department: "Kỹ thuật", jobType: "Thử việc", startDate: "2024-01-10", contractEndDate: "2024-04-10", status: "Thử việc", documents: 4, salary: 12000000 },
    { id: 7, empCode: "SV-0007", name: "Dinh Thi Thanh", email: "thanh.dinh@company.com", birthDate: "1990-09-22", cccd: "091934002555", position: "HR Manager", department: "Nhân sự", jobType: "Chính thức", startDate: "2018-03-05", contractEndDate: "2025-03-05", status: "Đang làm", documents: 10, salary: 19000000 },
    { id: 8, empCode: "SV-0008", name: "Hoang Van Kien", email: "kien.hoang@company.com", birthDate: "2001-11-30", cccd: "092567002444", position: "Kế toán", department: "Tài chính", jobType: "Chính thức", startDate: "2021-08-15", contractEndDate: "2025-08-15", status: "Đang làm", documents: 6, salary: 16000000 },
    { id: 9, empCode: "SV-0009", name: "Bui Thi Ngan", email: "ngan.bui@company.com", birthDate: "1994-06-18", cccd: "092778002333", position: "Sales Executive", department: "Bán hàng", jobType: "Chính thức", startDate: "2020-09-01", contractEndDate: "2025-09-01", status: "Đang làm", documents: 7, salary: 17000000 },
    { id: 10, empCode: "SV-0010", name: "Tran Quoc Tuan", email: "tuan.tran@company.com", birthDate: "1999-04-05", cccd: "091989002222", position: "Intern", department: "Kỹ thuật", jobType: "Thử việc", startDate: "2024-02-01", contractEndDate: "2024-05-01", status: "Thử việc", documents: 2, salary: 10000000 },
  ]);
  const [proposals, setProposals] = useState([
    { id: 1, content: "Request new laptop", status: "Pending", date: "2024-05-10" },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix login bug", status: "In Progress", progress: 60, deadline: "2024-05-20" },
    { id: 2, title: "Update HR report", status: "Completed", progress: 100, deadline: "2024-05-15" },
  ]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser({ name: "Administrator", role: "admin" });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        employees,
        setEmployees,
        proposals,
        setProposals,
        tasks,
        setTasks,
        isSidebarCollapsed,
        toggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
