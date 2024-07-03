import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="flex-between gap-4 flex-col sm:flex-row py-20">
      <div className="flex items-start justify-center flex-col gap-4">
        <h1 className="text-4xl leading-10 font-bold">
          About&#160;<span>Me!</span>
        </h1>
        <p className="font-medium text-gray-400 w-full md:max-w-xl">
          Front-End Developer From Egypt. I Have Rich Experience In Web Site Development And Building, I Also Work With Frame Work React Js, And I Love To Talk With You About Our Unique. Front-End Developer From Egypt. I Have Rich Experience In Web Site Development And Building, I Also Work With Frame Work React Js, And I Love To Talk With You About Our Unique
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
