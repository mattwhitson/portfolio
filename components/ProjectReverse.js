import { useState } from "react";

const ProjectReverse = ({ title, url, techStack, explanation }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <article
      className="mt-8 transition-transform ease-in-out duration-200 px-4 lg:hover:scale-110 lg:px-16 2xl:px-0"
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <h4
        className={`md:text-right text-2xl lg:text-4xl font-semibold ${
          onHover && "text-yellow-400"
        }`}
      >
        Messaging App
      </h4>
      <div className="flex flex-col 2xl:flex-row-reverse mt-4 w-full">
        <div className="relative">
          <img src="/messenger.png" alt="" className="2xl:max-w-5xl" />
          <div className="hidden md:inline-block absolute bottom-0 left-0 p-6 bg-black bg-opacity-30">
            <h5 className="text-xl font-semibold ">Built with</h5>
            <p className="">
              Next.js, TailwindCSS, Express.js, Socket.io, MongoDB
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-2 mt-2 2xl:mt-0 pb-4">
          <h4 className="w-fit px-1 mb-2 text-xl border-b-[3px] lg:text-2xl lg:border-b-[6px] border-red-500">
            Brief Explanation
          </h4>
          <p className="text-sm sm:text-base">
            Basic messaging app where you can create an account and start
            conversations with other users by searching for their username. This
            app has real-time messages and notifications thanks to the
            utilization of web sockets with the Socket.io library. As a bonus,
            it also has link previews by detecting when a message is a url, and
            then uses Cheerio on the backend to scrape the relevant meta tags
            from the website the url directs to!
          </p>
          <div className="mt-2 md:hidden">
            <h5 className="inline px-2 font-semibold text-xl border-b-2 border-red-500">
              Built With
            </h5>
            <p className="pt-1">{techStack}</p>
          </div>
          <div className="mt-4 flex space-x-4 2xl:space-x-0 2xl:justify-between 2xl:mt-auto 2xl:px-4">
            <a
              href="https://www.mattdwhitson.com"
              className="relative px-2 py-1 bg-blue-700 rounded hover:cursor-pointer transition-transform ease-in-out duration-200 hover:scale-110 group"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute top-0 left-0 w-0 h-full transition-all ease-in-out duration-300 bg-indigo-800 rounded group-hover:w-full"></span>
              <span className="relative">Live Demo</span>
            </a>
            <a
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

export default ProjectReverse;
