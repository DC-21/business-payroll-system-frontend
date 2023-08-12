const Departments = () => {
  return (
    <div className="w-full flex flex-col bg-blue-200 justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-blue-950 text-2xl font-semibold">Departments</p>
        <p className="text-blue-900 text-xl mt-4">
          View all Departments Records.
        </p>
      </div>
      <li className="w-full flex gap-4 justify-center items-center list-none text-blue-900">
        <a>All Departments</a>
        <a>Management</a>
        <a>IT Departments</a>
        <a>Finance Departments</a>
        <a>Security Departments</a>
        <a>Cleaners Departments</a>
      </li>
    </div>
  );
};

export default Departments;
