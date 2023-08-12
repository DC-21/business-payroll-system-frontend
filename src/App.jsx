import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings"
import Department from "./pages/Department";
import Home from "./pages/Home";

const App = () => {
  return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/departments" element={<Department />} />
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
      </div>
  );
};

export default App;
