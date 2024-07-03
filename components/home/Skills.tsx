import Image from "next/image";
const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-4xl leading-10 font-bold">
          My&#160;<span>Skills.</span>
        </h1>
      </div>
      <Image alt="Skills" src={"/skills.svg"} width={895} height={657} className="object-cover mx-auto py-10 max-w-4xl w-full h-full" />
    </section>
  );
};

export default Skills;
