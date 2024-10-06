import { KeyFactItemInterface } from "./interface";

export default function KeyFactItem(keyFactItem: KeyFactItemInterface) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-baseline font-bold text-clamp-key-fact-item">
        <div className="">{keyFactItem.value}</div>
        <span className=" text-accent">{keyFactItem.unit}</span>
      </div>
      <div className="text-clamp-key-fact-item-text text-center">
        {keyFactItem.text}
      </div>
    </div>
  );
}
