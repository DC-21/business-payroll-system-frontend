import logo from "../images/logo.png";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-[170px] sticky left-0 bg-white items-center flex px-2 py-2 justify-between flex-col">
      <div className="justify-center rounded bg-blue-950 w-full flex">
        <img className="h-[95px] w-[100px]" src={logo} alt="logo" />
      </div>
      <div className="justify-center items-center h-[576px] w-full py-2">
        <div className="justify-between rounded bg-blue-950 py-4 flex flex-col w-full h-full items-center">
          <li className="list-none flex flex-col gap-2">
            <NavLink to="/" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="grid-outline"></ion-icon>
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/payroll" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="wallet-outline"></ion-icon>
              <p>Payroll</p>
            </NavLink>
            <NavLink to="/recruit" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="person-add-outline"></ion-icon>
              <p>Recruit</p>
            </NavLink>
            <NavLink to="/reports" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="receipt-outline"></ion-icon>
              <p>Reports</p>
            </NavLink>
            <NavLink to="/billing" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="card-outline"></ion-icon>
              <p>Billing</p>
            </NavLink>
            <NavLink to="/calendar" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="calendar-outline"></ion-icon>
              <p>Calendar</p>
            </NavLink>
            <NavLink to="/departments" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="list-circle-outline"></ion-icon>
              <p>Departments</p>
            </NavLink>
            <NavLink to="/settings" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="settings-outline"></ion-icon>
              <p>Settings</p>
            </NavLink>
          </li>
          <li className="list-none">
          <a className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start mr-9">
              <ion-icon size="large" name="log-out-outline"></ion-icon>
              <p>Logout</p>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
