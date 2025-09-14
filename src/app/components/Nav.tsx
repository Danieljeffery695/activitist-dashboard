import Image from "next/image";

export default function Nav() {
  return (
    // Navigation start here
     <nav className="nav2 w-full h-16 flex items-center justify-between">
      <div className="flex-2 h-full">
        <Image src="./activities.png" alt="Logo" className="w-25 h-full ml-3 object-contain"/>
      </div>
      <div className="flex-6 h-full text-center flex justify-center items-center">
        <a href="" className="ml-3 font-bold">About us</a>
        <a href="" className="ml-3 font-bold">Services</a>
        <a href="" className="ml-3 font-bold">Blogs</a>
        <a href="" className="ml-3 font-bold">Contact us</a>
      </div>
      <div className="flex-2">
        <button className="bg-green-500 w-28 h-10 rounded-2xl shadow-md shadow-black cursor-pointer">Login</button>
        <button className="bg-green-500 w-28 h-10 rounded-2xl shadow-md shadow-black cursor-pointer">Sign-Up</button>
      </div>
    </nav>

    // Navigation ends here
  );
}
