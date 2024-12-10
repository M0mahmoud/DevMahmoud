import Link from "next/link";

const Nav = () => {
    return (
        <nav
            id="home"
            className="z-50 flex items-center justify-between w-full py-4"
        >
            <Link aria-label="My Logo" href={"/"} className="">
                <img
                    src="/MYLOGO.svg"
                    width={80}
                    height={80}
                    alt="Logo"
                    className="object-contain mr-auto"
                    fetchPriority="high"
                    rel=""
                />
            </Link>

            <div className="flex items-center justify-center gap-4">
                <Link href={"/blog"} className="text-xl text-white uppercase">
                    Blog
                </Link>
                <Link
                    href={"#contact"}
                    className="text-xl text-white uppercase"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
