import projects from "../data/project_data.json";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-start gap-2">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="4.51221" r="4.5" fill="#C0C0C0" />
        </svg>
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
                <img
                  src={`${project.image}`}
                  alt="Rawg clone image"
                  className="h-auto w-56 rounded-lg border-2 border-gray-600 object-cover shadow-md"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
