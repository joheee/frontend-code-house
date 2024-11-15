import { useRef } from "react";
import { WorkInterface } from "./interface";
import WorkCard from "./WorkCard";
import { motion, useInView } from "framer-motion";

export default function WorkMobile(work: WorkInterface) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
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
      className={`${work.className}`}
    >
      <div className="text-clamp-about font-extrabold text-center">
        SELECTED WORK
      </div>
      <div className="mt-5 gap-20 grid grid-cols-1">
        <WorkCard
          src="/work_project_1.png"
          alt=""
          title="CRYPTO OVERSEERX"
          subtitle="Crypto OverseerX is a leading provider of premium crypto signal services through exclusive Telegram classes"
        />
        <WorkCard
          src="/work_project_2.png"
          alt=""
          title="VISIT JOGJA"
          subtitle="The Jogjakarta Tourism website offers detailed listings of local attractions, accommodations, and dining options, complete with photos and reviews"
        />
        <WorkCard
          src="/work_project_3.png"
          alt=""
          title="VISIT JOGJA"
          subtitle="The Jogjakarta Tourism website offers detailed listings of local attractions, accommodations, and dining options, complete with photos and reviews"
        />
      </div>
    </motion.div>
  );
}
