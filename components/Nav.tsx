import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav id="home" className="w-full flex justify-between items-center z-50 py-4">
      <Link aria-label="My Logo" href={"/"} className="font-bold text-2xl sm:text-4xl text-white leading-8 flex items-center justify-center w-full gap-2">
        <Image src="/MYLOGO.svg" width={80} height={80} alt="Logo" className="mr-auto object-contain" />
      </Link>

      <div className="justify-center items-center gap-4 md:flex hidden">
        <Link href={"#home"} className="text-xl text-white uppercase">
          Home
        </Link>
        <Link href={"#projects"} className="text-xl text-white uppercase">
          Projects
        </Link>
        <Link href={"#services"} className="text-xl text-white uppercase">
          Services
        </Link>
        <Link href={"#contact"} className="text-xl text-white uppercase">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
