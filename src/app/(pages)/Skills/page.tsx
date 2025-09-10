
import { CarouselDemo } from "@/components/Carouselcard";
import { div } from "motion/react-client";

export default function Skills(){
    return (
      <div>
        <div className=" flex text-white  text-4xl font-bold pl-16">
          Skills
        </div>
        <div>
          <CarouselDemo />
        </div>
      </div>
    );
}