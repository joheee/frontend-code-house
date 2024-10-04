import { PaddingInterface } from "./interface";

export default function PaddingComponent(padding: PaddingInterface) {
  return <div className={`${padding.className} px-10`}>{padding.children}</div>;
}
