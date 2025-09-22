import Image from "next/image";

export default function Footer() {
    return (
        // Footer start here
        <footer className="footer w-full border-t-2 border-t-slate-300 bg-white overflow-hidden relative 320:h-p-900 ">
            <canvas id="footer-canvas" className="footer-canvas w-full h-full absolute"></canvas>
            <div className="w-full h-full flex md:items-center md:justify-between pt-10 320:flex-col">
                <div className="h-full pl-3 flex flex-col z-10 md:flex-1">
                    <div className="w-full h-20 flex">
                        <Image src="" alt="Image" width={100} height={100} />
                        <h1 className="text-2xl ml-4 font-semibold">XtrCrypto</h1>
                    </div>
                    <h3 className="320:text-small-20 text-lg font-bold mb-5">Mailing Address:4th Square Trade Center 180 Greenmile Street, NY 80029</h3>
                    <h3 className="320:text-small-20 text-lg font-bold mb-5">P: +1 800-256-3312</h3>
                    <h3 className="320:text-small-20 text-lg font-bold mb-5">Support@xtracypto.com</h3>
                </div>

                <div className="h-full z-10 md:flex-1 md:flex md:flex-col md:items-center">
                    <div className="h-20 w-full lg:text-center">
                        <h1 className="text-2xl font-semibold">Links</h1>
                    </div>
                    <ul className="list-outside list-disc">
                        <li className="320:text-small-20 text-lg mb-3 font-semibold">Services</li>
                        <li className="320:text-small-20 text-lg mb-3 font-semibold">Investing</li>
                        <li className="320:text-small-20 text-lg mb-3 font-semibold">Blog</li>
                        <li className="320:text-small-20 text-lg mb-3 font-semibold">Contact</li>
                        <li className="320:text-small-20 text-lg mb-3 font-semibold">About</li>
                    </ul>
                </div>

                <div className="h-full z-10  md:flex-1 lg:flex lg:flex-col lg:items-center">
                    <div className="h-20 w-full lg:text-center">
                        <h1 className="text-2xl font-semibold">NewsLetter</h1>
                    </div>
                    <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
                    <form action="" className="flex flex-col">
                        <input type="text" name="" placeholder="Enter your email" className="w-72 h-12 pl-2 border-b-2 border-b-slate-500 pr-3 my-5 mr-5 focus:border-b-slate-200 outline-0" />
                        <button className="bg-green-500 w-28 h-10 md:ml-2 md:mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>

        // Footer end here
    );
}