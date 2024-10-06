import { WorkInterface } from "./interface";
import WorkCard from "./WorkCard";

export default function WorkMobile(work: WorkInterface) {
  return (
    <div className={`${work.className}`}>
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
      </div>
    </div>
  );
}
