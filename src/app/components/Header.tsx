import Image from "next/image";

export default function Header() {
    return (
        //  Header start here

    <div className="header-div flex my-3 320:h-p-700 320:flex-col 320:text-center 410:h-p-800 md:flex-row">
      <div className="md:flex-row flex-1 h-full lg:pt-34">
        <h1 className="320:text-3xl 410:text-small-40 540:text-small-45 my-2 text-5xl pl-4">The Website for simple Monitoring of your social Activities across every known Social media</h1>
        <p className="320:text-small-15 410:text-small-17 410:w-4/5 my-2 md:text-lg pl-4 font-semibold text-white sm:w-58 md:w-full">Activist dashboard help manage your activities and keep you well organize. <br/> we work with all known application and show real data by tracking all <br/> big events and notifying you of any important to your care.</p>
        <div className="320:h-p-85 w-full md:h-44 md:pl-3">
          <button className="320:w-100 320:text-small-14 410:w-30 410:text-small-15 410:h-10 bg-green-500 md:w-28 h-10 ml-1 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Get Started</button>
          <button className="320:w-100 320:text-small-14 410:w-30 410:text-small-15 410:h-10 bg-green-500 md:w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Learn more</button>
        </div>
      </div>
      <div className="320:h-p-200 md:flex-1 md:h-full">
        <Image src="/image1.png" alt="Image" width={65} height={100} className="w-full object-contain h-full"/>
      </div>
    </div>
    //  Header ends here
    );
}