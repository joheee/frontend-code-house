import { FiInstagram } from "react-icons/fi";
import { FooterInterface } from "./interface";
import FooterContent from "./FooterContent";

export default function FooterDesktop(footer: FooterInterface) {
  return (
    <div
      className={`${footer.className} bg-white shadow-md rounded-sm p-5 text-font_dark`}
    >
      <div className="grid grid-cols-3">
        <div className="font-bold">Code House</div>
        <div className="flex flex-col gap-2">
          <div className="">Follow us</div>
          <a
            href="https://www.instagram.com/codehouse_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <FooterContent />
        </div>
      </div>
      <div className="text-center mt-10">copyright © 2024 Code House</div>
    </div>
  );
}
