import aboutme from "@/assets/aboutme.svg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex items-center justify-center flex-col md:flex-row gap-4 sm:gap-10 ">
        <Image alt="aboutme" src={aboutme} width={250} height={250} loading="lazy" />

        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-4xl leading-10 font-bold">
            About&#160;<span className="hsp">Me!</span>
          </h2>
          <p className="font-medium text-gray-400 w-full md:max-w-xl">Hi, my name is Mahmoud. I am a graduate of the Faculty of Science, Computer Science department 2021 - 2024. I am from Egypt. I have rich experience in website development and building.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
