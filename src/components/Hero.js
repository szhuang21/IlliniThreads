import React from "react";
import BioButton from "./BioButton";
const Hero = () => {
  return (
    <div class="pl-40 pt-40">
      <div class="text-2xl text-left font-bold font-poppins">
        👋 I'm Sophia <br />
        Xie Zhuang
      </div>

      <div class="text-base text-left pt-4 font-montserrat text-gray-700">
        Software Developer,{" "}
        <button class="bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          <div class="text-black">Sophomore at UIUC</div>
        </button>{" "}
        ,{" "}
        <button class="bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          Researcher
        </button>
        , and{" "}
        <button class="bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          Pop Music & Jazz lover
        </button>{" "}
        <br /> just havin' a little fun and tryin' to make the world a little
        happier.
      </div>

      <div class="text-base text-left pt-4 font-montserrat text-gray-700">
        Working with my hands to make magic happen on the internet. View my{" "}
        <br />
        <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          Projects
        </button>{" "}
        ,
        <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          Work Experience
        </button>{" "}
        ,{" "}
        <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          Resume
        </button>{" "}
        ,{" "}
        <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          Contact Me
        </button>{" "}
        , or send me an email at <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
          sophiacodes4fun@gmail.com
        </button>{" "}.

        {/* <BioButton text="test"/> */}
      </div>
    </div>
  );
};

export default Hero;
