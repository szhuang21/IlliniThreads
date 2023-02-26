import React, { useState } from "react";
import Header from "../components/Header";
import Sophia from "../images/sophia.png";

const Story = () => {
  const [EIsClicked, setEIsClicked] = useState(false);
  const handleEClick = (event) => {
    console.log("e has been clicked");
    setEIsClicked(!EIsClicked);
  };
  return (
    <div>
      <Header />
      <div class="ml-16">
        {/* <div class="inline-flex items-center ml-8">
          <img
            src={Sophia}
            alt="..."
            class="shadow rounded-full w-48 align-middle border-none"
          />
          <div class="text-2xl font-bold pl-4">about</div>
        </div> */}

        <div class="text-xl text-left font-bold font-poppins pb-8">
          About Me
        </div>

        <div class="inline-flex items-center w-3/4">
          <img
            src={Sophia}
            alt="..."
            class="shadow w-72 rounded-lg align-middle border-none"
          />
          <div class=" pl-4">
            I reach out to you about your experience in product at Microsoft.
            I’m interested in trying out the career and wanted to reach out to
            you! I know you’re probably really busy, but if you’re open to it,
            I’d love to grab coffee/zoom to find out more about your experience
            and connect. I’m in town for the next 3 weeks, so just let me know.
            No worries if you can’t, either way thanks for your time :D{" "}
          </div>
        </div>

        <div class="font-poppins font-bold mt-12 grid place-items-center">
          <div>
            <button
              class="text-4xl text-yellow-400 hover:text-yellow-600"
              onClick={handleEClick}
            >
              E
            </button>

            <button class="text-4xl text-pink-400 hover:text-pink-600">
              N
            </button>

            <button class="text-4xl text-blue-400 hover:text-blue-600">
              F
            </button>
            <button class="text-4xl text-green-400 hover:text-green-600">
              P
            </button>

            {EIsClicked ? (
              <div class="">
                <div class="w-96 h-48 bg-yellow-200">
                  <div class="font-gloria-hallelujah"> extroverted </div>
                  <div class="font-poppins font-semibold">
                    add info here about{" "}
                  </div>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
