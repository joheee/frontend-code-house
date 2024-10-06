import { AboutInterface } from "./interface";

export default function AboutDesktop(about: AboutInterface) {
  return (
    <div className={`${about.className} grid grid-cols-2 items-center`}>
      <div className="">
        <div className="font-extrabold text-[65px]">ABOUT THE</div>
        <div className="font-extrabold text-[65px]">CODE HOUSE</div>
      </div>
      <div className="flex flex-col gap-5 text-lg">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          laboriosam assumenda porro deserunt! Error sapiente nulla accusamus
          minus reprehenderit, excepturi non nemo. Quisquam consectetur officiis
          unde quas non quo modi!
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          laboriosam assumenda porro deserunt! Error sapiente nulla accusamus
          minus reprehenderit, excepturi non nemo. Quisquam consectetur officiis
          unde quas non quo modi!
        </div>
      </div>
    </div>
  );
}
