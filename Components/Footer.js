import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-60 bg-black gap-4 ">
        <div className="h-max flex flex-row items-center justify-center gap-8  ">
          <a
            href="https://www.youtube.com/@CodeWithSunchitDudeja"
            target="_blank"
            className="rounded-full hover:scale-125 bg-white   dark:bg-black hover:border-black hover:border-[2px] transition-all p-2"
          >
            <SiTwitter className="text-3xl" />
          </a>
          <a
            href="https://www.youtube.com/@CodeWithSunchitDudeja"
            target="_blank"
            className="rounded-full hover:scale-125 bg-white dark:bg-black  hover:border-black hover:border-[2px] transition-all p-2"
          >
            <SiGithub className="text-3xl" />
          </a>
          <a
            href="https://www.youtube.com/@CodeWithSunchitDudeja"
            target="_blank"
            className="rounded-full hover:scale-125 bg-white  dark:bg-black  hover:border-black hover:border-[2px] transition-all p-2"
          >
            <SiInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.youtube.com/@CodeWithSunchitDudeja"
            target="_blank"
            className="rounded-full hover:scale-125 bg-white  dark:bg-black  hover:border-black hover:border-[2px] transition-all p-2"
          >
            <FiLinkedin className="text-3xl" />
          </a>
        </div>
        <div>
          <p className=" bg-black text-center text-white text-xs font-normal font-['Source Sans Pro'] ">
            © 2023 Coding Decoded. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;