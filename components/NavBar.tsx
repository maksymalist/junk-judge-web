import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-full h-12 rounded-full px-8">
      <div className="flex w-full h-full flex-row justify-between items-center">
        <div className="ml-[2px]" />
        <a
          href="mailto:maksymvovkk@gmail.com"
          className="bg-white p-2 animate-pulse rounded-full mr-[2px] border-2 border-black text-black font-bold px-6"
        >
          get in touch
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
