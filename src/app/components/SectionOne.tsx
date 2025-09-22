import Image from "next/image";

export default function SectionOne() {
  return (
    // Section one start here

    <section className="320:h-p-1100 320:overflow-hidden 370:h-p-1200 w-full bg-white section-first text-center">
      <h3 className="text-2xl md:text-white">01 -------- Features</h3>
      <h1 className="text-4xl">Harness the collection</h1>
      <h1 className="text-4xl">Power of your Users'CPU</h1>
      <div className="320:h-p-800 320:grid 320:grid-rows-2 370:h-p-900 w-full md:h-full mt-32 md:flex">
        <div className="320:m-auto 320:w-35 320:h-88 410:w-[190px] md:w-80 md:h-96 bg-slate-500 mx-2 flex-1 rounded-lg box-div">
          <div className="320:h-p-100 w-full md:h-52">
            <Image src="/image1.png" alt="Image" width={100} height={100} className="320:-top-full 320:h-52 w-64 md:h-72 object-contain m-auto relative md:-top-2/3"/>
          </div>
          <div className="md:w-full lg:w-1/2 m-auto">
            <h3 className="md:text-3xl md:text-nowrap my-2 font-extrabold">Default Opt-In</h3>
            <p className="text-lg">All users of your app will become eligible after agreeing during install.</p>
          </div>
        </div>
        <div className="320:m-auto 320:w-35 320:h-88 md:w-80 md:h-96 bg-slate-500 mx-2 flex-1 rounded-lg box-div">
          <div className="320:h-p-100 w-full md:h-52">
            <Image src="/image1.png" alt="Image" width={100} height={100} className="320:-top-full 320:h-52 w-64 md:h-72 object-contain m-auto relative md:-top-2/3"/>
          </div>
          <div className="md:w-full lg:w-1/2 m-auto">
            <h2 className="md:text-3xl md:text-nowrap my-2 font-extrabold">Reward Experience</h2>
            <p className="text-lg">Users receive valuable in-app rewards in exchange for mining online.</p>
          </div>
        </div>
        <div className="320:mx-auto 320:w-78 320:h-p-200 320:col-span-3 370:w-[350px] 370:h-p-300 410:w-p-400 410:h-60 md:w-80 md:h-96 bg-slate-500 mx-2 flex-1 rounded-lg box-div">
          <div className="320:h-p-100 w-full md:h-52">
            <Image src="/image1.png" alt="Image" width={100} height={100} className="320:-top-full 320:h-52 w-64 md:h-72 object-contain m-auto relative md:-top-2/3"/>
          </div>
          <div className="md:w-full lg:w-1/2 m-auto">
            <h2 className="md:text-3xl md:text-nowrap my-2 font-extrabold">Flexible Opt-Out</h2>
            <p className="text-lg">Users can choose to opt-out at any point and even get paid for remaining crypto.</p>
          </div>
        </div>
      </div>
    </section>


    // Section one ends here
  )
}