import { MYSERVICES } from "@/constant";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="flex items-center justify-center flex-col gap-3 mb-8">
        <h2 className="text-4xl leading-10 font-bold">
          My&#160;<span className="hsp">Services.</span>
        </h2>
        <p className="max-w-2xl text-balance font-medium text-center text-gray-400">Providing high-quality web solutions, from SEO and responsive design to clean code and high-performance websites, tailored to your needs with expertise in RESTful API development and website optimization.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-5">
        {MYSERVICES.map((service) => (
          <div key={service.id} className="rounded-lg bg-dark-2 w-full px-3 py-4 shadow-lg">
            <Image alt={service.title} width={100} height={100} loading="lazy" src={service.svg} className="object-cover mx-auto w-24 h-24" />
            <h3 className="text-[1.35rem] font-semibold mt-3 mb-2 text-center">{service.title}</h3>
            <p className="text-gray-400 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
