'use client'

// components
import Button from "./ui/button";
import LiveClock from "./clock";


export default function Footer() {
  return (
    <div className="bg-accent flex flex-col gap-32 p-16 overflow-hidden mt-64 text-white">
      <div className="flex flex-col gap-4 items-center z-50">
        <h2 className="sm:text-5xl font-semibold text-black p-6 bg-white rounded-full border-4 border-black -rotate-6">Got something in mind?</h2>
        <h2 className="sm:text-5xl font-semibold mt-4">Lets talk.</h2>
          <Button
            label={"Get in touch"}
            style={'light'}
          />
      </div>

      <div className="sm:grid grid-cols-8 gap-4 px-8z-50">
        <div className="col-start-1 col-span-2">
          © Good Afternoon Creative, 2023
        </div>
        <div className="col-start-3 flex flex-col gap-1">
          <span>IST</span>
          <LiveClock />
        </div>

        <div className="flex flex-col gap-1 col-start-5">
          <a
            href="https://www.linkedin.com/company/good-afternoon-creative/"
            className="flex gap-1 transition hover:text-black"
          >
            {/* <img src={arrow_right} alt="" /> */}    
            <span>Linkedin</span>
          </a>
          <a
            href="https://www.instagram.com/goodafternooncreative/"
            className="flex gap-1 transition hover:text-black"
          >
            {/* <img src={arrow_right} alt="" /> */}
            <span>Instagram</span>
          </a>
        </div>
        <div className="flex flex-col gap-1 col-start-8 items-end">
          <span className="flex gap-1">
            Enquiries
          </span>
          <a
            href="mailto:info@goodafternooncreative.com"
            className="flex gap-1 transition hover:text-black"
          >
            info@goodafternooncreative.com
          </a>
        </div>
      </div>
    </div>
  );
}
