import ZoomBanner from "@/assets/banner.png";
import barinWave from "@/assets/brainwave.png";
import threads from "@/assets/threads.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const PROJECTS = [
  {
    id: "125",
    title: "Zoom Clone",
    desc: "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    codeLink: "https://github.com/M0mahmoud/zoom-clone/",
    demo: "https://zoom-clone05.vercel.app/",
    image: ZoomBanner,
  },
  {
    id: "163",
    title: "Threads",
    desc: "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    codeLink: "https://github.com/M0mahmoud/threads",
    demo: "https://threads05.vercel.app/",
    image: threads,
  },
  {
    id: "145",
    title: "Brain Wave",
    desc: "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    codeLink: "https://github.com/M0mahmoud/BrainWave/",
    demo: "https://brain-wave-05.vercel.app/",
    image: barinWave,
  },
];
const Pojects = () => {
  return (
    <section id="projects" className="py-10">
      <div className="flex items-center justify-center flex-col gap-3 mb-8">
        <h2 className="text-4xl leading-10 font-bold">
          Look at My&#160; <span className="hsp">Projects.</span>
        </h2>
        <p className="max-w-lg font-medium  text-gray-400">Each showcases my skills in creating user-friendly and visually appealing web applications. Dive in to see how I bring ideas to life with cutting-edge technologies and innovative designs.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-5">
        {PROJECTS.map((project) => (
          <div className="project rounded-lg bg-dark-2 w-full pb-3" key={project.id}>
            <Image alt={project.title} src={project.image} width={400} height={400} loading="lazy" className="w-full object-cover max-h-52 min-h-52 rounded-t-lg mb-6" />
            <div className="flex justify-between items-center p-3">
              <h3 className="text-2xl font-semibold leading-8">{project.title}</h3>
              <div className="flex gap-3">
                {project.demo && (
                  <Link aria-label="Demo Link" href={project.demo}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="inline-flex w-6 h-6 fill-white">
                      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                  </Link>
                )}
                {project.codeLink && (
                  <Link aria-label="Code Link" href={project.codeLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="inline-flex w-6 h-6 fill-white">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
            {/* <Link href={`/p/${project.id}`} className="text-lg font-light p-3 text-start transition group">
              More Details{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="inline-flex w-4 h-4 fill-white group-hover:animate-move-arrow transition-transform">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pojects;
