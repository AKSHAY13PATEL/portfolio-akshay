import { useState } from "react";
import { FaCircle, FaRegCopy } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";

const HeroSection = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between">
        <span className="text-2xl font-medium text-secondary">
          Frontend Developer
        </span>
        <div className="flex items-center justify-center gap-2 rounded-3xl border-2 border-solid border-[#242424] px-2">
          <FaCircle className="size-2 text-red-500" />
          <span>Avalable for job</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-semibold">I'm Akshay Patel</span>
            <span className="w-[350px] text-wrap text-xl font-normal text-secondary">
              Bringing ideas to life with elegant and efficient front-end
              development.
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/contact")}
              className="mr-4 flex h-[40px] items-center justify-center gap-1 rounded-md bg-[#E63E21] px-3"
            >
              Hire Me &nbsp;
              <div className="h-full w-[2px] bg-background-default p-0"></div>
              <HiOutlinePlus className="ml-1 size-4" />
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText("akshaypatel.ap1320@gmail.com");
                setShowNotification(true);
              }}
              className="mr-4 flex h-[40px] items-center justify-center gap-1 rounded-md bg-darkgray px-3 text-secondary"
            >
              Copy email &nbsp;
              <div className="h-full w-[2px] bg-background-default p-0"></div>
              <FaRegCopy className="ml-1 size-4" />
            </button>
          </div>
        </div>
        <div>
          <img
            src="/akshay_photo.jpg"
            alt="Profile picture"
            className="rounded-full border-4 border-solid border-slate-700 object-contain"
          />
        </div>
      </div>

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
