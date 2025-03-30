import experiences from "../data/experience_data.json";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* Section Title */}
      <div className="flex items-center justify-start gap-2">
        <span className="text-3xl font-semibold text-white">Experience</span>
      </div>

      {/* Timeline Layout */}
      <div className="relative flex gap-8">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-transparent"></div>

        <div className="ml-10 flex w-full flex-col gap-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[33px] top-0 h-5 w-5 rounded-full border-2 border-gray-300 bg-orange-500 transition-all duration-300 group-hover:scale-125"></div>

              {/* Experience Content */}
              <div className="rounded-lg bg-[#1e1e1e] p-5 shadow-md transition-all duration-300 ease-in-out group-hover:translate-x-3">
                {/* Company & Role */}
                <div className="flex items-center justify-between text-xl font-semibold text-white">
                  <span>
                    {experience.company_name} | {experience.role}
                  </span>
                  <span className="text-sm text-gray-400">
                    {experience.duration}
                  </span>
                </div>

                {/* Project & Description */}
                <p className="mt-2 text-gray-400">
                  <span className="font-medium text-orange-400">
                    {experience.project_name}
                  </span>
                  : {experience.short_description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
