import Image from "next/image";
import { epunda, cormorant} from "../layout";

export default function Header() {
    return (
        //  Header start here

    <div className="header-div flex my-3 320:h-700 320:flex-col 320:text-center 410:h-800 850:text-left 850:flex-row">
      <div className="md:flex-row flex-1 h-full 850:pt-34">
        <h1 className={`320:text-3xl ${cormorant.className} 410:text-small-40 540:text-small-45 my-2 text-5xl pl-4`}>The Website for simple Monitoring of your social Activities across every known Social media</h1>
        <p className={`320:text-small-15 ${epunda.className} 410:text-small-17 410:w-4/5 mx-auto my-2 md:text-lg 850:w-full pl-4 font-semibold text-white`}>Activist dashboard help manage your activities and keep you well organize. <br className="320:hidden" /> we work with all known application and show real data by tracking all <br className="320:hidden" /> big events and notifying you of any important to your care.</p>
        <div className="320:h-85 w-full md:h-44 md:pl-3">
          <button className={`320:w-100 ${cormorant.className} 320:text-small-14 410:w-30 410:text-small-15 410:h-10 bg-green-500 md:w-28 h-10 ml-1 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer`}>Get Started</button>
          <button className={`320:w-100 ${cormorant.className} 320:text-small-14 410:w-30 410:text-small-15 410:h-10 bg-green-500 md:w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer`}>Learn more</button>
        </div>
      </div>
      <div className="320:h-300 540:h-400 md:flex-1 md:h-full relative">
        <Image src="/image1.png" alt="Image" fill className="object-contain"/>
      </div>
    </div>
    //  Header ends here
    );
}