import { FaCircle } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="card-wrapper card-wrapper-footer flex justify-between">
      <div>Portfolio 2024</div>
      <div className="flex gap-2">
        <a
          href="https://github.com/AKSHAY13PATEL"
          target="_blank"
          className="flex items-center gap-1 hover:text-highlight"
        >
          GitHub <TiSocialGithubCircular className="size-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-patel-917888135/"
          target="_blank"
          className="flex items-center gap-1 hover:text-highlight"
        >
          LinkedIn <TiSocialLinkedinCircular className="size-6" />
        </a>
        <a
          href="mailto:akshaypatel.ap1320@gmail.com"
          className="flex items-center gap-1 hover:text-highlight"
        >
          Email <MdMail className="size-6" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-3xl border-2 border-solid border-[#242424] px-2">
        <FaCircle className="size-2 text-red-500" />
        <span>Avalable for job</span>
      </div>
    </div>
  );
};

export default Footer;
