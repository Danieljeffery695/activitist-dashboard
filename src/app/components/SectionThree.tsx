import Image from "next/image";

export default function SectionThree() {
    // Section three start here
    return (
        <section className="w-full overflow-hidden section-third mt-1.5">
            <div className="w-full section-third-div rotate-9 bg-white overflow-hidden -mb-11">
                <div className="flex w-full h-full -rotate-9">

                    <div className="flex-1">
                        <Image src="./image1.png" alt="Image" className="w-full h-full z-20 -mt-14" />
                    </div>

                    <div className="flex-1 flex ml-6 flex-col justify-center">
                        <div className="w-10/12">
                            <h3 className="text-2xl pb-8">03 -------- Who Are We</h3>
                            <h1 className="text-3xl">Magical Technology to Make Your Money Secure</h1>
                            <p className="text-2xl">Create a tradeable digital token that can be used as a currency, a representation of an asset, a virtual share, a proof of membership anything at all</p>
                        </div>
                        <ul className="w-10/12">
                            <li><span className="list-span">&#9737;</span> Smart contracts that work such as Lightning Network</li>
                            <li><span className="list-span">&#9737;</span> Proof-of-stake (Pos) consensus Cross-chain atomic swaps</li>
                            <li><span className="list-span">&#9737;</span> Connectivity across payments networks</li>
                            <button className="bg-green-500 w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">LEARN MORE</button>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="h-full w-full bg-white"></div>
        </section>
    );
    // Section three ends here
}