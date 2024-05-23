import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container w-2/3 px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap items-center justify-center">
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="md:flex flex-col md:w-full md:py-8 mt-8 md:mt-0 items-center">
          <div className="flex flex-col w-full mb-10 mt-20 items-center">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Contact
            </h1>
            <hr className="my-4 w-1/4 mx-auto"></hr>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kevin-khuu-273564277/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" className="mb-4 text-white" />
            </a>
            <a href="https://github.com/KevinKhuu27" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" className="mb-4 text-white" />
            </a>
            <a href="https://www.instagram.com/khuu.kevin27/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="3x" className="mb-4 text-white" />
            </a>
          </div>
          <div className="w-1/3 relative mb-4 items-center">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-1/3 relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-1/3 relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}