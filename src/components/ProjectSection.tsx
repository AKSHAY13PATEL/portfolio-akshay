import { useNavigate } from "react-router-dom";
import projects from "../data/project_data.json";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      {/* Section Title */}
      <div className="text-3xl font-semibold text-white">Projects</div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer rounded-lg bg-[#1e1e1e] p-6 shadow-lg transition-all duration-300 ease-in-out hover:bg-[#130f0b] hover:bg-opacity-80"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              navigate(
                `/portfolio/${project.name.toLowerCase().replace(/\s+/g, "-")}`,
              )
            }
          >
            {/* Project Name */}
            <div className="text-xl font-semibold text-white">
              {project.name}
            </div>

            <div>
              <HiExternalLink className="absolute right-4 top-4 text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>

            {/* Project Description */}
            <p className="mt-2 text-base text-gray-400">
              {project.description}
            </p>

            {/* Technologies Used */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
