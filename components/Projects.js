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
  title: "Messaging App",
  url: "/messenger.png",
  gitLink: "",
  liveLink: "https://www.mattdwhitson.com",
  techStack: "Next.js, TailwindCSS, Express.js, Socket.io, MongoDB",
  explanation:
    "Basic messaging app where you can create an account and start conversations with other users. This app has real-time messages and notifications thanks to the utilization of web sockets with the Socket.io library. Additionally, it has link previews by detecting when a message is a url, and then uses Cheerio on the backend to scrape the relevant meta tags from the website the url directs to. Deployed on an Ubuntu Digital Ocean droplet using NGINX as a reverse proxy",
};

const projectTwo = {
  title: "Photo Sharing App",
  url: "/photostop.png",
  gitLink: "",
  liveLink: "https://photo-app-client.vercel.app/",
  techStack: "Next.js, TailwindCSS, Express.js, PostgreSQL, Firebase",
  explanation:
    "Simple photo sharing app where users can create an account, sign in, and share photos. Images are uploaded and saved on Firebase Storage. Users can also like photos, comment on photos, and visit other user's profiles!",
};

const projectThree = {
  title: "MovieDB App",
  url: "/movie-center.png",
  gitLink: "https://github.com/mattwhitson/movie-app",
  liveLink: "https://movie-app-mattwhitson.vercel.app/",
  techStack: "Next.js, TailwindCSS, TMDB API",
  explanation:
    "App that utilizes the Open Movie Database that allows you to search and check the ratings of almost any movie. It has search functionality if you're looking for a specific movie or tv show, or you can simply check out the movie and/or tv trending pages",
};

export default Projects;
