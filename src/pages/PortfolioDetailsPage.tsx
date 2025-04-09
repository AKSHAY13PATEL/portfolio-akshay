import { useParams } from "react-router-dom";
import projects from "../data/project_data.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { useState } from "react";

const PortfolioDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultIndex, setDefaultIndex] = useState(0);
  const params = useParams();
  const id = params.id;

  if (!id) {
    return <div className="text-center text-red-500">Project ID not found</div>;
  }

  // Find project by ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center text-red-500">Project Not Found</div>;
  }

  return (
    <div className="mx-auto mt-24 max-w-4xl px-5">
      <Navbar />
      <div className="mt-16">
        {/* Project Title & Description */}
        <h1 className="text-4xl font-bold text-white">{project.name}</h1>
        <p className="mt-2 text-lg text-gray-400">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              className="flex items-center gap-1 text-orange-400 hover:text-orange-500"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-1 text-gray-300 hover:text-white"
            >
              GitHub <FaGithub />
            </a>
          )}
        </div>

        {/* Key Features Section */}
        {project.features && project.features.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-400">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshot Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Project Screenshots
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {isOpen && (
              <Carousel
                project={project}
                setOpen={setIsOpen}
                defaultIndex={defaultIndex}
              />
            )}
            {!isOpen && (
              <>
                {project.image.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg transition hover:scale-105"
                    onClick={() => {
                      setDefaultIndex(index);
                      setIsOpen(true);
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        {/* Challenges & Learnings */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Challenges & Learnings
          </h2>
          <p className="mt-2 text-gray-400">{project.challenges}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
