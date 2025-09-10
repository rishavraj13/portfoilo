import { div } from "motion/react-client";

export default function Card() {
  return (
    <div className="flex w-full max-w-5xl h-[380px] mx-auto rounded-2xl p-[2px] bg-neutral-900">
      {/* Inner Glass Container */}
      <div className="flex w-full rounded-2xl backdrop-blur-xl bg-black/40 overflow-hidden opacity-50">
        {/* Left Side - Text */}
        <div className="flex justify-center p-8 w-full text-white opacity-100">
          <div className="text-3xl">
            I’m a Computer Science Engineering student interested in backend,
            frontend, DSA in C++, DevOps, blockchain, and AI. I enjoy working on
            projects that challenge me and help me learn. Outside of tech, I
            like playing football, hitting the gym, and staying
            health-conscious. I believe in consistency and a never-give-up
            mindset. I’m also looking for opportunities to work, learn, and
            contribute.
          </div>
        </div>
      </div>
    </div>
  );
}
