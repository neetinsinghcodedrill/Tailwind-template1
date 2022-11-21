

const Navbar = () => {
  return(
    <nav>
      <div className="flex flex-row justify-between items-center py-10 px-10 text-slate-600 tracking-wide">
        <div className="flex flex-row items-center text-sm">
            <div className="flex flex-row items-center text-base pr-10 cursor-pointer">
                <div className="h-10 w-10 bg-custom-darkBlue mr-2 rounded-full"></div>
                <p className="text-black font-semibold tracking-wider">Tax<span className="text-custom-darkBlue">Pal</span></p>
            </div>
            <div className="md:hidden block absolute top-4 right-8">
              <button aria-label="navigation" type="button" className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white">
                <i className="fas fa-bars text-3xl" id="bars"></i>
              </button>
            </div>
            <p className="mx-3 px-2 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Features</p>
            <p className="mx-3 px-2 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Testimonials</p>
            <p className="mx-3 px-2 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Pricing</p>
        </div>
        <div className="flex flex-row items-center text-sm">
            <p className="mx-3 px-2 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Sign in</p> 
            <p className="mx-3 px-3.5 py-2.5 text-sm bg-custom-darkBlue rounded-3xl font-medium text-white cursor-pointer">Get started today</p>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div id="mobileMenu" className="hidden flex w-full mx-auto py-8 text-center">
        <div className="flex flex-col justify-center items-center w-full">
          <a href="#" className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: "8px"}}>Home</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: "8px"}}>About</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: "8px"}}>Blog</a>
          <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: "8px"}}>Contact</a>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar