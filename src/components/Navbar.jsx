
const Navbar = () => {
  return (
    <div className='w-full flex top-0 py-2'>
      <div className="flex w-full rounded py-[10px] px-4 gap-4 justify-end">
        <a className="text-blue-800 cursor-pointer hover:text-blue-500 items-center flex rounded">
        <ion-icon size="large" name="notifications-circle-outline"></ion-icon>
        </a>
        <a className="text-blue-800 cursor-pointer hover:text-blue-500 items-center flex rounded">
        <ion-icon size="large" name="person-circle-outline"></ion-icon>
        </a>
      </div>
    </div>
  )
}

export default Navbar