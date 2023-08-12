import Security from "../Tables/Security";

const Departments = () => {
  return (
    <div className="w-full flex flex-col bg-blue-200">
      <div className="flex flex-col items-center py-8">
        <p className="text-blue-950 text-2xl font-semibold">Departments</p>
        <p className="text-blue-900 text-xl mt-4">
          View all Departments Records.
        </p>
      </div>
      <ul className="w-full flex gap-4 justify-center items-center list-none text-white">
        <li className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">All Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Management</li>
        <li className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">IT Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Finance Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Security Departments</li>
        <li className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Cleaners Departments</li>
      </ul>
      <div className="mt-4">
      <Security/>
      </div>
    </div>
  );
};

export default Departments;
