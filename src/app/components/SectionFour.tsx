"use client";
import Image from "next/image";
import SectionFourCanvas from "./SectionFourCanvasElement";
import Observer from "../utils/Observer";
import { cormorant } from "../utils/Fonts";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Imported Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import swiper required modules
import { Autoplay } from 'swiper/modules';


export default function SectionFour() {

    //IntersectionObservers start here 

    const {ref: myRef, inView: elementInPlace} = Observer(0, "100px", true);
    const {ref: myRef1, inView: elementInPlace1} = Observer(0, "250px", true);
    
    //IntersectionObservers start here 

    // Images Array start here
    const images = [
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
        "/image1.png",
    ]
    // Images Array ends here

    // Section Four start here
    return (
        <section className="section-fourth w-full bg-white rounded-b-4xl">
            <SectionFourCanvas/>
            <div className="w-full text-center my-4">
                <h3 className={`text-2xl ${cormorant.className} pb-2`}>04 -------- HOW IT WORKS</h3>
                <h1 className={`text-3xl ${cormorant.className}`}>Let's Explain</h1>
                <h1 className={`text-3xl ${cormorant.className}`}>How We Do The Hard Work</h1>
            </div>
            <div ref={myRef1} className={`section-fourth-div w-full flex justify-center items-center 
                 ${elementInPlace1 ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-400 duration-400 ease-in-out`}>
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

            <div className={`w-full h-80 text-center pt-15 ${elementInPlace ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'} transition-all transition-discrete delay-400 duration-400 ease-in-out`} ref={myRef}>
                <h1 className={`${cormorant.className} text-3xl`}>Our Amazing</h1>
                <h1 className={`${cormorant.className} text-3xl`}>Clients & Partners</h1>
              
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                       delay: 2500,
                       disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={5}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        images.map((image, index) => 
                            (<SwiperSlide key={index}>
                            <Image src={image} alt="Image" width={100} height={100} className="mx-auto mt-10" /></SwiperSlide>))
                        }
            </Swiper>
            </div>

        </section>
    );
    // Section Four ends here
}