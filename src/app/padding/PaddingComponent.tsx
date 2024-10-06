import { PaddingInterface } from "./interface";

export default function PaddingComponent(padding: PaddingInterface) {
  return <div className={`${padding.className} px-10 tablet:px-20`}>{padding.children}</div>;
}
