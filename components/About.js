const About = () => {
  return (
    <section id="about" className="max-w-7xl pt-32 mx-auto">
      <h3 className="w-fit pl-6 md:pl-24 xl:pl-0 text-4xl lg:text-6xl font-bold text-white ">
        About me
      </h3>
      <div className="flex flex-col xl:flex-row">
        <p className="pt-6 xl:pt-12 px-6 md:px-24 text-white xl:px-0 xl:mr-12 xl:text-xl xl:w-1/3">
          Hello! I&apos;m a self-taught, aspiring Frontend Developer from
          Canada! Since starting this journey several months ago, I&apos;ve
          discovered a passion for creating web applications that I didn&apos;t
          know I had. What I lack in experience I make up for with an eagerness
          to learn and the ability to pick up new things quickly. Learning how
          all of these technologies fit together to create beautiful, responsive
          websites is something that greatly interests me, and I&apos;m excited
          to see what the future brings!
        </p>
        <div className="flex flex-col space-y-4 mt-8 xl:ml-12 xl:mt-0 mx-auto">
          <div className="flex flex-row space-x-10 xl:space-x-24 w-full">
            <img
              src="/css.png"
              className="h-20 w-20 md:h-40 md:w-40 object-cover scale-90"
              alt="react"
            />
            <img
              src="/html.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down scale-90"
              alt="next"
            />
            <img
              src="/javascript.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down scale-90"
              alt="scss"
            />
          </div>

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
              src="/mongo.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down scale-125"
              alt="mongo"
            />
            <img
              src="/git.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="postgres"
            />
            <img
              src="/node.png"
              className="h-20 w-20 md:h-40 md:w-40 object-scale-down"
              alt="node"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center text-white mt-12 px-6 md:px-24">
        <h3 className="text-2xl mb-4 xl:ml-auto">Technologies:</h3>
        <p className="sm:ml-2 mt-[7px]">
          HTML, CSS, Javascript, React, Next.js, SCSS, MongoDB, Git, Node.js
        </p>
      </div>
    </section>
  );
};

export default About;
