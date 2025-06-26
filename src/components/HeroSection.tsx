import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Notification from "./Notification";
import Highlight from "./Highlight";

const HeroSection = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-[#0D0D0D] px-4 pt-20 text-white sm:px-8 md:px-16 md:pt-0 lg:px-32">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-2 top-4 h-[120px] w-[120px] rounded-full bg-gradient-to-br from-[#E63E21] to-[#C42D19] opacity-20 blur-[80px] sm:left-10 sm:top-10 sm:h-[200px] sm:w-[200px] sm:blur-[120px]"></div>
        <div className="absolute bottom-4 right-2 h-[150px] w-[150px] rounded-full bg-gradient-to-br from-[#E63E21] to-[#C42D19] opacity-20 blur-[90px] sm:bottom-10 sm:right-10 sm:h-[250px] sm:w-[250px] sm:blur-[150px]"></div>
      </div>

      {/* Two-Column Layout */}
      <div className="relative z-0 mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 sm:gap-12 md:max-w-6xl md:grid-cols-2 md:gap-16">
        {/* Left Column - Intro */}
        <div className="flex flex-col items-start">
          {/* Subheading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Hey, I'm <span className="text-[#E63E21]">Akshay Patel</span>
          </motion.h1>

          {/* Name & Headline */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 text-base font-medium uppercase tracking-widest text-gray-400 sm:text-lg"
          >
            Frontend Developer
          </motion.span>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-3 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            I bring ideas to life with elegant, efficient, and scalable
            front-end development. Passionate about{" "}
            <Highlight>crafting intuitive user experiences</Highlight> that
            blend design with performance.
          </motion.p>
        </div>

        {/* Right Column - About Me & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-start gap-4 sm:gap-6"
        >
          {/* About Me */}
          <div>
            <h2 className="text-xl font-semibold text-gray-200 sm:text-2xl">
              About Me
            </h2>
            <p className="mt-2 text-base leading-relaxed text-gray-400 sm:mt-3 sm:text-lg">
              I specialize in{" "}
              <Highlight>
                building modern, scalable, and accessible UI components
              </Highlight>{" "}
              that deliver seamless user experiences.
            </p>
            <p className="mt-2 text-base leading-relaxed text-gray-400 sm:text-lg">
              My goal is to bridge the gap between{" "}
              <Highlight>design & development</Highlight>, ensuring
              pixel-perfect implementation with{" "}
              <Highlight>smooth performance</Highlight>.
            </p>
          </div>

          {/* Buttons */}
          <motion.div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center rounded-lg bg-[#E63E21] px-6 py-3 text-base font-medium shadow-md transition-all hover:bg-[#c42e19] sm:text-lg"
            >
              Hire Me <HiOutlinePlus className="ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigator.clipboard.writeText("akshaypatel.ap1320@gmail.com");
                setShowNotification(true);
              }}
              className="flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-base font-medium shadow-md transition-all hover:bg-gray-700 sm:text-lg"
            >
              Copy Email <FaRegCopy className="ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Notification */}
      {showNotification && (
        <Notification
          text="Email copied to clipboard"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default HeroSection;
