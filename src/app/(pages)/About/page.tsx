import Card from "@/components/ui/Card";
import { CometCardDemo } from "@/components/ui/Profilecard";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-between p-16 ">
      <div className="w-full pr-6 mt-15 scroll-pt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
        <div className="">
          <Card/>
        </div>
      </div>
      
      <div
        style={{ position: "relative", width: "300px", height: "300px" }}
        className="w-1/2 flex justify-center mr-20"
      >
        <CometCardDemo />
      </div>
    </div>
  );
}
