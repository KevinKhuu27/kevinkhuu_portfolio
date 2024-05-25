import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10 mt-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <hr className="my-4 w-1/4 mx-auto"></hr>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex h-full relative">
                <img
                  alt="project.gif"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-green-400 mb-1">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-3">
                    {project.technology}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                  <a href={project.demo} className="px-2">
                    <button
                      className="inline-flex text-white bg-green-500 border-0 py-2 px-6 my-4 focus:outline-none hover:bg-green-600 rounded text-lg
                      transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      Demo
                    </button>
                  </a>
                  <a href={project.code} className="px-2">
                    <button
                      className="inline-flex text-white bg-green-500 border-0 py-2 px-6 my-4 focus:outline-none hover:bg-green-600 rounded text-lg
                      transform transition duration-300 hover:scale-105 hover:shadow-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}