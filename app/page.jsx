'use client'

// config
import firebaseConfig from "@/config/firebaseConfig";

// components
import Button from "@/components/ui/button";

export default function Home() {
  console.log(firebaseConfig);

  return (
    <main className="flex flex-col items-center justify-between p-24 gap-10">
      <p className="text-5xl font-bold">Test Page</p>
      <Button label={"Get in touch"} />
    </main>
  );
}
