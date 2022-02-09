import Project from "./Project";
import ProjectReverse from "./ProjectReverse";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl pt-8 mx-auto text-white">
      <h3 className="w-fit pl-4 mt-12 font-bold sm:px-6 md:px-24 xl:px-0 text-4xl lg:text-6xl ">
        Personal Projects
      </h3>
      <Project {...projectOne} />
      <ProjectReverse {...projectTwo} />
      <Project {...projectThree} />
      <ProjectReverse {...projectFour} />
    </section>
  );
};

const projectOne = {
  title: "E-commerce Frontend",
  url: "/audiophile.png",
  gitLink: "https://github.com/mattwhitson/audiophile-ecommerce-frontend",
  liveLink:
    "https://audiophile-ecommerce-frontend-qwwtgrql9-mattwhitson.vercel.app/",
  techStack: "React, SCSS, Framer Motion",
  explanation:
    "The frontend for an audiophile e-commerce website. Based off of the frontendmentor.io Audiophile E-commerce Website challenge, which provided both the JSON data to populate the website and the Figma design files which the project is based off of.",
};

const projectTwo = {
  title: "NASA Photo App",
  url: "/spacestagram.png",
  gitLink:
    "https://github.com/mattwhitson/Shopify-Frontend-Internship-Challenge",
  liveLink: "https://shopify-frontend-internship-challenge.vercel.app/",
  techStack: "Next.js, TailwindCSS, NASA's APOD API",
  explanation:
    "Basic app that allows you to view NASA's daily uploads to the Astronomy Photo of the Day API! There are a few different filtering options (random, by a specific date, chronologically).",
};

const projectThree = {
  title: "Messaging App",
  url: "/messenger.png",
  gitLink: "https://github.com/mattwhitson/chat-app-next.js",
  liveLink: "https://www.mattdwhitson.com",
  techStack: "Next.js, TailwindCSS, Express.js, Socket.io, MongoDB",
  explanation:
    "Basic messaging app where you can create an account and start conversations with other users. This app has real-time messages and notifications thanks to the utilization of web sockets with the Socket.io library. Additionally, it has link previews by detecting when a message is a url, and then uses Cheerio on the backend to scrape the relevant meta tags from the website the url directs to. Deployed on an Ubuntu Digital Ocean droplet using NGINX as a reverse proxy",
};

const projectFour = {
  title: "MovieDB App",
  url: "/movie-center.png",
  gitLink: "https://github.com/mattwhitson/movie-app",
  liveLink: "https://movie-app-mattwhitson.vercel.app/",
  techStack: "Next.js, TailwindCSS, TMDB API",
  explanation:
    "App that utilizes the Open Movie Database that allows you to search and check the ratings of almost any movie. It has search functionality if you're looking for a specific movie or tv show, or you can simply check out the movie and/or tv trending pages",
};

export default Projects;
