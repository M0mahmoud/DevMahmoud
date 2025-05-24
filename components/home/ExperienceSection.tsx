import { EXPERIENCE } from "@/constant";
import React from "react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-10">
      <div className="flex items-center justify-center flex-col gap-3 mb-8">
        <h2 className="text-4xl leading-10 font-bold">
          My&#160;<span className="hsp">Experience.</span>
        </h2>
        <p className="max-w-2xl text-balance font-medium text-center text-gray-400 capitalize">
          A journey through my professional career, showcasing growth,
          achievements, and the impact I&lsquo;ve made in web development and
          building exceptional digital experiences.
        </p>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6"></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-500 to-purple-400"></div>

        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-16 ${
              index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900 z-10 ${
                index % 2 === 0
                  ? "left-5 md:left-auto md:right-[-12px]"
                  : "left-5 md:left-[-12px]"
              }`}
            ></div>

            {/* Experience Card */}
            <div
              className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-purple-500/20">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg md:text-xl  hsp font-semibold">{exp.company}</h4>
                  </div>
                  <div className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 text-sm font-medium w-fit">
                    {exp.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills */}
                <div>
                  <h5 className="text-lg font-semibold hsp mb-4">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
