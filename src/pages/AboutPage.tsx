import Footer from "../components/Footer";
import GlowingNetworkGrid from "../components/GlowingNetworkGrid";
import MainWrapper from "../components/MainWrapper";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="relative mx-auto flex flex-col gap-10 px-0">
      <Navbar />
      <GlowingNetworkGrid />
      <div className="relative z-10 mb-2 flex flex-col gap-10">
        <MainWrapper />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
