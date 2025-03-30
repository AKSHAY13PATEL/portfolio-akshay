import { motion } from "framer-motion";

const SkillSection = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Redux",
    "React Query",
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Title */}
      <div className="flex items-center justify-start gap-2">
        <span className="text-3xl font-semibold text-white">Skills</span>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 12px rgba(255, 100, 50, 0.8)",
            }}
            className="flex items-center justify-center rounded-lg border border-transparent bg-[#1e1e1e] px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-orange-500/80"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
