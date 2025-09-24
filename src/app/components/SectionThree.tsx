import Image from "next/image";

export default function SectionThree() {
    // Section three start here
    return (
        <section className="320:h-p-950 370:h-p-1000 410:w-p-overfull 410:h-p-1100 540:w-p-1200 w-full overflow-hidden section-third mt-1.5">
            <div className="w-full section-third-div md:rotate-9 320:rotate-7 bg-white overflow-hidden -mb-11 320:right-[-5%] 320:top-[8%] 320:z-10 410:right-[-2%]">
                <div className="flex w-full h-full md:-rotate-9 320:-rotate-7">

                    <div className="md:flex-2 lg:flex-1 320:w-4/5 320:m-auto">
                        <Image src="/image1.png" alt="Image" width={100} height={100} className="w-full h-full z-20 md:-mt-14" />
                    </div>

                    <div className="md:flex-3 lg:flex-1 flex ml-6 flex-col justify-center">
                        <div className="md:w-10/12 320:text-center">
                            <h3 className="md:text-2xl pb-8 320:text-small-14 370:text-small-18 410:text-small-14">03 -------- Who Are We</h3>
                            <h1 className="md:text-3xl 320:w-p-250 320:text-[22px] 320:m-auto 370:text-small-25 410:w-[310px] 410:text-small-27 540:w-4/5">Magical Technology to Make Your Money Secure</h1>
                            <p className="md:text-2xl 320:w-p-250 320:text-[17px] 320:pt-2.5 320:m-auto 370:text-small-18 410:w-[310px] 410:text-small-19 540:w-4/5">Create a tradeable digital token that can be used as a currency, a representation of an asset, a virtual share, a proof of membership anything at all</p>
                        </div>
                        <ul className="md:w-10/12 320:w-4/5 320:mx-auto">
                            <li className="320:mt-2.5 410:mt-5 410:text-small-17"><span className="list-span">&#9737;</span> Smart contracts that work such as Lightning Network</li>
                            <li className="320:mt-2.5 410:mt-5 410:text-small-17"><span className="list-span">&#9737;</span> Proof-of-stake (Pos) consensus Cross-chain atomic swaps</li>
                            <li className="320:mt-2.5 410:mt-5 410:text-small-17"><span className="list-span">&#9737;</span> Connectivity across payments networks</li>
                            <button className="bg-green-500 w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">LEARN MORE</button>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="h-full w-full bg-white 320:relative 320:top-[-17%] 410:top-[-20%]"></div>
        </section>
    );
    // Section three ends here
}