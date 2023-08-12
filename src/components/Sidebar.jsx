import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-[170px] fixed left-0 bg-white items-center flex px-2 py-2 justify-between flex-col">
      <div className="justify-center rounded bg-blue-950 w-full flex">
        <img className="h-[95px] w-[100px]" src={logo} alt="logo" />
      </div>
      <div className="justify-center items-center h-[576px] w-full py-2">
        <div className="justify-between rounded bg-blue-950 py-4 flex flex-col w-full h-full items-center">
          <li className="list-none flex flex-col gap-2">
            <Link to="/" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="grid-outline"></ion-icon>
              <p>Dashboard</p>
            </Link>
            <Link to="/payroll" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="wallet-outline"></ion-icon>
              <p>Payroll</p>
            </Link>
            <Link to="/recruit" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="person-add-outline"></ion-icon>
              <p>Recruit</p>
            </Link>
            <Link to="/reports" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="receipt-outline"></ion-icon>
              <p>Reports</p>
            </Link>
            <Link to="/billing" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="card-outline"></ion-icon>
              <p>Billing</p>
            </Link>
            <Link to="/calendar" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="calendar-outline"></ion-icon>
              <p>Calendar</p>
            </Link>
            <Link to="/departments" className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="list-circle-outline"></ion-icon>
              <p>Departments</p>
            </Link>
            <a className="cursor-pointer rounded hover:bg-blue-300 hover:text-blue-950 text-white flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="settings-outline"></ion-icon>
              <p>Settings</p>
            </a>
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
