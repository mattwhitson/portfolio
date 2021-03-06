import Head from "next/head";
import Particles from "react-tsparticles";
import { particlesConfig } from "../particlesProps";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-roboto">
      <Head>
        <title>Matthew Whitson</title>
        <meta name="description" content="Matt Whitson's portfolio website!" />
        <link rel="icon" href="/portfolio-favicon.png" />
        <meta name="theme-color" content="#171717" />
      </Head>
      <Particles
        className="fixed z-[-1]"
        id="tsparticles"
        options={particlesConfig}
      />
      <HomePage />
      <main className="relative h-full pb-12 w-full bg-neutral-900">
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
