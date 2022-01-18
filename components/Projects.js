import Project from "./Project";
import ProjectReverse from "./ProjectReverse";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl pt-8 mx-auto text-white">
      <h3 className="w-fit pl-4 mt-12 font-bold sm:px-6 md:px-24 xl:px-0 text-4xl lg:text-6xl border-b-8 border-blue-700">
        Personal Projects
      </h3>
      <Project {...projectOne} />
      <ProjectReverse {...projectTwo} />
      <Project {...projectThree} />
    </section>
  );
};

const projectOne = {
  title: "Photo Sharing App",
  url: "/photostop.png",
  techStack: "Next.js, TailwindCSS, Express.js, PostgreSQL, Firebase",
  explanation:
    "Simple photo sharing app where users can create an account, sign in, and share photos. Images are uploaded and saved on Firebase Storage, then the url is stored in the db. Users can also like photos, comment on photos, and visit other user&apos;s profiles!",
  textWhite: true,
};

const projectTwo = {
  title: "Messaging App",
  url: "/messenger.png",
  techStack: "Next.js, TailwindCSS, Express.js, Socket.io, MongoDB",
  explanation:
    "Basic messaging app where you can create an account and start conversations with other users by searching for their username. This app has real-time messages and notifications thanks to the utilization of web sockets with the Socket.io library. As a bonus, it also has link previews by detecting when a message is a url, and then uses Cheerio on the backend to scrape the relevant meta tags from the website the url directs to!",
};
const projectThree = {
  title: "MovieDB App",
  url: "/movie-center.png",
  techStack: "Next.js, TailwindCSS, Express.js, TMDB API",
  explanation:
    "App that utilizes the Open Movie Database that allows you to search and check the ratings of pretty much any movie. It has search functionality if you&apos;re looking for a specific movie or tv show, or you can simply check out the movie and/or tv trending pages",
  textWhite: true,
};

export default Projects;
