"use client";
import Image from "next/image";
import { cormorant, epunda } from "../utils/Fonts";
import Observer from "../utils/Observer";

export default function SectionThree() {
     //IntersectionObservers start here 
          
        const {ref: myRef, inView: elementInPlace} = Observer(0, "350px", true);
        const {ref: myRef1, inView: elementInPlace1} = Observer(0, "-100px", true);
          
    //IntersectionObservers start here 

    // Section three start here
    return (
        <section ref={myRef} className={`320:h-950 370:h-1000 410:w-overfull 410:h-1100 540:h-1200 w-full overflow-hidden relative section-third mt-1.5
         ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>
            <div className="w-full section-third-div h-[90%] rounded-tl-[130px] relative md:rotate-9 320:rotate-7 bg-white overflow-hidden -mb-11 320:right-[-5%] 320:top-[8%] 320:z-10 410:right-[-2%]">
                <div ref={myRef1} className="flex w-full h-full md:-rotate-9 320:flex-col 320:-rotate-7 md:flex-row">

                    <div className="md:flex-2 lg:flex-1 320:w-4/5 320:m-auto h-4/5 320:-mt-14 370:-mt-0 370:h-6/12 540:h-full relative">
                        <Image src="/image1.png" alt="Image" fill className={`z-20 md:-mt-14 object-contain
                             ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-400 duration-500 ease-in-out`} />
                    </div>

                    <div className={`md:flex-3 lg:flex-1 320:h-full flex ml-6 flex-col justify-center
                         ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-500 duration-500 ease-in-out`}>
                        <div className="md:w-10/12 320:text-center">
                            <h3 className={`${cormorant.className} md:text-2xl pb-8 320:text-small-14 370:text-small-18 410:text-small-14`}>03 -------- Who Are We</h3>
                            <h1 className={`${cormorant.className} md:text-3xl 320:w-250 320:text-[22px] 320:m-auto 370:text-small-25 410:w-[310px] 410:text-small-27 540:w-4/5`}>Magical Technology to Make Your Money Secure</h1>
                            <p className={`${epunda.className} md:text-2xl 320:w-250 320:text-[17px] 320:pt-2.5 320:m-auto 370:text-small-18 410:w-[310px] 410:text-small-19 540:w-4/5`}>Create a tradeable digital token that can be used as a currency, a representation of an asset, a virtual share, a proof of membership anything at all</p>
                        </div>
                        <ul className="md:w-[70%] xl:w-10/12 320:w-4/5 320:mx-auto">
                            <li className={`${cormorant.className} 320:mt-2.5 410:mt-5 410:text-small-17 540:text-small-19 md:text-small-17`}><span className="cursor-pointer">&#9737;</span> Smart contracts that work such as Lightning Network</li>
                            <li className={`${cormorant.className} 320:mt-2.5 410:mt-5 410:text-small-17 540:text-small-19 md:text-small-17`}><span className="cursor-pointer">&#9737;</span> Proof-of-stake (Pos) consensus Cross-chain atomic swaps</li>
                            <li className={`${cormorant.className} 320:mt-2.5 410:mt-5 410:text-small-17 540:text-small-19 md:text-small-17`}><span className="cursor-pointer">&#9737;</span> Connectivity across payments networks</li>
                            <button className={`${cormorant.className} bg-green-500 w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer`}>LEARN MORE</button>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="h-full w-full bg-white 320:relative 320:top-[-17%] 410:top-[-20%]"></div>
        </section>
    );
    // Section three ends here
}