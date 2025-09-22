import Image from "next/image";

export default function SectionFour() {
    // Section Four start here
    return (
        <section className="section-fourth w-full bg-white rounded-b-4xl">
            <canvas id="section-fourth-canvas" className="w-full h-80"></canvas>
            <div className="w-full text-center my-4">
                <h3 className="text-2xl pb-2">04 -------- HOW IT WORKS</h3>
                <h1 className="text-3xl">Let's Explain</h1>
                <h1 className="text-3xl">How We Do The Hard Work</h1>
            </div>
            <div className="section-fourth-div w-full flex justify-center items-center">
                <div className="div-circle-3 flex items-center justify-center rounded-p-50 bg-slate-400 320:w-[310px] 320:h-[310px] 410:w-[350px] 410:h-[350px]">

                    <div className="div-circle-2 flex items-center justify-center relative rounded-p-50 bg-slate-500 320:w-[280px] 320:h-[280px] 410:w-[310px] 410:h-[310px]">
                        <div className="section-fourth-text-div-1 flex justify-between items-center 320:hidden">
                            <h3 className="lg:text-lg text-xl font-bold">Limited to a max number of hours per day.</h3>
                            <Image src="/image1.png" alt="Image" width={100} height={100} className="section-fourth-div-img1" />
                        </div>
                        <div className="div-circle-1 flex items-center justify-center relative rounded-p-50 bg-slate-600 320:w-[250px] 320:h-[250px]">
                            <div className="section-fourth-text-div-2 flex justify-between items-center 320:hidden">
                                <h3 className="lg:text-lg text-xl font-bold ">Only when the device is plugged in and charging.</h3>
                                <Image src="/image1.png" alt="Image" width={100} height={100} className="section-fourth-div-img1" />
                            </div>

                            <Image src="/image1.png" alt="Image" className="320:w-p-90 h-p-90 320:rounded-p-inherit 320:object-contain" width={100} height={100} />

                            <div className="section-fourth-text-div-3 flex justify-between items-center 320:hidden">
                                <Image src="/image1.png" alt="Image" width={100} height={100} className="section-fourth-div-img1" />
                                <h3 className="lg:text-lg text-xl font-bold ml-12">Only when the device is in an idle state and not being used.</h3>
                            </div>
                        </div>
                        <div className="section-fourth-text-div flex justify-between items-center 320:hidden">
                            <Image src="/image1.png" alt="Image" width={100} height={100} className="section-fourth-div-img1" />
                            <h3 className="lg:text-lg text-xl font-bold ml-12">Only residual CPU power is used with performance.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-80 text-center pt-15">
                <h1 className="text-3xl">Our Amazing</h1>
                <h1 className="text-3xl">Clients & Partners</h1>
                <div className="w-4/5 h-44 flex items-center justify-center m-auto">
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={100} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={100} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={100} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={100} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={100} height={100} alt="Image" className="w-20" /></div>
                    <div className="w-40 h-20 ml-2 flex justify-center">
                        <Image src="/image1.png" width={100} height={100} alt="Image" className="w-20" /></div>
                </div>
            </div>

        </section>
    );
    // Section Four ends here
}