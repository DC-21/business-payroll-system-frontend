4;
const Hero = () => {
  return (
    <div className="w-full h-screen px-8 justify-center items-center flex flex-col rounded">
      <p className="w-full py-4 px-2 rounded text-[30px] text-blue-950 bg-blue-200">
        DiCE LABS Human Resource Management Web App
      </p>
      <div className="w-full bg-white grid grid-cols-2 justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center bg-slate-500 py-6 rounded">
          <p>Employees</p>
          <p>All employees on payroll</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-500 py-6 rounded">
          <p>Revenue</p>
          <p>All company Revenue</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-500 py-6 rounded">
          <p>Employees</p>
          <p>All employees on payroll</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-500 py-6 rounded">
          <p>Employees</p>
          <p>All employees on payroll</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
