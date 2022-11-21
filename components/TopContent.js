import { 
    PlayIcon
 } from '@heroicons/react/24/solid';

const TopContent = () => {
  return(
    <div>
        <div className="mt-30 lg:mt-28 mb-36">
            <h1 className="w-full lg:w-3/4 mx-auto text-5xl lg:text-7xl text-center mb-5 text-slate-900">
                Accounting <span className="text-custom-darkBlue">made simple</span><br/> 
                for small bussiness.
            </h1>
            <p className="text-lg text-center px-5 lg:w-6/12 mx-auto mb-10 text-slate-600">
                Most bookkeeping software is accurate,but hard to use. We make the 
                opposite trade-off,and hope you don't get audited 
            </p>
            <div className="flex flex-row justify-center items-center">
                <button className="mx-5 bg-slate-900 text-sm text-white px-4 py-2 rounded-3xl hover:opacity-80">
                    Get 6 months free
                </button>
                <div className="mx-5 flex flex-row items-center text-sm border-solid border-slate-300 border px-4 py-2 rounded-3xl hover:border-slate-400 cursor-pointer text-slate-500 hover:text-slate-800">
                    <PlayIcon className="h-4 w-4 text-custom-darkBlue"/>
                    <p className="pl-2">Watch video</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopContent