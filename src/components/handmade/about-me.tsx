import Image from "next/image";
import ReactSkinview3d from "react-skinview3d";

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || '';



export function AboutMePicture() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-10 pb-0 align-middle">
      <div className="mb-0">
    <img
      src={`${basePath}/levi.jpg}`}
      alt="Picture of Levi"
      className="w-[300px] md:w-[500px] h-auto mx-auto md:mx-0"
    />
  </div>
      <h3 className="text-black text-2xl px-10">
        
        I'm Levi, an incoming <span className="font-bold">Chemistry PhD Candidate</span> at <span className="font-bold">UChicago</span>. 
        I just received my <span className="font-bold">BS in Biochemistry</span> at <span className="font-bold">Notre Dame</span>. 
      </h3>
    </div>
  );
}
export function AboutMeMinecraft() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-10 pb-0 align-middle items-center">
      <div className="mb-0">
      <ReactSkinview3d
      skinUrl={`${basePath}/metronome.png`}
      height="500"
      width="300"
      capeUrl={`${basePath}/cape.png`}
      options={
        {
          zoom: 0.7,
          nameTag: "Metronome",
        }
      }
    />
  </div>
      <h3 className="text-black text-2xl px-10">
        
        I'm Levi, an incoming <span className="font-bold">Chemistry PhD Candidate</span> at <span className="font-bold">UChicago</span>. 
        I just received my <span className="font-bold">BS in Biochemistry</span> at <span className="font-bold">Notre Dame</span>. 
      </h3>
    </div>
  );
}