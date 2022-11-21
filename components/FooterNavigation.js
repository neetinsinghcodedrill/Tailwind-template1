

const FooterNavigation = () => {
    return(
        <div>
            <div className="flex flex-row justify-center items-center">
                <div className="h-10 w-10 bg-custom-darkBlue mr-2 rounded-full"></div>
                <p className="text-black font-semibold tracking-wider">Tax<span className="text-custom-darkBlue">Pal</span></p>
            </div>
            <div className="flex flex-row justify-center items-center mt-8 text-sm text-slate-700  mb-16">
               <p className="px-4 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Features</p>
               <p className="px-4 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Testimonials</p>
               <p className="px-4 py-1 cursor-pointer hover:bg-slate-100 hover:text-slate-900 hover:rounded-md">Pricing</p>
            </div>
            <div className="w-auto bg-slate-100 h-px mx-5"></div>
        </div>
    )
}

export default FooterNavigation;