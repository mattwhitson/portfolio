import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
  }, []);
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen text-white"
    >
      <article className="flex flex-col w-full min-h-[100vh] md:min-h-[50vh] md:min-w-[50vw] backdrop-blur-6 sm:backdrop-blur-10 justify-center items-center rounded-lg">
        <Transition
          show={onLoad}
          enter="transition-transform duration-1000"
          enterFrom="-translate-x-6 md:-translate-x-64"
          enterTo="translate-x-0"
          leave="transition-transform duration-1000"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-6 md:-translate-x-64"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-6xl">
            Hello, I&apos;m Matt,
          </h1>
        </Transition>
        <Transition
          show={onLoad}
          enter="transition-transform duration-1000"
          enterFrom=" translate-x-6 md:translate-x-64"
          enterTo="translate-x-0"
          leave="transition-transform duration-1000"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-6 md:translate-x-64"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold">
            An Aspiring Frontend Engineer!
          </h2>
        </Transition>
      </article>
    </section>
  );
};

export default HomePage;
