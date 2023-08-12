import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Department from "./pages/Department";

const App = () => {
  return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/departments" element={<Department />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
