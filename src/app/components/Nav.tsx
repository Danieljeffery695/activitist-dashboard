"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { DiCodeBadge, DiDatabase, DiGithubBadge } from "react-icons/di";
import { epunda, cormorant } from "../utils/Fonts";

export default function Nav() {
  const [testing, setTesting] = useState<boolean | null> (false);
  const [navClicked, setNavClicked] = useState<boolean | null> (false);
  let lastScrollY: number = window.scrollY;

  function isBarClicked() {
      if(navClicked) {
        setNavClicked(false);
      } else {
        setNavClicked(true);
      }
  }
 
  useEffect(() => {

    window.addEventListener('scroll', () => {
      const currentScrollY: number = window.scrollY;
      if (currentScrollY > lastScrollY) {
      // user is scrolling down
      setTesting(true)
      } else {
        // User is scrolling up (optional)
        setTesting(false)
      }
      
      lastScrollY = currentScrollY; // update lastScrollY for the next comparison
    });
  }, []);

  return (
    // Navigation start here
    <>
    <nav className={`${navClicked ? 'hidden' :  'nav2 z-20 w-full flex items-center h-18 justify-between'} 
    ${testing ? 'absolute -top-[50%] translate-y-[20px] opacity-0' : 'fixed top-0 translate-y-0 opacity-100'} transition-all transition-discrete delay-500 duration-500 ease-in-out`}>
      <div className="md:flex-2 h-full 320:flex-5">
        <Image src="/activities.png" alt="Logo" width={85} height={100} className="w-25 h-full ml-3 object-contain"/>
      </div>
      <div className="320:hidden flex-6 h-full text-center md:flex justify-center items-center">
        <a href="" className="ml-3 font-bold">About us</a>
        <a href="" className="ml-3 font-bold">Services</a>
        <a href="" className="ml-3 font-bold">Blogs</a>
        <a href="" className="ml-3 font-bold">Contact us</a>
      </div>
      <div className="320:hidden flex-2 md:flex">
        <button className="bg-green-500 w-28 h-10 mx-2 rounded-2xl shadow-md shadow-black cursor-pointer">Login</button>
        <button className="bg-green-500 w-28 h-10 mx-2 rounded-2xl shadow-md shadow-black cursor-pointer">Sign-Up</button>
      </div>
      <div className="md:hidden h-full flex-1">
        <div className="lg:hidden flex justify-end">
          <div className={`w-10 h-10 rounded-p-50 bg-green-500 text-white mr-3 mt-3 flex justify-center items-center 540:text-3xl 540:w-14 540:h-14 540:mt-1`} onClick={isBarClicked}>
            <HiMiniBars3BottomRight />
          </div>
        </div>
      </div>
    </nav>

     <div className={`${navClicked ? 'w-full h-full fixed top-0 right-0 bg-transparent flex z-50 translate-x-0 opacity-100' :
       '-right-[50%] translate-x-[50px] opacity-0 fixed'} transition-all transition-discrete delay-200 duration-200 ease-in`}>
            <div className="w-[20%] h-full z-30 pt-5 flex justify-center">
                <span className={`${navClicked ? 'text-2xl ml-4 sticky top-0 text-green-600 font-black cursor-pointer opacity-100' :
                  '-right-[50%] translate-x-[50px] opacity-0'}transition-all transition-discrete delay-300 duration-300 ease-in
                  `} onClick={isBarClicked}> <TfiClose/> </span>
            </div>
            <div className="w-[80%] h-full bg-slate-700 z-30 overflow-hidden">
                <div className="sticky top-0">
                    <div className={`${navClicked ? 'w-full h-50 border-b-2 border-slate-600 pt-3 top-0 translate-y-0 opacity-100' :
                       '-top-[50%] opacity-0 translate-y-[20px]'} transition-all transition-discrete delay-200 duration-200 ease-in-out`}>
                        <a href="" className={`${epunda.className} text-xl pl-2.5 text-white`}>Home</a>
                    </div>
                    <div className={`${navClicked ? 'w-full h-50 border-b-2 border-slate-600 pt-3 top-0 translate-y-0 opacity-100' :
                       '-top-[50%] opacity-0 translate-y-[30px]'} transition-all transition-discrete delay-300 duration-300 ease-in-out`}>
                        <a href="" className={`${epunda.className} text-xl pl-2.5 text-white mt-4`}>About US</a>
                    </div>
                    <div className={`${navClicked ? 'w-full h-50 border-b-2 border-slate-600 pt-3 top-0 translate-y-0 opacity-100' :
                       '-top-[50%] opacity-0 translate-y-[40px]'} transition-all transition-discrete delay-400 duration-400 ease-in-out`}>
                        <a href="" className={`${epunda.className} text-xl pl-2.5 text-white mt-4`}>Services</a>
                    </div>
                    <div className={`${navClicked ? 'w-full h-50 border-b-2 border-slate-600 pt-3 top-0 translate-y-0 opacity-100' :
                       '-top-[50%] opacity-0 translate-y-[50px]'} transition-all transition-discrete delay-500 duration-500 ease-in-out`}>
                        <a href="" className={`${epunda.className} text-xl pl-2.5 text-white mt-4`}>Pages</a>
                    </div>
                    <div className={`${navClicked ? 'w-full h-50 border-b-2 border-slate-600 pt-3 top-0 translate-y-0 opacity-100' :
                       '-top-[50%] opacity-0 translate-y-[60px]'} transition-all transition-discrete delay-600 duration-600 ease-in-out`}>
                        <a href="" className={`${epunda.className} text-xl pl-2.5 text-white mt-4`}>Blog</a>
                    </div>
                    <div className={`${navClicked ? 'w-full h-50 border-b-2 border-slate-600 pt-3 top-0 translate-y-0 opacity-100' :
                       '-top-[50%] opacity-0 translate-y-[70px]'} transition-all transition-discrete delay-700 duration-700 ease-linear`}>
                        <a href="" className={`${epunda.className} text-xl pl-2.5 text-white mt-4`}>Contact US</a>
                    </div>

                    <div className={`${navClicked ? 'w-full h-100 mt-5 translate-y-0 opacity-100' : 'opacity-0 translate-y-[80px]'}
                     transition-all transition-discrete delay-800 duration-800 ease-in-out`}>
                      <div className="flex items-center mt-10 justify-center">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg border-slate-400 bg-green-700 text-white ml-2">
                          <DiCodeBadge/>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg border-slate-400 bg-green-700 text-white ml-2">
                          <DiDatabase/>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg border-slate-400 bg-green-700 text-white ml-2">
                          <DiGithubBadge/>
                        </div>
                      </div>
                      <div className="w-full h-full text-center text-white">
                        <h2 className={`${cormorant.className} text-lg`}>&#64; Copyright 2025</h2>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    // Navigation ends here
  );
}
