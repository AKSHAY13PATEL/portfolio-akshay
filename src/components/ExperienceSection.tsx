import experiences from "../data/experience_data.json";

const ExperienceSection = () => {
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
        <span className="text-2xl text-secondary">Experience</span>
      </div>
      <div className="flex gap-6">
        <div className="mt-2 h-auto w-2 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => {
            return (
              <div key={index} className="relative flex justify-between gap-10">
                <div className="absolute left-[-38px] mt-1 h-5 w-5 rounded-full border-2 border-gray-200 bg-orange-500"></div>
                <div>
                  <div className="text-xl font-medium">
                    {experience.company_name} | {experience.role}
                  </div>
                  <div className="text-base font-normal text-secondary">
                    {experience.duration}
                  </div>
                  <div className="text-sm text-secondary">
                    {experience.project_name} : {experience.short_description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
