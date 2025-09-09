import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-between p-16 ">
      <div className="w-1/2 pr-6 mb-3">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi, I'm Rishi! I'm a computer science engineering student passionate
          about backend, frontend, DSA, DevOps, blockchain, and AI. Always eager
          to learn and build new projects 🚀
        </p>
      </div>
      <div
        style={{ position: "relative", width: "300px", height: "300px" }}
        className="w-1/2 flex justify-center mr-20"
      >
        <Image
          src="/my.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="rounded-xl "
        />
      </div>
    </div>
  );
}
