import { useRef } from "react";
import { AboutInterface } from "../about/interface";
import KeyFactItem from "./KeyFactItem";
import { motion, useInView } from "framer-motion";

export default function KeyFactMobile(about: AboutInterface) {
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
      className={`${about.className} grid gap-5`}
    >
      <div className="w-fit">
        <div className="font-extrabold text-clamp-about-key-fact-mobile">
          GET AQUANTED WITH
        </div>
        <div className="font-extrabold text-clamp-about-key-fact-mobile">
          OUR KEY FACTS
        </div>
      </div>
      <div className="flex gap-8">
        <KeyFactItem value="8.2" unit="k" text="Trusted Users" />
        <KeyFactItem value="120" unit="+" text="Project Completed" />
        <KeyFactItem value="97" unit="%" text="Clients Satisfaction" />
      </div>
    </motion.div>
  );
}
