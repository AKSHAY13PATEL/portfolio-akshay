import Footer from "../components/Footer";
import GlowingNetworkGrid from "../components/GlowingNetworkGrid";
import MainWrapper from "../components/MainWrapper";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="mx-auto flex max-w-[1215px] flex-col gap-5 px-4">
      <Navbar />
      <GlowingNetworkGrid />
      <div className="mb-2 mt-24 flex flex-col gap-5">
        <MainWrapper />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
