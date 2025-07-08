import React from "react";
import Image from "next/image";

export function Project(props: {
  title: string;
  project_description: React.ReactNode;
  image: string;
  image_alt: string;
  image_description: string;
}) {

    const shadow = {
    "boxShadow": "0px 10px 15px -3px rgba(0,0,0,0.5)",
};
  return (
<div
  style={shadow}
  className="border-1 border-uchicago-red rounded-xl flex flex-col md:flex-row md:mx-30 mx-5 my-10 p-10 overflow-clip"
>
  <div className="md:w-[30%] flex flex-col items-center">
    <Image
      src={props.image}
      alt={props.image_alt}
      width={300} // Adjust to fit your design
      height={200} // Maintain aspect ratio
      className="object-contain"
    />
    <div className="font-light text-center mt-2">{props.image_description}</div>
  </div>

  <div className="flex flex-grow flex-col px-4 md:w-30">
    <div className="font-bold">{props.title}</div>
    <hr className="border-uchicago-red border-2 rounded-2xl" />
    {props.project_description}
  </div>
</div>
  );
}
