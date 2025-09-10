import { div, main } from "motion/react-client";
import Image from "next/image";
import About from "./(pages)/About/page";
import { SpotlightNewDemo } from "@/components/ui/Spotlight";
import Skills from "./(pages)/Skills/page";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen ">
        <SpotlightNewDemo />
      </div>
      
      <div>
        <About/>
      </div>

      <div>
        <Skills/>
      </div>
    </div>
  );
}
