const Payroll = () => {
  return (
    <div className="w-full bg-blue-200 flex">
      <div className="w-full py-6 px-2 flex gap-4">
        <li className="gap-4 flex w-full">
          <a className="py-4 px-4 bg-blue-900 text-white items-center">Active</a>
          <a className="py-4 px-4 bg-blue-900 text-white">Pending</a>
          <a className="py-4 px-4 bg-blue-900 text-white">Monthly</a>
          <a className="py-4 px-4 bg-blue-900 text-white">Active</a>
          <a className="py-4 px-4 bg-blue-900 text-white">Active</a>
        </li>
      </div>
    </div>
  );
};

export default Payroll;
