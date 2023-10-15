'use client'

import Clock from "react-live-clock";

export default function LiveClock() {
  return (
    <div>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Europe/Istanbul"} />
    </div>
  );
}
