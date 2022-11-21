import {IoLogoTwitter } from 'react-icons/io';
import {AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return(
        <div className="my-10">
         <div className="flex flex-col-reverse lg:flex-row text-[14px] justify-between items-center px-7 text-slate-500">
            <p>Copyright © 2022 TaxPal. All rights reserved.</p>
            <div className="flex flex-row mb-5">
               <IoLogoTwitter className="h-6 w-6 mx-4"/>
               <AiFillGithub className="h-6 w-6 mx-4"/>
            </div>
         </div>
        </div>
    )
}

export default Footer