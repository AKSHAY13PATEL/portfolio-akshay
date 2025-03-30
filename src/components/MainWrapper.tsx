import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

const MainWrapper = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <HeroSection />
      </div>
      <div className="card-wrapper">
        <ProjectSection />
      </div>
      <div className="card-wrapper animated-fade-in">
        <ExperienceSection />
      </div>
      <div className="card-wrapper">
        <SkillSection />
      </div>
    </div>
  );
};

export default MainWrapper;
