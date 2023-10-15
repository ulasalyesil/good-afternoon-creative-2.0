'use client'

// config
import firebaseConfig from "@/config/firebaseConfig";

// components
import Header from "@/components/header";
import Button from "@/components/ui/button";

export default function Home() {
  console.log(firebaseConfig);

  return (
    <main className="flex flex-col items-center justify-between gap-10">
      <Header/>
    </main>
  );
}
