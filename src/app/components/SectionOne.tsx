import Image from "next/image";

export default function SectionOne() {
  return (
    // Section one start here

    <section className="w-full bg-white section-first text-center">
      <h3 className="text-2xl text-white">01 -------- Features</h3>
      <h1 className="text-4xl">Harness the collection</h1>
      <h1 className="text-4xl">Power of your Users'CPU</h1>
      <div className="w-full h-full mt-32 flex">
        <div className="w-80 h-96 bg-slate-500 mx-2 flex-1 rounded-lg box-div">
          <div className="w-full h-52">
            <Image src="./image1.png" alt="Image" className="w-64 h-72 object-contain m-auto relative -top-2/3"/>
          </div>
          <div className="w-1/2 m-auto">
            <h3 className="text-3xl text-nowrap my-2 font-extrabold">Default Opt-In</h3>
            <p className="text-lg">All users of your app will become eligible after agreeing during install.</p>
          </div>
        </div>
        <div className="w-80 h-96 bg-slate-500 mx-2 flex-1 rounded-lg box-div">
          <div className="w-full h-52">
            <Image src="./image1.png" alt="Image" className="w-64 h-72 object-contain m-auto relative -top-2/3"/>
          </div>
          <div className="w-1/2 m-auto">
            <h2 className="text-3xl text-nowrap my-2 font-extrabold">Reward Experience</h2>
            <p className="text-lg">Users receive valuable in-app rewards in exchange for mining online.</p>
          </div>
        </div>
        <div className="w-80 h-96 bg-slate-500 mx-2 flex-1 rounded-lg box-div">
          <div className="w-full h-52">
            <Image src="./image1.png" alt="Image" className="w-64 h-72 object-contain m-auto relative -top-2/3"/>
          </div>
          <div className="w-1/2 m-auto">
            <h2 className="text-3xl text-nowrap my-2 font-extrabold">Flexible Opt-Out</h2>
            <p className="text-lg">Users can choose to opt-out at any point and even get paid for remaining crypto.</p>
          </div>
        </div>
      </div>
    </section>


    // Section one ends here
  )
}