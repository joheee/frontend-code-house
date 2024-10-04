export default function NavigationDesktop() {
  return (
    <div className="flex justify-between items-center py-5 px-10 text-md">
      <div className="font-bold">Code House</div>
      <div className="bg-white shadow-md flex p-2 gap-2 rounded-sm">
        <div className="cursor-pointer hover:bg-accent px-4 py-[1] rounded-sm text-font_dark">
          Home
        </div>
        <div className="cursor-pointer hover:bg-accent px-4 py-[1] rounded-sm text-font_dark">
          About
        </div>
        <div className="cursor-pointer hover:bg-accent px-4 py-[1] rounded-sm text-font_dark">
          Works
        </div>
        <div className="cursor-pointer hover:bg-accent px-4 py-[1] rounded-sm text-font_dark">
          Contact
        </div>
      </div>
      <div className="hover:bg-accent_hover hover:cursor-pointer bg-accent px-4 py-1 rounded-sm text-font_dark">
        Get in touch
      </div>
    </div>
  );
}
