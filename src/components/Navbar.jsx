
const Navbar = () => {
  return (
    <div className='w-full flex top-0 py-7 bg-slate-500'>
      <div className="flex w-full px-4">
        <div>
          <input
          placeholder="search"/>
          <ion-icon name="search-circle-outline"></ion-icon>
        </div>
        <a>
        <ion-icon size="large" name="person-circle-outline"></ion-icon>
        </a>
      </div>
    </div>
  )
}

export default Navbar