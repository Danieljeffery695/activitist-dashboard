"use client";
import Image from "next/image";
import { cormorant, epunda } from "../utils/Fonts";
import Observer from "../utils/Observer";


export default function SectionTwo() {

    //IntersectionObservers start here 
      
        const {ref: myRef, inView: elementInPlace} = Observer(0, "0px", true);
        const {ref: myRef1, inView: elementInPlace1} = Observer(0, "450px", true);
      
    //IntersectionObservers start here 
    return (
        // Section two start here

        <section ref={myRef} className="w-full 320:h-1350 410:h-full py-4 section-second">
            <h3 className={`text-2xl ${cormorant.className} text-white 320:text-center md:ml-9 lg:text-left
            ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>02 --------- Why Activities</h3>
            <h1 className={`text-3xl ${cormorant.className} 320:text-center md:ml-9 lg:text-left
            ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>The Difference Between Us and Other Competitors</h1>
            <div className="320:grid-cols-1 grid md:grid-cols-3 pl-3 w-11/12 justify-center m-auto gap-3 mt-5">
                <div ref={myRef1} className={`h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md 
                    ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-200 duration-400 ease-in-out`}>
                    <Image src="/image1.png" alt="Image" width={100} height={100} className="float-right w-20" />
                    <h1 className={`text-2xl ${cormorant.className} my-2`}>High Speed And Low Costs</h1>
                    <p className={`text-xl ${epunda.className}`}>What is this? Smart contracts autonomously perform funding - collect and release payments.</p>
                </div>
                <div ref={myRef1} className={`h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md 
                    ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>
                    <Image src="/image1.png" alt="Image" width={100} height={100} className="float-right w-20" />
                    <h1 className={`text-2xl ${cormorant.className} my-2`}>Easy Entry and Fair Competition</h1>
                    <p className={`text-xl ${epunda.className}`}>Open-source smart contract ensures fair and transparent deal between merchants and affiliates</p>
                </div>
                <div ref={myRef1} className={`h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md 
                    ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-400 duration-400 ease-in-out`}>
                    <Image src="/image1.png" alt="Image" width={100} height={100} className="float-right w-20" />
                    <h1 className={`text-2xl ${cormorant.className} my-2`}>Super Protection From Hacking</h1>
                    <p className={`text-xl ${epunda.className}`}>Merchant's budget is spent on commissions charged by a number of brokers, including banks</p>
                </div>
                <div ref={myRef1} className={`h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md 
                    ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-500 duration-500 ease-in-out`}>
                    <Image src="/image1.png" alt="Image" width={100} height={100} className="float-right w-20" />
                    <h1 className={`text-2xl ${cormorant.className} my-2`}>Global P2P Trade Financing</h1>
                    <p className={`text-xl ${epunda.className}`}>On a decentralized platform, all user accounts are independent, this won't breach the security of Cryptos</p>
                </div>
                <div ref={myRef1} className={`h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md 
                    ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-600 duration-500 ease-in-out`}>
                    <Image src="/image1.png" alt="Image" width={100} height={100} className="float-right w-20" />
                    <h1 className={`text-2xl ${cormorant.className} my-2`}>No More Middle Man Loaded</h1>
                    <p className={`text-xl ${epunda.className}`}>Immediate funding without third parties. Smart contracts autonomously perform funding payments.</p>
                </div>
                <div ref={myRef1} className={`h-full pb-3 flex items-center justify-center cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md
                    ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-700 duration-500 ease-in-out`}>
                    <h1 className={`text-2xl ${cormorant.className} my-2`}>MORE FEATURES &#8594;</h1>
                </div>
            </div>
        </section>

        // Section two ends here
    )
}