// components
import Button from "./ui/button";
import Chip from "./ui/chip";

export default function Header() {
  return (
    <header className="w-full h-72 grid grid-cols-8 gap-4">
      <div className="flex flex-col h-full items-start justify-between py-6 border-b border-black col-span-2">
        <span className="font-medium text-xl">Good People, Good Work</span>
        <div className="flex items-center gap-4 mb-1">
          <Chip label={"Work"} />
          <Chip label={"About"} />
          <Chip label={"Contact"} />
        </div>
      </div>
      <div className="flex flex-col h-full items-start justify-between py-6 border-b border-black col-span-3">
        <p className="font-medium text-xl leading-6">
          Good Afternoon Creative is an Istanbul based creative agency
          specializing in brand design and strategy, as well as web design. Our
          experienced team is dedicated to creating tangible design solutions
          and strategic foresight to help businesses achieve their branding
          goals.
        </p>
        <Button label={"Get in touch"} style={'dark'}/>
      </div>
      <div className="flex flex-col h-full items-end justify-end py-6 border-b border-black col-span-3 font-medium text-xl mb-1">
        <span className="text-neutral-400">REACH US AT</span>
        <div className="flex gap-2 justify-end items-center w-full transition hover:bg-accent hover:text-white group">
          <p className="opacity-0 transition  group-hover:opacity-100 text-3xl">✉️  👋🏻</p>
          <a
            href="mailto:info@goodafternooncreative.com"
            className="flex justify-end items-center p-2 h-12"
          >
            info@goodafternooncreative.com
          </a>
        </div>
      </div>
    </header>
  );
}
