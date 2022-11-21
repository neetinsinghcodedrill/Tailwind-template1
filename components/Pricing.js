import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Pricing = () => {
  return(
    <div className="bg-custom-purple font-normal">
        <div className="pt-20 lg:pt-28 mb-5 px-5">
            <h1 className="lg:w-2/4 mx-auto text-[32px] lg:text-4xl text-white mb-6">Simple pricing, for everyone.</h1>
            <p className="lg:w-3/5 mx-auto pr-5 text-slate-400 pb-10">It doesn’t matter what size your business is, our software won’t work well for you.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:px-5 pb-20">
            <div className="w-full lg-w-2/6 px-5 lg:px-8 py-8 rounded-3xl">
                    <h1 className="text-5xl mb-5 font-semibold  text-white">$9</h1>
                    <h4 className="my-3 font-semibold text-white">Starter</h4>
                    <p className="text-slate-400">Good for anyone who is self-employed and just getting started.</p>
                    <div className="text-center text-slate-100 border border-solid border-slate-500 hover:border-slate-300 rounded-3xl my-8 py-2 cursor-pointer">Get started</div>
                    <div className="text-slate-200">
                        <div className="flex flex-row items-center my-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Send 10 quotes and invoices</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Connect up to 2 bank accounts</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Track up to 15 expenses per month</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Manual payroll support</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Export up to 3 reports</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg-w-2/6 px-5  lg:px-8  py-8 bg-custom-darkBlue rounded-3xl text-white">
                    <h1 className="text-5xl mb-5 font-semibold">$15</h1>
                    <h4 className="my-3 font-semibold">Small business</h4>
                    <p>Perfect for small / medium sized businesses.</p>
                    <div className="text-center bg-white text-slate-900 rounded-3xl my-8 py-2 cursor-pointer">Get started</div>
                    <div>
                        <div className="flex flex-row items-center my-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="texttext-[15px]">Send 25 quotes and invoices</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Connect up to 5 bank accounts</p>
                        </div>
                        <div className="flex flex-row items-center mb-3">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Track up to 50 expenses per month</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Automated payroll support</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Export up to 12 reports</p>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Bulk reconcile transactions</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Track in multiple currencies</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg-w-2/6 px-5 lg:px-8  py-8 rounded-3xl">
                    <h1 className="text-5xl mb-5 font-semibold text-white">$39</h1>
                    <h4 className="my-3 font-semibold text-white">Enterprise</h4>
                    <p className="text-slate-400">For even the biggest enterprise companies.</p>
                    <div className="text-center text-slate-100 border border-solid border-slate-500 hover:border-slate-300 rounded-3xl my-8 py-2 cursor-pointer">Get started</div>
                    <div className="text-slate-200">
                        <div className="flex flex-row items-center my-3">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Send unlimited quotes and invoices</p>
                        </div>
                        <div className="flex flex-row items-center mb-3">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Connect up to 15 bank accounts</p>
                        </div>
                        <div className="flex flex-row items-center mb-3">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Track up to 200 expenses per month</p>
                        </div>
                        <div className="flex flex-row items-center mb-3">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Automated payroll support</p>
                        </div>
                        <div className="flex flex-row items-center mb-3">
                            <CheckCircleIcon className="h-5 w-5 mr-3"/>
                            <p className="text-[15px]">Export up to 25 reports, including TPS</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Pricing;