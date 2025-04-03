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
    <div className="relative flex min-h-screen flex-col justify-center bg-[#0D0D0D] px-8 text-white md:px-16 lg:px-32">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-10 top-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#E63E21] to-[#C42D19] opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-[#E63E21] to-[#C42D19] opacity-20 blur-[150px]"></div>
      </div>

      {/* Two-Column Layout */}
      <div className="relative z-0 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left Column - Intro */}
        <div className="flex flex-col items-start">
          {/* Subheading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 text-5xl font-bold leading-tight md:text-6xl"
          >
            Hey, I'm <span className="text-[#E63E21]">Akshay Patel</span>
          </motion.h1>

          {/* Name & Headline */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-lg font-medium uppercase tracking-widest text-gray-400"
          >
            Frontend Developer
          </motion.span>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-4 max-w-lg text-lg leading-relaxed text-gray-300"
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
          className="flex flex-col items-start gap-6"
        >
          {/* About Me */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-200">About Me</h2>
            <p className="mt-3 text-lg leading-relaxed text-gray-400">
              I specialize in{" "}
              <Highlight>
                building modern, scalable, and accessible UI components
              </Highlight>{" "}
              that deliver seamless user experiences.
            </p>
            <p className="mt-2 text-lg leading-relaxed text-gray-400">
              My goal is to bridge the gap between{" "}
              <Highlight>design & development</Highlight>, ensuring
              pixel-perfect implementation with{" "}
              <Highlight>smooth performance</Highlight>.
            </p>
          </div>

          {/* Buttons */}
          <motion.div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center rounded-lg bg-[#E63E21] px-6 py-3 text-lg font-medium shadow-md transition-all hover:bg-[#c42e19]"
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
              className="flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-lg font-medium shadow-md transition-all hover:bg-gray-700"
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
