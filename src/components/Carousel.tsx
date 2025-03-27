import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type Project = {
  name: string;
  description: string;
  image: string[];
};

interface CarouselProps {
  project: Project | null;
  setOpen: (open: boolean) => void;
}

const Carousel = ({ project, setOpen }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Restore scrolling
    };
  }, [setOpen]);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-between bg-black bg-opacity-70 px-3 backdrop-blur-md">
      {!project?.image && <div className="text-white">No image found</div>}
      {project?.image?.length && (
        <>
          <FaChevronCircleLeft
            color="gray"
            className="size-8"
            onClick={() =>
              setIndex(
                (index) =>
                  (index - 1 + project.image!.length) % project.image!.length,
              )
            }
          />
          <img
            src={project.image?.[index]}
            alt="Preview"
            className="h-[90%] max-h-[80vh] w-[90%] max-w-4xl rounded-lg object-contain shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
          <FaChevronCircleRight
            color="gray"
            className="size-8"
            onClick={() =>
              setIndex((index) => (index + 1) % project.image!.length)
            }
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
