"use client";

// packages
import Image from "next/image";
import { useState } from "react";

// config
import "@/styles/transitionOut.css";

// components
import Header from "@/components/header";
import Footer from "@/components/footer";
import logo from "@/components/assets/images/logo.svg";
import circle from "@/components/assets/images/circle.svg";

export default function Home() {
  const [animateBars, setAnimateBars] = useState(false);

  const handleChipClick = () => {
    setAnimateBars(true);
  };
  // console.log(firebaseConfig);

  return (
    <main className="max-w-[1440px]">
      <div className={`bartender ${animateBars ? "animate" : ""}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="flex flex-col items-center gap-10 px-8">
        <div className="h-screen flex flex-col items-center justify-between pb-6 relative">
          <Header onChipClick={handleChipClick} />
          <Image src={logo} alt="good afternoon logo" />
          <Image
            src={circle}
            alt="good afternoon logo"
            className="absolute -z-10 -left-96"
          />
        </div>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/good-afternoon-creative.appspot.com/o/Pattern%202.png?alt=media&token=8bea3334-2462-415b-b134-8510b1ae76f8"
          }
          alt="patetern"
          width={"1440"}
          height={"800"}
          sizes="(max-width: 1440px) 100vw"
        />
      </div>
      <Footer />
    </main>
  );
}
