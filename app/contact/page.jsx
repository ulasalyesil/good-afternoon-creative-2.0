"use client";

// packages
import { useState } from "react";

// styles
import "@/styles/transitionIn.css";

// components
import ContactForm from "@/components/contactForm";

export default function Contact() {
  return (
    <div className="w-screen h-screen flex flex-col px-4 sm:px-8 bg-black text-white relative overflow-hidden sm:overflow-automatic">
      <div className="bartender">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 mb-24 sm:mt-24">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-5xl text-neutral-500">
            You want to talk to us?
          </h1>
          <h2 className="text-2xl sm:text-5xl">Shoot us an email.</h2>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
