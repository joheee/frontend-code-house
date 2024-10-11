import AboutContent from "./AboutContent";
import { AboutInterface } from "./interface";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutDesktop(about: AboutInterface) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: .3 });

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
      className={`${about.className} grid grid-cols-2 items-center`}
    >
      <div className="">
        <motion.div className="font-extrabold text-[50px]" variants={fadeInUp}>
          ABOUT THE
        </motion.div>
        <motion.div className="font-extrabold text-[50px]" variants={fadeInUp}>
          CODE HOUSE
        </motion.div>
      </div>
      <motion.div variants={fadeInUp}>
        <AboutContent />
      </motion.div>
    </motion.div>
  );
}
