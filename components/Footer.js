const Footer = () => {
  return (
    <footer className="h-28 bg-neutral-700">
      <div className="flex w-full h-full flex-col justify-center items-center space-y-1">
        <a
          href="https://github.com/mattwhitson"
          className=" transition-transform ease-in-out duration-200 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <img src="github.png" alt="" className="h-8" />
        </a>
        <p className="text-xs text-[#f7f7f7]">Matthew Whitson | 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
