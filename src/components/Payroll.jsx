const Payroll = () => {
  return (
    <div className="w-full flex">
      <div className="w-full py-6 px-2 flex gap-4 bg-blue-200 rounded">
        <li className="gap-4 flex w-full">
          <a className="py-4 px-4 bg-blue-950 hover:bg-blue-900 rounded cursor-pointer text-white items-center">Active</a>
          <a className="py-4 px-4 bg-blue-950 hover:bg-blue-900 rounded cursor-pointer text-white">Pending</a>
          <a className="py-4 px-4 bg-blue-950 hover:bg-blue-900 rounded cursor-pointer text-white">Monthly</a>
          <a className="py-4 px-4 bg-blue-950 hover:bg-blue-900 rounded cursor-pointer text-white">Active</a>
          <a className="py-4 px-4 bg-blue-950 hover:bg-blue-900 rounded cursor-pointer text-white">Active</a>
        </li>
      </div>
    </div>
  );
};

export default Payroll;
