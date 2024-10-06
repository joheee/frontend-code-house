import { WorkInterface } from "./interface";

export default function WorkDesktop(work: WorkInterface) {
  return <div className={`${work.className}`}>WorkDesktop</div>;
}
