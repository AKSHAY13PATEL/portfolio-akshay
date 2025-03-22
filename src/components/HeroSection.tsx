import { useState } from "react";
import Notification from "./Notification";

const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between">
        <span className="text-2xl font-medium text-secondary">
          Frontend Developer
        </span>
        <div className="flex items-center justify-center gap-1 rounded-3xl border-2 border-solid border-[#242424] px-2">
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="4.51221" r="4.5" fill="#E63E21" />
          </svg>
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
            <button className="mr-4 flex items-center justify-center gap-1 rounded-md bg-[#E63E21] px-3 py-2">
              Hire Me{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7.99854H8V12.9985C8 13.2638 7.89464 13.5181 7.70711 13.7056C7.51957 13.8932 7.26522 13.9985 7 13.9985C6.73478 13.9985 6.48043 13.8932 6.29289 13.7056C6.10536 13.5181 6 13.2638 6 12.9985V7.99854H1C0.734784 7.99854 0.48043 7.89318 0.292893 7.70564C0.105357 7.51811 0 7.26375 0 6.99854C0 6.73332 0.105357 6.47896 0.292893 6.29143C0.48043 6.10389 0.734784 5.99854 1 5.99854H6V0.998535C6 0.733319 6.10536 0.478964 6.29289 0.291428C6.48043 0.103892 6.73478 -0.00146484 7 -0.00146484C7.26522 -0.00146484 7.51957 0.103892 7.70711 0.291428C7.89464 0.478964 8 0.733319 8 0.998535V5.99854H13C13.2652 5.99854 13.5196 6.10389 13.7071 6.29143C13.8946 6.47896 14 6.73332 14 6.99854C14 7.26375 13.8946 7.51811 13.7071 7.70564C13.5196 7.89318 13.2652 7.99854 13 7.99854Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText("akshaypatel.ap1320@gmail.com");
                setShowNotification(true);
              }}
              className="mr-4 flex items-center justify-center gap-1 rounded-md bg-background-lightblack px-3 py-2 text-secondary"
            >
              Copy email{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 0.000488281H5.25C5.05109 0.000488281 4.86032 0.0795061 4.71967 0.220158C4.57902 0.360811 4.5 0.551576 4.5 0.750488V4.50049H0.75C0.551088 4.50049 0.360322 4.57951 0.21967 4.72016C0.0790178 4.86081 0 5.05158 0 5.25049V17.2505C0 17.4494 0.0790178 17.6402 0.21967 17.7808C0.360322 17.9215 0.551088 18.0005 0.75 18.0005H12.75C12.9489 18.0005 13.1397 17.9215 13.2803 17.7808C13.421 17.6402 13.5 17.4494 13.5 17.2505V13.5005H17.25C17.4489 13.5005 17.6397 13.4215 17.7803 13.2808C17.921 13.1402 18 12.9494 18 12.7505V0.750488C18 0.551576 17.921 0.360811 17.7803 0.220158C17.6397 0.0795061 17.4489 0.000488281 17.25 0.000488281ZM12 16.5005H1.5V6.00049H12V16.5005ZM16.5 12.0005H13.5V5.25049C13.5 5.05158 13.421 4.86081 13.2803 4.72016C13.1397 4.57951 12.9489 4.50049 12.75 4.50049H6V1.50049H16.5V12.0005Z"
                  fill="#C0C0C0"
                />
              </svg>
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
