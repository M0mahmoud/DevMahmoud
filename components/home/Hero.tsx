import { CV } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex justify-between items-center flex-col sm:flex-row gap-6">
      <div className="flex items-start justify-center flex-col gap-12">
        <h1 className="text-4xl leading-10 font-bold">
          Hi, I am Mahmoud
          <br />
          <span className="hsp">FrontEnd Developer</span>
        </h1>

        <p className="max-w-lg font-medium  text-gray-400">
          Front-End Developer From Egypt. I Have Rich Experience In Web Site
          Development And Building, I Also Work With Frame Work React Js, And I
          Love To Talk With You About Our Unique.
        </p>
        <div className="flex justify-start items-center gap-5 flex-wrap">
          <Link
            target="_blank"
            href={CV}
            className="border-white border-[1px] rounded-full  px-8 py-2 "
          >
            Open CV
          </Link>
          <Link
            href={"#contact"}
            className="border-none  rounded-full  px-4 py-2 sp"
          >
            Let&#39;s Talk{" "}
          </Link>
        </div>
      </div>
      <Image
        src={"/mahmoud-removebg.png"}
        alt="Mahmoud"
        width={350}
        height={380}
        className="bg-cover"
        loading="eager"
      />
    </section>
  );
};

export default Hero;
