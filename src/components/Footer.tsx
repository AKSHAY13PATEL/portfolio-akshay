import { FaCircle } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 border-t border-gray-700 bg-[#121212] px-4 py-6 text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:gap-y-0 sm:px-6">
      {/* Footer Title */}
      <div className="text-lg font-semibold text-gray-300">Portfolio 2025</div>

      {/* Social Links */}
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <a
          href="https://github.com/AKSHAY13PATEL"
          target="_blank"
          className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-orange-400"
        >
          <TiSocialGithubCircular className="size-7 transition-transform duration-300 hover:scale-110" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-patel-917888135/"
          target="_blank"
          className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-blue-400"
        >
          <TiSocialLinkedinCircular className="size-7 transition-transform duration-300 hover:scale-110" />
          LinkedIn
        </a>
        <a
          href="mailto:akshaypatel.ap1320@gmail.com"
          className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-green-400"
        >
          <MdMail className="size-6 transition-transform duration-300 hover:scale-110" />
          Email
        </a>
      </div>

      {/* Availability Status */}
      <div className="mt-2 flex items-center gap-2 rounded-full border border-gray-600 px-4 py-1 text-sm text-gray-300 sm:mt-0">
        <FaCircle className="size-2 animate-pulse text-red-500" />
        <span className="tracking-wide">Available for Job</span>
      </div>
    </div>
  );
};

export default Footer;
