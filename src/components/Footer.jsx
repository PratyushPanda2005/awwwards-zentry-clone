import React from "react";
import { TiLocationArrow } from "react-icons/ti";
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 text-black min-h-screen">
      <div className=" w-full">
        <h1 className="font-zentry special-font text-[40vw]">ze<b>n</b>try</h1>
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="flex justify-between px-4 md:px-16 flex-col sm:flex-row gap-8 sm:gap-0">
          <div className="">
            <img src="/img/logo.png" alt="" />
          </div>
          
          <div className="flex flex-col gap-[4px] ">
            <h1 className="text-xs uppercase font-robert-regular">Explore</h1>
            <a className="text-[20px] font-[500]" href="">Home</a>
            <a className="text-[20px] font-[500]" href="">Prologue</a>
            <a className="text-[20px] font-[500]" href="">About</a>
            <a className="text-[20px] font-[500]" href="">Contact</a>
          </div>
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-xs uppercase font-robert-regular">products</h1>
            <a className="text-[20px] font-[500]" href="">Radiant</a>
            <a className="text-[20px] font-[500] flex gap-2 items-center" href="">Nexus<span><TiLocationArrow/></span></a>
            <a className="text-[20px] font-[500]" href="">Zigma</a>
            <a className="text-[20px] font-[500]" href="">Azul</a>
          </div>
        
         
         <div className="flex flex-col gap-[4px]">
            <h1 className="text-xs uppercase font-robert-regular">follow us</h1>
            <a className="text-[20px] font-[500]" href="">Discord</a>
            <a className="text-[20px] font-[500]" href="">X</a>
            <a className="text-[20px] font-[500]" href="">Youtube</a>
            <a className="text-[20px] font-[500]" href="">Medium</a>
          </div>
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-xs uppercase font-robert-regular">resources</h1>
            <a className="text-[20px] font-[500]"  href="">Media Kit</a>
          </div>
        
       
        </div>
        <div className="flex justify-between p-4">
          <h1 className="text-sm">&copy; Zentry 2024. All rights reserved</h1>
          <h1 className="text-sm">privacy policy</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
