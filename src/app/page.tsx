import { div, main } from "motion/react-client";
import Image from "next/image";
import About from "./(pages)/About/page";

export default function Home() {
  return (
    <div>
      <div className="text-white flex ">
        <About />
      </div>
    </div>
  );
}
