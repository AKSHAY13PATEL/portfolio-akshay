import HeroSection from "./HeroSection";
import RecentWorks from "./RecentWorks";

const MainWrapper = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="card-wrapper col-span-full">
        <HeroSection />
      </div>
      <div className="card-wrapper col-span-2 row-start-2 row-end-4">
        <RecentWorks />
      </div>
      <div className="card-wrapper col-span-2 row-start-2 row-end-4">
        Skill Highlight section
      </div>
      <div className="card-wrapper col-span-full">Projects</div>
      <div className="card-wrapper col-span-full">Experience</div>
    </div>
  );
};

export default MainWrapper;
