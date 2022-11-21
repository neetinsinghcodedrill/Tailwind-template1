import { 
    UserCircleIcon, 
    QueueListIcon,
    SwatchIcon
 } from '@heroicons/react/24/outline';

const SimpleEveryday = () => {
  return(
    <div>
        <div className="mt-20 lg:mt-32 mb-24">
            <div className=" mb-20">
                <h1 className="w-full lg:w-4/6 pl-4 lg:mx-auto text-left leading-snug lg:text-center text-[32px] lg:text-[40px] mb-4 lg:mb-6">Simplify everyday bussiness tasks.</h1>
                <p className="leading-relaxed w-full pl-4 lg:w-1/2 lg:mx-auto text-left lg:text-center text-slate-600 text-[17px]">
                    Because you’d probably be a little confused if we suggested you complicate 
                    your everyday business tasks instead.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center pl-4 pr-3 lg:pl-8'>
                <div className="lg:pr-10 w-full lg:w-1/3 mb-5">
                    <div className="bg-custom-darkBlue h-9 w-9 mb-5 pl-1 pt-1 text-center rounded-md">
                       <SwatchIcon className="h-7 w-7 text-white"/>
                    </div>
                    <p className="my-3 text-custom-darkBlue text-sm">Reporting</p>
                    <h1 className="text-lg mb-5">Stay on top of things with always up-to-date reporting featuers.</h1>
                    <p className="text-sm leading-loose text-slate-600">
                        We talked about reporting in this section 
                        about we need three itmes here, so mentioning it one more time
                        for posterity.
                    </p>
                </div>
                <div className="lg:pr-10 w-full lg:w-1/3 mb-5 opacity-70 hover:opacity-100 cursor-pointer">
                    <div className="bg-slate-600 h-9 w-9 mb-5 pl-1 pt-1 text-center rounded-md">
                       <QueueListIcon className="h-7 w-7 text-white"/>
                    </div>
                    <p className="my-3 text-slate-700 text-sm">Inventory</p>
                    <h1 className="text-lg mb-5">Never lose track of whaat's in stock with accurate inventory tracking.</h1>
                    <p className="text-sm leading-loose text-slate-600">
                        We don't offer this as part of our software but the statement is inarguably true.
                        Accurate inventory tracker would help for sure.
                    </p>
                </div>
                <div className="pr-5 opacity-70 hover:opacity-100 cursor-pointer lg:pr-10 w-full lg:w-1/3 mb-5">
                    <div className="bg-slate-600 h-9 w-9 mb-5 pl-1 pt-1 text-center rounded-md">
                       <UserCircleIcon className="h-7 w-7 text-white"/>
                    </div>
                    <p className="my-3 text-slate-700 text-sm">Contacts</p>
                    <h1 className="text-lg mb-5">Organize of all the contacts,service, providers, and invoice in one place.</h1>
                    <p className="text-sm leading-relaxed text-slate-600">
                        This also isn't actually a feature,it's just some friendly
                        advice.We definetle recommend that you do this, you'll feel 
                        organized and professional
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimpleEveryday