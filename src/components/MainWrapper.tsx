import HeroSection from "./HeroSection";
import RecentWorks from "./RecentWorks";
import SkillSection from "./SkillSection";

const MainWrapper = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="card-wrapper col-span-full">
        <HeroSection />
      </div>
      <div className="card-wrapper col-span-2 row-start-2 row-end-4">
        <RecentWorks />
      </div>
      <div className="col-span-2 row-start-2 row-end-4">
        <SkillSection />
      </div>
      <div className="card-wrapper col-span-full">Projects</div>
      <div className="card-wrapper col-span-full">Experience</div>
    </div>
  );
};

export default MainWrapper;
