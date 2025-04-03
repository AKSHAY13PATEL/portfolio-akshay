import { Link } from "react-router-dom";
import projects from "../data/project_data.json";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-24 max-w-6xl px-5">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">My Portfolio</h1>
          <p className="mt-2 text-gray-400">
            A collection of my best work in web application development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Featured Projects
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="rounded-lg bg-gray-800 p-4 shadow-lg transition hover:scale-105"
              >
                <img
                  src={project.image[0]}
                  alt={project.name}
                  className="rounded-lg"
                />
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-lg bg-gray-700 px-2 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex justify-between">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="text-orange-400 hover:text-orange-500"
                    >
                      Live Demo
                    </a>
                  )}
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="text-gray-300 hover:text-white"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white">All Projects</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                to={`/portfolio/${project.id}`}
                key={project.id}
                className="rounded-lg bg-gray-800 p-4 shadow-lg transition hover:scale-105"
              >
                <img
                  src={project.image[0]}
                  alt={project.name}
                  className="rounded-lg"
                />
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16 mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white">Let's Connect!</h2>
          <p className="mt-2 text-gray-400">
            Have a project in mind? Reach out and let's build something amazing.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
