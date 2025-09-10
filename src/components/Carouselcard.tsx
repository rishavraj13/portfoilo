"use client";

import { Carousel } from "./ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Next Js",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZD7gtOg-aRXiYZ_ZkmYGch46UxHAygL-Pw&shttps://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75",
    },
    {
      title: "React JS",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
    },
    {
      title: "Node Js",
      src: "https://stackdiary.com/wp-content/uploads/2022/04/The-Most-Popular-Node.js-Frameworks-3.png",
    },
    {
      title: "Express",
      src: "https://cdn.worldvectorlogo.com/logos/expressjs.svg",
    },

    {
      title: "MongoDB",
      src: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
    },

    {
      title: "PostgreSQL",
      src: "https://www.svgrepo.com/show/306591/postgresql.svg",
    },

    {
      title: "Prisma",
      src: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fia59h9w7j10soivayn70.png",
    },

    {
      title: "Html",
      src: "https://cdn-icons-png.flaticon.com/512/152/152843.png",
    },

    {
      title: "Tailwind CSS",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    },

    {
      title: "Java Script",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
    },

    {
      title: "C++",
      src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },

    {
      title: "DSA",
      src: "https://yt3.googleusercontent.com/x1iAf8MN08FlFaIMPE8JWFYDysnXkK8S7WZ-dHeROrfgY2EZUVsztox4g8kwWbU7PzG71kVO=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
