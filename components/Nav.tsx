import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex-between z-50 py-4">
      <Link href={"/"} className="font-bold text-2xl sm:text-4xl text-white leading-8">
        Mahmoud
      </Link>

      <div className="justify-center items-center gap-4 md:flex hidden">
        <Link href={"#"} className="text-xl text-white ">
          Home
        </Link>
        <Link href={"#"} className="text-xl text-white ">
          Projects
        </Link>
        <Link href={"#"} className="text-xl text-white ">
          About
        </Link>
        <Link href={"#"} className="text-xl text-white ">
          Services
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
