import Image from 'next/image'
import user1 from '../public/user1.avif'
import user2 from '../public/user2.avif'
import user3 from '../public/user3.avif'
import user4 from '../public/user4.avif'
import user5 from '../public/user5.avif'
import user6 from '../public/user6.avif'

const LoveWorldWide = () => {
    return(
        <div className="font-Lexend font-normal text-center bg-slate-100 ">
            <div className="pb-20">
                <div>
                    <h1 className="w-full pt-20 md:pt-28 text-[32px] md:text-[38px] px-4 text-left md:text-center md:mx-auto leading-snug pb-4 lg:w-3/5 lg:mx-auto lg:text-[38px] lg:pt-28 lg:pb-5">Loved by bussinesses worldwide.</h1>
                    <p className="w-full md:w-11/12 px-4 text-left md:text-center md:mx-auto text-[16px] leading-loose  lg:w-2/4 lg:mx-auto text-slate-600 lg:leading-relaxed pb-20">
                        Our software is so simple people can't help but fall in love with it.
                        Simplicity is easy when you just skip tons of mission-critical features.
                    </p>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4 lg:items-start px-4">
                    <div className="lg:w-96 md:w-11/12 md:mx-auto w-full px-5 py-5 mb-5 md:px-5 lg:mx-4 leading-2 text-left rounded-xl shadow-2xl bg-white">
                        <p className="leading-10 text-lg">
                            TaxPal is so easy to use I can’t help but wonder if it’s 
                            really doing the things the government expects me to do.
                        </p>
                        <div className='h-px w-auto bg-slate-200 my-6'></div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h4 className="text-base font-semibold mb-2">Sheryl Berge</h4>
                                <p className="text-sm text-slate-500">CEO at Lynch LLC</p>
                            </div>
                            <div className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]">
                                <Image
                                    src={user1}
                                    className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]  rounded-full"
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="Picture of the user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-96 md:w-11/12 md:mx-auto w-full px-5 py-5 mb-5 lg:mx-4 leading-2 text-left rounded-xl shadow-2xl bg-white">
                        <p className="leading-10 text-lg">
                            The best part about TaxPal is every time I pay my employees, 
                            my bank balance doesn’t go down like it used to. Looking forward 
                            to spending this extra cash when I figure out why my card is being declined.
                        </p>
                        <div className='h-px w-auto bg-slate-200 my-6'></div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h4 className="text-base font-semibold mb-2">Leland Kiehn</h4>
                                <p className="text-sm text-slate-500">Founder of Kiehn and Sons</p>
                            </div>
                            <div className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]">
                                <Image
                                    src={user2}
                                    className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]  rounded-full"
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="Picture of the user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-96 md:w-11/12 md:mx-auto w-full px-5 py-5 mb-5 lg:mx-4 leading-2 text-left rounded-xl shadow-2xl bg-white">
                        <p className="leading-10 text-lg">
                        I used to have to remit tax to the EU and with TaxPal I 
                        somehow don’t have to do that anymore. Nervous to travel 
                        there now though.
                        </p>
                        <div className='h-px w-auto bg-slate-200 my-6'></div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h4 className="text-base font-semibold mb-2">Peter Renolds</h4>
                                <p className="text-sm text-slate-500">Founder of West Inc</p>
                            </div>
                            <div className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]">
                                <Image
                                    src={user3}
                                    className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]  rounded-full"
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="Picture of the user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-96 md:w-11/12 md:mx-auto w-full px-5 py-5 mb-5 lg:mx-4 leading-2 text-left rounded-xl shadow-2xl bg-white">
                        <p className="leading-10 text-lg">
                            I’m trying to get a hold of someone in support, 
                            I’m in a lot of trouble right now and they are saying 
                            it has something to do with my books. Please get back 
                            to me right away.
                        </p>
                        <div className='h-px w-auto bg-slate-200 my-6'></div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h4 className="text-base font-semibold mb-2">Amy Hahn</h4>
                                <p className="text-sm text-slate-500">Director at Velocity Industries</p>
                            </div>
                            <div className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]">
                                <Image
                                    src={user4}
                                    className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]  rounded-full"
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="Picture of the user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-96 md:w-11/12 md:mx-auto w-full px-5 py-5 mb-5 lg:mx-4 leading-2 text-left rounded-xl shadow-2xl bg-white">
                        <p className="leading-10 text-lg">
                            There are so many things I had to do with my old software that 
                            I just don’t do at all with TaxPal. Suspicious but I can’t say 
                            I don’t love it.
                        </p>
                        <div className='h-px w-auto bg-slate-200 my-6'></div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h4 className="text-base font-semibold mb-2">Erin Powlowski</h4>
                                <p className="text-sm text-slate-500">COO at Armstrong Inc</p>
                            </div>
                            <div className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]">
                                <Image
                                    src={user5}
                                    className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]  rounded-full"
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="Picture of the user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-96 md:w-11/12 md:mx-auto w-full px-5 py-5 mb-5 lg:mx-4 leading-2 text-left rounded-xl shadow-2xl bg-white">
                        <p className="leading-10 text-lg">
                            This is the fourth email I’ve sent to your support team. 
                            I am literally being held in jail for tax fraud. Please answer 
                            your damn emails, this is important.
                        </p>
                        <div className='h-px w-auto bg-slate-200 my-6'></div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h4 className="text-base font-semibold mb-2">Amy Hahn</h4>
                                <p className="text-sm text-slate-500">Director at Velocity Industries</p>
                            </div>
                            <div className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]">
                                <Image
                                    src={user6}
                                    className="max-h-[50px] max-w-[50px] h-[50px] w-[50px]  rounded-full"
                                    layout="responsive"
                                    objectFit='cover'
                                    alt="Picture of the user"
                                />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default LoveWorldWide