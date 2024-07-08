import { PROJECTS } from "@/components/home/Pojects";
import Image from "next/image";
import React from "react";

const ProjectPage = ({ params: { id } }: { params: { id: string } }) => {
  const proect = PROJECTS.find((el) => el.id === id);

  return (
    <section>
      <h2>{proect?.title}</h2>
      <div>
        <Image alt={proect?.title!} src={proect?.image!} width={800} height={600} className="rounded-lg" />
      </div>
    </section>
  );
};

export default ProjectPage;
