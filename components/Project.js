import { useState } from "react";

const Project = ({ title, url, gitLink, liveLink, techStack, explanation }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <article
      id="photo-app"
      className="relative mt-6 sm:mt-12  lg:px-16 2xl:px-0"
    >
      <h4
        className={`relative z-50 p-2 w-fit text-2xl lg:text-4xl font-semibold transition-all duration-200 ease-in-out ${
          onHover && "text-yellow-400 -translate-y-2"
        }`}
      >
        {title}
      </h4>
      <div
        className="flex flex-col mt-4 w-full 2xl:flex-row group-two"
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
      >
        <div className="relative transition-transform ease-in-out duration-200 lg:group-two-hover:scale-110">
          <div className="transition-transform ease-in-out duration-200 lg:group-two-hover:scale-100">
            <img src={url} alt="" className="2xl:max-w-5xl" />
          </div>
          <div className="hidden md:inline-block absolute bottom-0 right-0 p-6 bg-black bg-opacity-50">
            <h5 className="text-xl font-semibold text-right text-white">
              Built with
            </h5>
            <p className="text-white">{techStack}</p>
          </div>
        </div>
        <div className="relative flex flex-col px-2 mt-2 2xl:mt-0 mb-4 2xl:mb-24 pb-4 bg-neutral-900 rounded bg-opacity-90 backdrop-blur-10">
          <h4 className="w-fit px-1 mb-2 text-xl border-b-[3px] lg:text-2xl lg:border-b-[6px] border-red-500">
            Brief Explanation
          </h4>
          <p className="text-sm sm:text-base">{explanation}</p>
          <div className="mt-2 md:hidden">
            <h5 className="inline px-2 font-semibold text-xl border-b-2 border-red-500">
              Built With
            </h5>
            <p className="pt-1">{techStack}</p>
          </div>
          <div className="mt-4 flex space-x-4 2xl:space-x-0 2xl:justify-between 2xl:mt-auto 2xl:px-4">
            <a
              href={liveLink}
              className="relative group px-2 py-1 bg-blue-700 rounded hover:cursor-pointer transition-transform ease-in-out duration-200 hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute top-0 left-0 w-0 h-full transition-all ease-in-out duration-300 bg-indigo-800 rounded group-hover:w-full"></span>
              <span className="relative">Live Demo</span>
            </a>
            <a
              href={gitLink}
              className="relative px-2 py-1 bg-blue-700 rounded hover:cursor-pointer transition-transform ease-in-out duration-200 hover:scale-110 group"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute top-0 left-0 w-0 h-full transition-all ease-in-out duration-300 bg-indigo-800 rounded group-hover:w-full"></span>
              <span className="relative">Github Link</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
