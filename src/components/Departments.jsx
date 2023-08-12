const Departments = () => {
  return (
    <div className="w-full flex flex-col bg-blue-200">
      <div className="flex flex-col items-center py-8">
        <p className="text-blue-950 text-2xl font-semibold">Departments</p>
        <p className="text-blue-900 text-xl mt-4">
          View all Departments Records.
        </p>
      </div>
      <ul className="w-full bg-red-200 flex gap-4 justify-center items-center list-none text-white">
        <li className="py-3 px-2 rounded bg-blue-950">All Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950">Management</li>
        <li className="py-3 px-2 rounded bg-blue-950">IT Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950">Finance Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950">Security Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950">Cleaners Departments</li>
      </ul>
    </div>
  );
};

export default Departments;
