import Link from "next/link";
import React from "react";
import { HomeIcon, IdentificationIcon } from "@heroicons/react/24/solid";

const AppBar = () => {
  return (
    <header className="bg-gradient-to-b from-white to-slate-200 px-2 py-3 shadow  flex gap-5">
      <Link
        className="text-slate-500 hover:text-sky-500 transition-colors flex items-center gap-2"
        href={"/"}
      >
        <HomeIcon className="w-6" />
        <span>Home</span>
      </Link>
      <Link
        className="text-slate-500 hover:text-sky-500 transition-colors flex items-center  gap-2"
        href={"/about"}
      >
        <IdentificationIcon className="w-6" />
        <span>About</span>
      </Link>
    </header>
  );
};

export default AppBar;
