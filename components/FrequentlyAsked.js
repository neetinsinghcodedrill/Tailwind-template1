

const FrequentlyAsked = () => {
    return(
        <div className="px-5 pb-32">
            <div className="pt-20 lg:pt-32 lg:w-2/4 mb-14 lg:px-4">
                <h1 className="text-3xl lg:text-4xl mb-4 lg:mb-5">Frequently asked questions</h1>
                <p className="text-slate-700 leading-loose">
                    If you can’t find what you’re looking for, 
                    email our support team and if you’re lucky 
                    someone will get back to you.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start">
                <div className="lg:w-2/6 lg:px-4">
                    <h4 className="mb-5">Does TaxPal handle VAT?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">Well no, but if you move your company offshore you can probably ignore it.</p>
                    <h4 className="mb-5">Can I pay for my subscription via purchase order?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">Absolutely, we are happy to take your money in all forms.</p>
                    <h4 className="mb-5">How do I apply for a job at TaxPal?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.</p>
                </div>
                <div className="lg:w-2/6 lg:px-4">
                    <h4 className="mb-5">What was that testimonial about tax fraud all about?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">TaxPal is just a software application, ultimately your books are your responsibility.</p>
                    <h4 className="mb-5">TaxPal sounds horrible but why do I still feel compelled to purchase?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.</p>
                    <h4 className="mb-5">I found other companies called TaxPal, are you sure you can use this name?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.</p>
                </div>
                <div className="lg:w-2/6 lg:px-4">
                    <h4 className="mb-5">How do you generate reports?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.</p>
                    <h4 className="mb-5">Can we expect more inventory features?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">In life it’s really better to never expect anything at all.</p>
                    <h4 className="mb-5">I lost my password, how do I get into my account?</h4>
                    <p className="text-sm text-slate-700 mb-7 leading-relaxed">Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.</p>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAsked