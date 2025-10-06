"use client";
import Image from "next/image";
import { cormorant, epunda } from "../utils/Fonts";
import Observer from "../utils/Observer";

export default function SectionFive() {

     //IntersectionObservers start here 
              
        const {ref: myRef, inView: elementInPlace} = Observer(0, "350px", true);
        const {ref: myRef1, inView: elementInPlace1} = Observer(0, "-150px", true);
              
    //IntersectionObservers start here 
    
    return (
        // Section five start here
        <section ref={myRef} className={`section-fifth w-full overflow-hidden 320:h-full 320:mt-20 320:relative
        ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>
            <div className="section-fifth-div w-full rounded-tr-[130px] relative md:-rotate-9 320:-rotate-5 bg-white overflow-hidden 320:left-[-5.5%] 370:left-[-4.8%] 320:top-[10%] z-10 410:left-[-5.8%] 410:w-overfull 410:mt-[150px]">
                <div ref={myRef1} className="section-fifth-div-1 md:flex md:m-auto md:rotate-9 320:rotate-5 pt-23 320:w-4/5 320:ml-5 410:w-[85%] 540:ml-[50px] xl:justify-between">
                    <div className="pl-4 lg:pl-6 xl:pl-12 flex-1">
                        <div className={`w-full ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>
                            <h3 className={`${cormorant.className} text-xl`}>06 -------- FAQ</h3>
                            <h1 className={`${cormorant.className} text-3xl`}>Do you have any Questions</h1>
                        </div>
                        <div className={`mt-8 ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-400 duration-400 ease-in-out`}>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="w-full flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className={`${cormorant.className} 320:text-small-16 370:text-lg ml-3 font-semibold`}>What makes your platform different from other cryptocurrency exchanges?</h3>
                                    <span className="text-xl mr-3">&#9737;</span>
                                </div>
                                <div className="w-full px-2 hidden pb-4">
                                    <h2 className={`${cormorant.className} text-wrap 320:text-small-16 370:text-lg font-semibold`}>Our platform offers a user-centric experience with state-of-the-art security features. we combine easy-to-navigate
                                        dashboards, fast trade execution, and an intuitive wallet system.</h2>
                                </div>
                            </div>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="w-full flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className={`${cormorant.className} 320:text-small-16 370:text-lg ml-3 font-semibold`}>How do i keep my account and funds secure?</h3>
                                    <span className="text-xl mr-3">&#9737;</span>
                                </div>
                                <div className="w-full px-2 hidden pb-4">
                                    <h2 className={`${cormorant.className} text-wrap 320:text-small-16 370:text-lg font-semibold`}>Your security is our top priority. We use industry-leading encryption and multi-signature wallets to protect your
                                        assets. We also require two-factor authentication (2FA) for all account logins, withdrawals and transactions.</h2>
                                </div>
                            </div>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className={`${cormorant.className} 320:text-small-16 370:text-lg ml-3 font-semibold`}>How do I start investing in cryptocurrencies with your platform?</h3>
                                    <span className="text-xl mr-3">&#9737;</span>
                                </div>
                                <div className="w-full px-2 pb-4 hidden">
                                    <h2 className={`${cormorant.className} text-wrap 320:text-small-16 370:text-lg font-semibold`}>Absolutely! Our platform is fully optimized for mobile use. Whether you're on the go or at home, our mobile app and
                                        responsive website ensure that you have full access to your account and trading options</h2>
                                </div>
                            </div>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className={`${cormorant.className} 320:text-small-16 370:text-lg ml-3 font-semibold`}>Can i trade from my phone or tablet?</h3>
                                    <span className="text-xl mr-3">&#9737;</span>
                                </div>
                                <div className="w-full px-2 pb-4 hidden">
                                    <h2 className={`${cormorant.className} text-wrap 320:text-small-16 370:text-lg font-semibold`}>Our platform offers a user-centric experience with state-of-the-art security features. We combine easy-to-navigate
                                        dashboards, fast trade execution, and an intuitive wallet system.</h2>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full md:h-44 pl-3 ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-500 duration-400 ease-in-out`}>
                            <button className={`${epunda.className} bg-green-500 320:w-27 370:w-30 410:w-[130px] md:w-28 h-10 ml-1 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer`}>Get Started</button>
                            <button className={`${epunda.className} bg-green-500 320:w-27 370:w-30 410:w-[130px] md:w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer`}>Learn more</button>
                        </div>
                    </div>
                    <div className="ml-5 flex-1 relative 320:w-full 320:h-300 320:pt-5 320:pl-[30px] 540:flex 540:justify-center md:my-auto md:h-[500px] md:pl-0">
                        <Image src="/image1.png" alt="Image" fill className={`${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-500 duration-400 ease-in-out`} />
                    </div>
                </div>
            </div>
            <div className="w-full bg-white 320:h-300 320:absolute 320:bottom-[-1%] 410:bottom-[-10%] 540:h-[360px] "></div>

        </section>
        // Section five end here
    )
}