import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Notification = ({ text = "", description = "", onClose = () => {} }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="animated-slide-in fixed right-4 top-4 z-20 min-w-[350px] max-w-[350px] rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 shadow-lg">
      <div className="flex justify-between gap-6">
        <div className="flex max-w-[88%] flex-col justify-start gap-1">
          <div className="text-md truncate font-semibold text-slate-800">
            {text}
          </div>
          <div className="white-normal text-sm font-normal text-slate-500">
            {description}
          </div>
        </div>
        <div>
          <FiX
            className="mt-2 size-4 cursor-pointer"
            color="gray"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
