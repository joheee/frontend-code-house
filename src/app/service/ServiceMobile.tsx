import { useRef } from "react";
import { ServiceInterface } from "./interface";
import ServiceContent from "./ServiceContent";
import { motion, useInView } from "framer-motion";

export default function ServiceMobile(prop: ServiceInterface) {
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
      className={`${prop.className} grid-cols-[1fr_2fr] gap-10`}
    >
      <div className="">
        <div className="text-clamp-about font-extrabold text-start">
          KNOW OUR
        </div>
        <div className="text-clamp-about font-extrabold text-start">
          SERVICES
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <ServiceContent />
      </div>
    </motion.div>
  );
}
