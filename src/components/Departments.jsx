import { Link } from "react-router-dom"
import Department from '../pages/Department';

const Departments = () => {
  return (
    <div className="w-full flex bg-blue-200 justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-blue-950 text-2xl font-semibold">Departments</p>
        <p className="text-blue-900 text-xl mt-4">View all Departments Records</p>
      </div>
    </div>
  )
}

export default Departments