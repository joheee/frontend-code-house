import { AboutInterface } from "./interface";

export default function AboutMobile(about: AboutInterface) {
  return (
    <div className={`${about.className} grid items-center`}>
      <div className="">
        <div className="font-extrabold text-clamp-xl">ABOUT THE</div>
        <div className="font-extrabold text-clamp-xl">CODE HOUSE</div>
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
