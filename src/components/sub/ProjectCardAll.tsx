import Image from "next/image";
import React from "react";
import { ProjectsAll } from "@/constants";

const ProjectCardAll = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {ProjectsAll.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300"
        >
          <Image
            src={project.src}
            alt={project.title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />

          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-[#2A0E61] hover:bg-[#7042f88b] text-white rounded-full transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardAll;
