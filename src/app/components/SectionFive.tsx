import Image from "next/image";

export default function SectionFive() {
    return (
        // Section five start here
        <section className="section-fifth w-full overflow-hidden">
            <div className="section-fifth-div w-full -rotate-9 bg-white overflow-hidden">
                <div className="section-fifth-div-1 flex m-auto rotate-9 pt-23">
                    <div className="pl-4 flex-1">
                        <div className="w-full">
                            <h3 className="text-xl">06 -------- FAQ</h3>
                            <h1 className="text-3xl">Do you have any Questions</h1>
                        </div>
                        <div className="mt-8">

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="w-full flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className="text-lg ml-3 font-semibold">What makes your platform different from other cryptocurrency exchanges?</h3>
                                    <span className="text-xl mr-3">&#9737;</span>
                                </div>
                                <div className="w-full px-2 hidden pb-4">
                                    <h2 className="text-wrap text-lg font-semibold">Our platform offers a user-centric experience with state-of-the-art security features. we combine easy-to-navigate
                                        dashboards, fast trade execution, and an intuitive wallet system.</h2>
                                </div>
                            </div>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="w-full flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className="text-lg ml-3 font-semibold">How do i keep my account and funds secure?</h3>
                                    <span className="text-xl mr-3">&#9737</span>
                                </div>
                                <div className="w-full px-2 hidden pb-4">
                                    <h2 className="text-wrap text-lg font-semibold">Your security is our top priority. We use industry-leading encryption and multi-signature wallets to protect your
                                        assets. We also require two-factor authentication (2FA) for all account logins, withdrawals and transactions.</h2>
                                </div>
                            </div>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className="text-lg ml-3 font-semibold">How do I start investing in cryptocurrencies with your platform?</h3>
                                    <span className="text-xl mr-3">&#9737</span>
                                </div>
                                <div className="w-full px-2 pb-4 hidden">
                                    <h2 className="text-wrap text-lg font-semibold">Absolutely! Our platform is fully optimized for mobile use. Whether you're on the go or at home, our mobile app and
                                        responsive website ensure that you have full access to your account and trading options</h2>
                                </div>
                            </div>

                            <div className="w-full h-full bg-red-500 rounded-2xl mb-2">
                                <div className="flex items-center justify-between h-24 border-b-2 rounded-bl-2xl rounded-br-2xl">
                                    <h3 className="text-lg ml-3 font-semibold">Can i trade from my phone or tablet?</h3>
                                    <span className="text-xl mr-3">&#9737</span>
                                </div>
                                <div className="w-full px-2 pb-4 hidden">
                                    <h2 className="text-wrap text-lg font-semibold">Our platform offers a user-centric experience with state-of-the-art security features. We combine easy-to-navigate
                                        dashboards, fast trade execution, and an intuitive wallet system.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-44 pl-3">
                            <button className="bg-green-500 w-28 h-10 ml-1 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Get Started</button>
                            <button className="bg-green-500 w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Learn more</button>
                        </div>
                    </div>
                    <div className="ml-5 flex-1">
                        <Image src="image1.png" alt="Image" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-white"></div>

        </section>
        // Section five end here
    )
}