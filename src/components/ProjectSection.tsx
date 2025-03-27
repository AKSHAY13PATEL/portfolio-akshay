import { useState } from "react";
import projects from "../data/project_data.json";
import Carousel from "./Carousel";
import { motion } from "motion/react";

type Project = {
  name: string;
  description: string;
  image: string[];
};

const ProjectSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex items-center justify-start gap-2">
          <span className="text-2xl text-secondary">Projects</span>
        </div>
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => {
            return (
              <div key={index} className="flex justify-between gap-10">
                <div>
                  <div className="text-xl font-medium">{project.name}</div>
                  <div className="text-base font-normal text-secondary">
                    {project.description}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <motion.img
                    src={`${Array.isArray(project.image) ? project.image?.[0] : project.image}`}
                    alt={project.name}
                    className="h-auto w-56 cursor-pointer rounded-lg border-2 border-gray-600 object-cover shadow-md"
                    onClick={() => {
                      setOpen(true);
                      setSelectedProject(project);
                    }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {open && <Carousel project={selectedProject} setOpen={setOpen} />}
    </>
  );
};

export default ProjectSection;
