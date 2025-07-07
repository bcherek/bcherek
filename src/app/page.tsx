import { TopHeader } from "@/components/handmade/top-header";
import { AboutMePicture, AboutMeMinecraft } from "@/components/handmade/about-me";
import { Project } from "@/components/handmade/project";

import React from "react";
import ReactSkinview3d from "react-skinview3d";

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
              Gezelter lab
            </a>{" "}
            centered on understanding how complex physical behavior emerges from
            simple interactions between molecules by utilizing molecular
            dynamics simulations. The project I worked on investigates the idea
            of separating enantiomers via shear-flow and local vorticity.
            Previous work in the lab approached this issue utilizing rigid
            molecules while my work focuses on the flexible drug molecule
            Casodex.
          </div>
        }
        image="/gezelter.png"
        image_alt="Picture of Levi in the Gezelter Lab"
        image_description="Me at the Geletzer Lab!"
        title="Undergraduate Student Researcher - Gezelter Lab"
      />
      <Project
        project_description={
          <div>
            The 
            {" "}<a
              className="text-blue-500 underline"
              href="https://www3.nd.edu/~viluc/index.html"
            >
            Iluc Research Group
            </a>{" "}
            focuses on the activation of inert 
            molecules, with an emphasis on the functionalization of C-H bonds in
            a catalytic manner. These are imperative scientific problems since
            less expensive and more readily available feedstocks than those
            currently used could be employed to meet some of the energy demands
            of our society. In a broad sense, the group is interested in green
            chemistry both in its approach (catalysis) and emphasis on using
            inert substrates (activation of C-H bonds). The focus is on
            organometallic chemistry and especially on design of metal complexes
            that take advantage of latent reactivity.
          </div>
        }
        image="/ilucgroup.jpg"
        image_alt="Picture of Levi in the Gezelter Lab"
        image_description="Me with the Iluc Group!"
        title="Undergraduate Student Researcher - Iluc Group"
      />
      {/* <h1 className="text-center text-2xl font-bold py-2">Fun</h1> */}
      {/* <iframe src="https://namemc.com/embed?size=medium" width="390" height="38"></iframe> */}
    </div>
  );
}
