import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container w-2/3 h-2/3 py-10 mx-auto">
        <div className="flex flex-col w-full mb-10 mt-20 items-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <hr className="my-4 w-1/4 mx-auto"></hr>
        </div>
        <div className="flex flex-wrap lg:w-full h-full sm:mx-auto sm:mb-2 -mx-2 justify-center gap-8">
          {skills.map((skill) => (
            <div key={skill} className="w-64 h-full">
              <div className="bg-gray-800 h-full rounded flex p-4 py-12 justify-center">
                <div className="title-font font-medium text-white">
                  {skill}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}