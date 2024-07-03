import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex-between gap-6 flex-col sm:flex-row">
      <div className="flex items-start justify-center flex-col gap-12">
        <h1 className="text-4xl leading-10 font-bold">
          Hi, I am Mahmoud
          <br />
          <span>FrontEnd Developer</span>
        </h1>

        <p className="max-w-lg font-medium  text-gray-400">Front-End Developer From Egypt. I Have Rich Experience In Web Site Development And Building, I Also Work With Frame Work React Js, And I Love To Talk With You About Our Unique.</p>
        <div className="flex justify-start items-center gap-5">
          <button className="border-white border-[1px] rounded-full  px-8 py-2 ">Open CV</button>
          <button className="border-none  rounded-full  px-4 py-2 sp">Let&#39;s Talk </button>
        </div>
      </div>
      <Image src={"/mahmoud-removebg.png"} alt="Mahmoud" width={350} height={380} className="bg-cover " />
    </section>
  );
};

export default Hero;
