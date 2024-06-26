import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="container w-2/3 mx-auto h-screen flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 gap-2 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font xl:text-6xl text-5xl mb-4 font-medium text-white">
            Hey, I'm Kevin.
          </h1>
          <p className="xl:text-3xl text-2xl text-white">Welcome to my portfolio!</p>
          <div className="flex justify-center">
            <a
              href="#about"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 my-4 focus:outline-none hover:bg-green-600 rounded text-lg
              transform transition duration-300 hover:scale-105 hover:shadow-lg">
              View More
            </a>
          </div>
        </div>
        <div className="lg:max-w-2xl xl:w-2/3 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}