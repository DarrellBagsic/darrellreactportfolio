import React from 'react';

export default function Projects() {
  return (
    <div className="bg-gray-200 w-full h-fill">
      <div className="projects flex flex-col justify-center items-center py-4 pb-20">
        <div className="w-full max-w-3xl flex flex-row justify-center">
          <div className="w-full flex flex-col items-start">
            <div className="font-bold text-3xl text-justify">Certifications:</div>
            <div className="ml-6 mt-4">
              <div className="text-xl mb-2 ">IT Essentials</div>
              <div className="text-xl mb-2 ">CCNAv7: Introduction to Networks</div>
              <div className="text-xl mb-2 ">CCNAv7: Enterprise Networking, Security, and Automation</div>
              <div className="text-xl mb-2 ">Computer Engineer’s BootCamp: Learn to Code using Django</div>
            </div>
          </div>
          {/* Add image on the right side */}
          <div className="hero2 ml-20">
            <img src="/src/images/question.jpg" className="h-auto w-auto rounded-lg" alt="Project Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
