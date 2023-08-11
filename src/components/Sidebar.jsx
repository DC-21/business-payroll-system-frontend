const Sidebar = () => {
  return (
    <div className="h-screen w-[150px] bg-blue-700 items-center flex justify-between flex-col">
      <div className="justify-center w-full flex">
        <a>Logo</a>
      </div>
      <div className="bg-gray-500 justify-between items-center h-[576px] w-full py-6 px-2">
        <li>
          <a className="flex just">
            <ion-icon size="large" name="grid-outline"></ion-icon>
            <p>Dashboard</p>
          </a>
          <a className="flex just">
            <ion-icon size="large" name="wallet-outline"></ion-icon>
            <p>Payroll</p>
          </a>
          <a className="flex just">
            <ion-icon size="large" name="person-add-outline"></ion-icon>
            <p>Recruit</p>
          </a>
          <a className="flex just">
            <ion-icon size="large" name="list-circle-outline"></ion-icon>
            <p>Departments</p>
          </a>
          <a className="flex just">
            <ion-icon size="large" name="receipt-outline"></ion-icon>
            <p>Reports</p>
          </a>
          <a className="flex just">
            <ion-icon size="large" name="card-outline"></ion-icon>
            <p>Billing</p>
          </a>
          <a className="flex just">
            <ion-icon size="large" name="calendar-outline"></ion-icon>
            <p>Calendar</p>
          </a>
        </li>
        <li>
          <a className="flex w-full items-center gap-2 justify-center">
            <ion-icon size="large" name="settings-outline"></ion-icon>
            <p>Settings</p>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
