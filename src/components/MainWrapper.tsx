import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

const MainWrapper = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="card-wrapper animated-border col-span-full">
        <HeroSection />
      </div>
      <div className="card-wrapper col-span-full">
        <ProjectSection />
      </div>
      <div className="card-wrapper col-span-full">
        <ExperienceSection />
      </div>
      <div className="col-span-full">
        <SkillSection />
      </div>
    </div>
  );
};

export default MainWrapper;
