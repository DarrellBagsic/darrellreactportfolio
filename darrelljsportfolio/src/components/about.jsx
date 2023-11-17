import React from 'react';

export default function about() {
  return (
    <div className="bg-gray-200 w-full h-fill pb-10">
    <section id="about" className="flex flex-col h-max w-full ml-10">
    <div className="text-3xl font-bold  text-center ">About Me</div>
    <div className="text-2xl font-medium text-center">More about Darrell Bagsic</div>
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-1/2">
        <div className="mt-15">
          <p className="text-2xl font-light pl-7 pt-10">
          I am an enthusiastic person who genuinely wants to develop the necessary skills and qualities to have a successful career and the future. 
          </p>
          <p className=" text-2xl font-light pl-7 mt-10">
          I have a profound interest in network engineering and system administration. As a current Presidents' Lister at Holy
          Angel University, I have demonstrated my commitment
          to academic excellence. I am deeply motivated by my
          passion for continuous learning and personal growth,
          and I approach every challenge with enthusiasm.
          Currently, I am actively engaged in self-study efforts to
          expand my knowledge in networking, further
          demonstrating my commitment to personal and
          professional development.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src="/src/images/image2.png" className="rounded-full" width={500}height={500}
        />
      </div>
    </div>
  </section>
  </div>

    )
}