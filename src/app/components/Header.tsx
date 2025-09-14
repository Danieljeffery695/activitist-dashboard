import Image from "next/image";

export default function Header() {
    return (
        //  Header start here

    <div className="header-div flex my-3">
      <div className="flex-1 h-full pt-34">
        <h1 className="my-2 text-5xl pl-4">The Website for simple Monitoring of your social Activities across every known Social media</h1>
        <p className="my-2 text-lg pl-4 font-semibold text-white">Activist dashboard help manage your activities and keep you well organize. <br/> we work with all known application and show real data by tracking all <br/> big events and notifying you of any important to your care.</p>
        <div className="w-full h-44 pl-3">
          <button className="bg-green-500 w-28 h-10 ml-1 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Get Started</button>
          <button className="bg-green-500 w-28 h-10 ml-2 mt-2 rounded-2xl shadow-md shadow-black cursor-pointer">Learn more</button>
        </div>
      </div>
      <div className="flex-1 h-full">
        <Image src="image1.png" alt="Image" className="w-full object-contain h-full"/>
      </div>
    </div>
    //  Header ends here
    );
}