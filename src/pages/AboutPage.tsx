import Footer from "../components/Footer";
import MainWrapper from "../components/MainWrapper";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="mx-auto flex max-w-[1215px] flex-col gap-5 px-4">
      <Navbar />
      <MainWrapper />
      <Footer />
    </div>
  );
};

export default AboutPage;
