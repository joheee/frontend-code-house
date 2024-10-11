import { useRef } from "react";
import { KeyFactInterface } from "./interface";
import KeyFactItem from "./KeyFactItem";
import { motion, useInView } from "framer-motion";

export default function KeyFactDesktop(keyFact: KeyFactInterface) {
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
      className={`${keyFact.className} flex justify-between gap-5 items-center`}
    >
      <div className="w-fit">
        <div className="font-extrabold text-clamp-about">GET AQUANTED WITH</div>
        <div className="font-extrabold text-clamp-about">OUR KEY FACTS</div>
      </div>
      <div className="flex gap-10">
        <KeyFactItem value="8.2" unit="k" text="Trusted Users" />
        <KeyFactItem value="120" unit="+" text="Project Completed" />
        <KeyFactItem value="97" unit="%" text="Clients Satisfaction" />
      </div>
    </motion.div>
  );
}
