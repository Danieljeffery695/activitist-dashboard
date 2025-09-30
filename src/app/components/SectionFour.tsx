import Image from "next/image";
import { cormorant } from "../layout";
import SectionFourCanvas from "./SectionFourCanvasElement";

export default function SectionFour() {
    
    // Section Four start here
    return (
        <section className="section-fourth w-full bg-white rounded-b-4xl">
            <SectionFourCanvas/>
            <div className="w-full text-center my-4">
                <h3 className={`text-2xl ${cormorant.className} pb-2`}>04 -------- HOW IT WORKS</h3>
                <h1 className={`text-3xl ${cormorant.className}`}>Let's Explain</h1>
                <h1 className={`text-3xl ${cormorant.className}`}>How We Do The Hard Work</h1>
            </div>
            <div className="section-fourth-div w-full flex justify-center items-center">
                <div className="div-circle-3 flex items-center justify-center rounded-p-50 bg-slate-400 320:w-[310px] 320:h-[310px] 410:w-[350px] 410:h-[350px] 540:w-[420px] 540:h-[420px] md:w-[650px] md:h-[650px] xl:w-[800px] xl:h-[800px]">

                    <div className="div-circle-2 flex items-center justify-center relative rounded-p-50 bg-slate-500 320:w-[280px] 320:h-[280px] 410:w-[310px] 410:h-[310px] 540:w-[340px] 540:h-[340px] md:w-[500px] md:h-[500px] xl:w-[600px] xl:h-[600px]">
                        <div className="section-fourth-text-div-1 flex justify-between items-center absolute bottom-0 320:hidden lg:flex w-370 md:left-[-45%]">
                            <h3 className={`${cormorant.className} lg:text-lg text-xl font-bold`}>Limited to a max number of hours per day.</h3>
                            <Image src="/image1.png" alt="Image" width={55} height={55} className="section-fourth-div-img1" />
                        </div>
                        <div className="div-circle-1 flex items-center justify-center relative rounded-p-50 bg-slate-600 320:w-[250px] 320:h-[250px] md:w-[350px] md:h-[350px]">
                            <div className="section-fourth-text-div-2 flex justify-between items-center absolute top-0 320:hidden lg:flex lg:left-[-95%] w-380 xl:left-[-110%]">
                                <h3 className={`${cormorant.className} lg:text-lg text-xl font-bold`}>Only when the device is plugged in and charging.</h3>
                                <Image src="/image1.png" alt="Image" width={55} height={55} className="section-fourth-div-img1" />
                            </div>

                            <div className="320:w-[90%] 320:h-[90%] rounded-[50%] relative">
                               <Image src="/image1.png" alt="Image" fill className="320:object-contain rounded-[50%]" />
                            </div>

                            <div className="section-fourth-text-div-3 flex justify-between items-center absolute top-0 320:hidden lg:flex lg:right-[-95%] w-370 xl:right-[-110%]">
                                <Image src="/image1.png" alt="Image" width={55} height={55} className="section-fourth-div-img1" />
                                <h3 className={`${cormorant.className} lg:text-lg text-xl font-bold`}>Only when the device is in an idle state and not being used.</h3>
                            </div>
                        </div>
                        <div className="section-fourth-text-div flex justify-between items-center absolute bottom-0 320:hidden lg:flex w-370 md:right-[-45%]">
                            <Image src="/image1.png" alt="Image" width={55} height={55} className="section-fourth-div-img1" />
                            <h3 className={`${cormorant.className} lg:text-lg text-xl font-bold ml-12`}>Only residual CPU power is used with performance.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-80 text-center pt-15">
                <h1 className={`${cormorant.className} text-3xl`}>Our Amazing</h1>
                <h1 className={`${cormorant.className} text-3xl`}>Clients & Partners</h1>
                <div className="w-4/5 h-44 flex items-center justify-center m-auto">
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={20} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={20} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={20} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={20} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={20} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={20} height={100} alt="Image" className="w-20" /></div>
                </div>
            </div>

        </section>
    );
    // Section Four ends here
}