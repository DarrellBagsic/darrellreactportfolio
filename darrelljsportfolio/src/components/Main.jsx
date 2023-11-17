import React from 'react';

export default function Main() {
  return (
    <div>
      <div className="hero-1 flex flex-col justify-center items-center py-20">
        <div className="w-full max-w-3xl flex flex-row justify-center">
          <div className="w-full flex flex-col items-start">
            {/* Create new Divisions for Name, Skills and Buttons */}
            <div className="font-bold text-3xl text-justify">
              Hey! I'm Darrell, currently completing my degree as a Computer Engineer at Holy Angel University. Currently serving as Service Operations Inter at Converge ICT Solutions.
            </div>
            <br />
            <br />
            <div className="flex flex-row gap-4 items-center">
              {/* Create new division for skillsets */}
              <div className="font-extrabold text-2xl uppercase py-5">Skills: </div>
              <div className="text-xl border-b-2 border-yellow-400">Network Engineer</div>
              <div className="text-xl border-b-2 border-yellow-400">Service Operations</div>
              <div className="text-xl border-b-2 border-yellow-400">System Administrator</div>
            </div>
            {/* Create Division for Buttons */}
            <div className="flex flex-row gap-4 items-center py-5">
              <button className="border-2 px-4 py-2 border-black rounded-full">Learn More</button>
              <button className="border-2 border-black bg-yellow-400 rounded-full px-4 py-2">Contact Me</button>
            </div>
          </div>
          {/* Create new division for hero 2 component */}
          <div className="hero2 ml-20">
            <img src="/src/images/image1.png" className="rounded-full border-yellow-200 border-2 h-89 w-96" alt="Hero Image" />
          </div>
        </div>
      </div>

    </div>
  );
}
