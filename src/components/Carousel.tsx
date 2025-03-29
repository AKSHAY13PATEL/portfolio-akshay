import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [setOpen, index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % project!.image.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex(
      (prev) => (prev - 1 + project!.image.length) % project!.image.length,
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    }),
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-between bg-black bg-opacity-70 px-3 backdrop-blur-md">
      {!project?.image && <div className="text-white">No image found</div>}
      {project?.image?.length && (
        <>
          <FaChevronCircleLeft
            color="gray"
            className="size-8 cursor-pointer"
            onClick={handlePrev}
          />
          <div className="relative flex h-[90%] max-h-[80vh] w-[90%] max-w-4xl items-center justify-center overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={index}
                src={project.image[index]}
                alt="Preview"
                className="absolute h-full w-full rounded-lg object-contain shadow-lg"
                variants={variants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
          </div>
          <FaChevronCircleRight
            color="gray"
            className="size-8 cursor-pointer"
            onClick={handleNext}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
