import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings"
import Recruit from "./components/Recruit";
import Reports from "./components/Reports";
import Department from "./pages/Department";
import Home from "./pages/Home";
import Payroll from "./components/Payroll";
import Billing from "./components/Billing";
import Calendar from "./components/Calendar";

const App = () => {
  return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/payroll" element={<Payroll/>}/>
            <Route path="/recruit" element={<Recruit/>}/>
            <Route path="/reports" element={<Reports/>}/>
            <Route path="/billing" element={<Billing/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/departments" element={<Department />} />
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
  );
};

export default App;
