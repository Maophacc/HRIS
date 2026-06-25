import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import HumanResource from "./pages/human-resource/HumanResource";
import EmployeeDetail from "./pages/human-resource/EmployeeDetail";
import Salary from "./pages/salary/Salary";
import Proposal from "./pages/proposal/Proposal";
import Jobtik from "./pages/jobtik/Jobtik";
import Overview from "./pages/Overview/Overview";
import Organization from "./pages/organization/Organization";
import Contracts from "./pages/contracts/Contracts";

function App() {
  const { user } = useAppContext();

  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page is kept at 100% zoom (no zoom-80 wrapper) */}
        <Route path="/" element={<Home />} />

        {/* All other app routes are zoomed to 80% */}
        <Route element={<div className="zoom-80"><div style={{ width: '80%', minHeight: '125vh', display: 'flex', flexDirection: 'column' }}><Outlet /></div></div>}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/human-resource" element={<HumanResource />} />
          <Route path="/human-resource/:id" element={<EmployeeDetail />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/salary" element={<Salary />} />
                <Route path="/proposal" element={<Proposal />} />
                <Route path="/jobtik" element={<Jobtik />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Layout>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
