const About = () => {
  return (
    <section id="about" className="max-w-7xl pt-32 mx-auto">
      <h3 className="w-fit pl-6 md:pl-24 xl:pl-0 text-4xl lg:text-6xl font-bold text-white border-b-8 border-blue-700">
        About me
      </h3>
      <div className="flex flex-col xl:flex-row">
        <p className="pt-6 xl:pt-12 px-6 md:px-24 text-white xl:px-0 xl:mr-12 xl:text-xl xl:w-1/3">
          Hello! I&apos;m a self-taught, aspiring Frontend / Full Stack
          Developer from Canada! Since starting this journey I&apos;ve learned
          so much and I&apos;m continuing to learn more everyday! I discovered a
          passion for creating web applications and I enjoy all aspects of
          development, whether it be making a good looking, responsive UI, or
          developing the logic behind it. I&apos;m a naturally curious guy, and
          learning how all these technologies work together is something I take
          great interest in. The feeling you get when you spend hours making
          something and then all of it just &#39;works&#39; is unmatched. I feel
          like I&apos;m just starting to scratch the surface of all there is to
          know, and I am excited to see what the future brings!
        </p>
        <div className="flex flex-col space-y-4 mt-8 xl:ml-12 xl:mt-0 mx-auto">
          <div className="flex flex-row space-x-10 xl:space-x-24 w-full">
            <img
              src="/reactjs.png"
              className="h-20 w-20 md:h-40 md:w-40 object-cover"
              alt="react"
            />
            <img
              src="/nextjs.svg"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="next"
            />
            <img
              src="/scss.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down scale-125"
              alt="scss"
            />
          </div>

          <div className="flex flex-row space-x-10 xl:space-x-24 w-full">
            <img
              src="/node.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="node"
            />
            <img
              src="/express.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="express"
            />
            <img
              src="/git.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="git"
            />
          </div>
          <div className="flex flex-row space-x-10 xl:space-x-24 w-full">
            <img
              src="/mongo.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down scale-125"
              alt="mongo"
            />
            <img
              src="/postgres.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="postgres"
            />
            <img
              src="/firebase-logo.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="postgres"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center text-white mt-12 px-6 md:px-24">
        <h3 className="text-2xl mb-4 xl:ml-auto">Technologies:</h3>
        <p className="sm:ml-2 mt-2">
          React, Next.js, SASS, Node.js, Express.js, Git, MongoDB, PostgreSQL,
          Firebase
        </p>
      </div>
    </section>
  );
};

export default About;
