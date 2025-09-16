import Image from "next/image";

export default function SectionTwo() {
    return (
        // Section two start here

        <section className="w-full py-4 section-second">
            <h3 className="text-2xl text-white ml-9">02 --------- Why Activities</h3>
            <h1 className="text-3xl ml-9">The Difference Between Us and Other Competitors</h1>
            <div className="grid grid-cols-3 pl-3 w-11/12 justify-center m-auto gap-3 mt-5">
                <div className="h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md">
                    <Image src="./image1.png" alt="Image" className="float-right w-20" />
                    <h1 className="text-2xl my-2">High Speed And Low Costs</h1>
                    <p className="text-xl">What is this? Smart contracts autonomously perform funding - collect and release payments.</p>
                </div>
                <div className="h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md">
                    <Image src="./image1.png" alt="Image" className="float-right w-20" />
                    <h1 className="text-2xl my-2">Easy Entry and Fair Competition</h1>
                    <p className="text-xl">Open-source smart contract ensures fair and transparent deal between merchants and affiliates</p>
                </div>
                <div className="h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md">
                    <Image src="./image1.png" alt="Image" className="float-right w-20" />
                    <h1 className="text-2xl my-2">Super Protection From Hacking</h1>
                    <p className="text-xl">Merchant's budget is spent on commissions charged by a number of brokers, including banks</p>
                </div>
                <div className="h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md">
                    <Image src="./image1.png" alt="Image" className="float-right w-20" />
                    <h1 className="text-2xl my-2">Global P2P Trade Financing</h1>
                    <p className="text-xl">On a decentralized platform, all user accounts are independent, this won't breach the security of Cryptos</p>
                </div>
                <div className="h-full pb-3 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md">
                    <Image src="./image1.png" alt="Image" className="float-right w-20" />
                    <h1 className="text-2xl my-2">No More Middle Man Loaded</h1>
                    <p className="text-xl">Immediate funding without third parties. Smart contracts autonomously perform funding payments.</p>
                </div>
                <div className="h-full pb-3 flex items-center justify-center h-62 cursor-pointer hover:bg-slate-500 hover:text-white bg-white p-3 rounded-md">
                    <h1 className="text-2xl my-2">MORE FEATURES &#8594</h1>
                </div>
            </div>
        </section>

        // Section two ends here
    )
}