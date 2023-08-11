const Sidebar = () => {
  return (
    <div className="h-screen w-[150px] bg-blue-700 items-center flex justify-between flex-col">
      <div className="justify-center w-full flex">
        <a>Logo</a>
      </div>
      <div className="bg-gray-500 justify-center items-center h-[576px] w-full py-6 px-2">
        <div className="justify-between flex flex-col w-full h-full items-center">
          <li className="list-none flex flex-col gap-2">
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="grid-outline"></ion-icon>
              <p>Dashboard</p>
            </a>
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="wallet-outline"></ion-icon>
              <p>Payroll</p>
            </a>
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="person-add-outline"></ion-icon>
              <p>Recruit</p>
            </a>
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="receipt-outline"></ion-icon>
              <p>Reports</p>
            </a>
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="card-outline"></ion-icon>
              <p>Billing</p>
            </a>
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="calendar-outline"></ion-icon>
              <p>Calendar</p>
            </a>
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start">
              <ion-icon size="large" name="list-circle-outline"></ion-icon>
              <p>Departments</p>
            </a>
          </li>
          <li className="list-none">
            <a className="cursor-pointer flex w-full items-center gap-2 justify-start mr-9">
              <ion-icon size="large" name="settings-outline"></ion-icon>
              <p>Settings</p>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
