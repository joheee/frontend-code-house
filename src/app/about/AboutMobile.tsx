import { useRef } from "react";
import AboutContent from "./AboutContent";
import { AboutInterface } from "./interface";
import { motion, useInView } from "framer-motion";

export default function AboutMobile(about: AboutInterface) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`${about.className} grid items-center`}
    >
      <div className="">
        <div className="font-extrabold text-clamp-about">ABOUT THE</div>
        <div className="font-extrabold text-clamp-about">CODE HOUSE</div>
      </div>
      <AboutContent />
    </motion.div>
  );
}
