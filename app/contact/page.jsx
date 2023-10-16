"use client";

import { useState } from "react";

import "@/styles/transitionIn.css";
// components
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function Contact() {
  const styles = {
    body: "w-screen h-screen flex flex-col px-4 sm:px-8 bg-black text-white relative overflow-hidden sm:overflow-automatic",
    inputWrapper: "flex flex-col gap-4",
    inputSubtitle: "text-lg",
    textArea:
      "w-80 sm:w-full h-24 pl-2 pt-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-black focus:border-transparent border-2 border-neutral-500 text-black focus:text-white",
  };

  return (
    <div className={styles.body}>
       <div className='bartender'>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 mb-24 sm:mt-24">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-5xl text-neutral-500">
            You want to talk to us?
          </h1>
          <h2 className="text-2xl sm:text-5xl">Shoot us an email.</h2>
        </div>
        <form
          // onSubmit={handleSubmit}
          method="POST"
          acceptCharset="UTF-8"
          className="flex flex-col gap-6 w-[512px]"
        >
          <div className={styles.inputWrapper}>
            <h3 className={styles.inputSubtitle}>Name</h3>
            <Input type={"text"} name={"name"} placeholder={'John Doe'}/>
          </div>
          <div className={styles.inputWrapper}>
            <h3 className={styles.inputSubtitle}>Email</h3>
            <Input type={"email"} name={"email"} placeholder={'john@doe.com'}/>
          </div>
          <div className={styles.inputWrapper}>
            <h3 className={styles.inputSubtitle}>Subject</h3>
            <Input type={"subject"} name={"subject"} placeholder={'I need a new branding!'}/>
          </div>
          <div className={styles.inputWrapper}>
            <h3 className={styles.inputSubtitle}>Message</h3>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message..."
              className={styles.textArea}
            ></textarea>
          </div>
            <Button label={"Shoot"} style={"light"} type={'submit'}/>
        </form>
      </div>
    </div>
  );
}
