"use client";
import Image from "next/image";
import { cormorant, epunda } from "../utils/Fonts";
import Observer from "../utils/Observer";

export default function SectionOne() {
    //IntersectionObservers start here 
  
      const {ref: myRef, inView: elementInPlace} = Observer(0, "0px", true);
      const {ref: myRef1, inView: elementInPlace1} = Observer(0, "-150px", true);
  
    //IntersectionObservers start here 
  return (
    // Section one start here

    <section ref={myRef} className="320:h-1100 320:overflow-hidden 370:h-1200 w-full md:h-700 bg-white section-first text-center">
      <h3 className={`text-2xl ${cormorant.className} md:text-white ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>01 -------- Features</h3>
      <h1 className={`text-4xl ${cormorant.className} ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>Harness the collection</h1>
      <h1 className={`text-4xl ${cormorant.className} ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-300 duration-400 ease-in-out`}>Power of your Users'CPU</h1>
      <div ref={myRef1} className="320:h-800 320:grid 320:grid-rows-2 320:mt-32 370:h-900 w-full md:h-full md:mt-0 md:flex">
        <div className={`320:m-auto 320:w-35 320:h-350 410:w-[190px] 540:w-[240px] md:w-80 md:h-96 bg-slate-500 md:mx-2 flex-1 rounded-lg
        ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-400 duration-500 ease-in-out`}>
          <div className="320:h-100 w-full md:h-52">
            <Image src="/image1.png" alt="Image" width={254} height={208} className="320:-top-full 320:h-52 w-64 md:h-72 object-contain m-auto relative md:-top-2/3"/>
          </div>
          <div className="md:w-full lg:w-3/4 m-auto">
            <h3 className={`md:text-3xl ${cormorant.className} xl:text-nowrap my-2 font-extrabold`}>Default Opt-In</h3>
            <p className={`text-lg ${epunda.className}`}>All users of your app will become eligible after agreeing during install.</p>
          </div>
        </div>
        <div className={`320:m-auto 320:w-35 320:h-350 410:w-[190px] 540:w-[240px] md:w-80 md:h-96 bg-slate-500 md:mx-2  flex-1 rounded-lg
          ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-500 duration-500 ease-in-out`}>
          <div className="320:h-100 w-full md:h-52">
            <Image src="/image1.png" alt="Image" width={254} height={208} className="320:-top-full 320:h-52 w-64 md:h-72 object-contain m-auto relative md:-top-2/3"/>
          </div>
          <div className="md:w-full lg:w-3/4 m-auto">
            <h2 className={`md:text-3xl ${cormorant.className} xl:text-nowrap my-2 font-extrabold`}>Reward Experience</h2>
            <p className={`text-lg ${epunda.className}`}>Users receive valuable in-app rewards in exchange for mining online.</p>
          </div>
        </div>
        <div className={`320:mx-auto 320:mt-28 320:w-78 320:h-200 320:col-span-2 370:w-[350px] 370:h-300 410:w-400 410:h-60 540:w-[520px] 540:h-250 md:w-80 md:h-96 bg-slate-500 md:m-auto md:mx-2 flex-1 rounded-lg
          ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-600 duration-600 ease-in-out`}>
          <div className="320:h-100 w-full md:h-52">
            <Image src="/image1.png" alt="Image" width={254} height={208} className="320:-top-full 320:h-52 w-64 md:h-72 object-contain m-auto relative md:-top-2/3"/>
          </div>
          <div className="md:w-full lg:w-3/4 m-auto">
            <h2 className={`md:text-3xl ${cormorant.className} xl:text-nowrap my-2 font-extrabold`}>Flexible Opt-Out</h2>
            <p className={`text-lg ${epunda.className}`}>Users can choose to opt-out at any point and even get paid for remaining crypto.</p>
          </div>
        </div>
      </div>
    </section>


    // Section one ends here
  )
}