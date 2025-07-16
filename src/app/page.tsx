import { TopHeader } from "@/components/handmade/top-header";
import { AboutMePicture, AboutMeMinecraft } from "@/components/handmade/about-me";
import { Project } from "@/components/handmade/project";
import React from "react";

// Code that lets us handle image imports for Github Pages
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || '';

export default function Home() {
  return (
    
    <div className="pb-5">
      <TopHeader />
      {/* Can either use the About Me with the picture or the skin */}
      {/* <AboutMePicture /> */}
      <AboutMeMinecraft/>
      <h1 className="text-center text-2xl font-bold py-2">Work</h1>
      <Project
        project_description={
          <div>
            My research in the
            {" "}<a
              className="text-blue-500 underline"
              href="https://gezelterlab.org/"
            >
              Gezelter Lab
            </a>{" "}
            focused on using molecular dynamics simulations in OpenMD to investigate enantiomer 
            separation methods. Reverse Non-Equilibrium Molecular Dynamics (RNEMD) 
            was used to simulate local vortices, which caused enantiomers to rotate and swim in opposite directions.
            Previous work in the lab approached this issue utilizing rigid, propellor-shaped molecules
            while my work focused on the flexible anti-androgen Casodex.
          </div>
        }
        image={`${basePath}/gezelter.png`}
        image_alt="Picture of Levi in the Gezelter Lab"
        image_description="Me in the Gezelter Lab!"
        title="Undergraduate Student Researcher - Gezelter Lab (2024-2025)"
      />
      <Project
        project_description={
          <div>
            The 
            {" "}<a
              className="text-blue-500 underline"
              href="https://www3.nd.edu/~viluc/index.html"
            >
            Iluc Group
            </a>{" "}
            focuses on synthesizing metal catalysts with earth-abundant elements
            for sustainable catalysis. From May 2023 to August 2023, through a
            grant from the Glynn Family Honors Program, I worked full-time on
            the synthesis of iron carbenes with the end-goal of creating a
            metathesis active iron species.  From May 2024 to August 2024,
            I received ND Energy's Vincent P. Slatt Fellowship to pursue
            full-time, funded research on campus.  I presented a poster
            during the 2024 Summer Research Symposium, investigating the
            reactivity of a three-coordinate nickel carbene complex with strained olefins as possible candidates for olefin metathesis.
          </div>
        }
        image={`${basePath}/ilucgroup.jpg`}
        image_alt="Picture of Levi in the Gezelter Lab"
        image_description="Me with the Iluc Group!"
        title="Undergraduate Student Researcher - Iluc Group (2023-2024)"
      />
      {/* <h1 className="text-center text-2xl font-bold py-2">Fun</h1> */}
      {/* <iframe src="https://namemc.com/embed?size=medium" width="390" height="38"></iframe> */}

      {/* <div className="flex justify-center">
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7270295633624711168" height="650" width="504" title="Embedded post"></iframe>
      </div> */}
    </div>
  );
}
