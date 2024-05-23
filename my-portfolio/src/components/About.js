import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container w-2/3 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-10 mt-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            About Me
          </h1>
          <hr className="my-4 w-1/4 mx-auto"></hr>
        </div>
        <div className="flex flex-wrap -m-4 justify-center items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-24 md:pr-16 justify-center">
            <img
              className="object-cover object-center rounded"
              alt="headshot"
              src="./headshot2.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
            <p className="text-xl mb-3 text-white">
              Hi, I'm Kevin, an aspiring software engineer! I currently study Computer Science at Toronto Metropolitan University (formerly Ryerson).
            </p>
            <p className="text-xl mb-3 text-white">
              After discovering coding through Scratch in elementary school, I've been interested in pursuing a career in the field of computer science. Through the majority of high school, I continued to study computer science, exposing myself to new languages and concepts.
            </p>
            <p className="text-xl mb-3 text-white">
              Outside of academia, I enjoy trying new things. Some of the most memorable experiences I've had include kayaking, treetop trekking, and bouldering. Some of the things I still want to experience are travelling to a different country, paintballing, and go-karting.
            </p>
            <p className="text-xl mb-3 text-white">
              I am always eager to learn new skills and ideas. Whether it's on my own, or with others, I have always found enjoyment in improving. I look forward to what the future may hold and the opportunities that come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}