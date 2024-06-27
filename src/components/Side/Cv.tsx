import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";
import { AiOutlineDownload } from "react-icons/ai";

const iconsCV = [
  {
    icon: <FaFacebook />,
    link: "#",
  },
  {
    icon: <FaLinkedin />,
    link: "#",
  },
  {
    icon: <FaDiscord />,
    link: "#",
  },
];

const skillsCVFE = [
  {
    tech: "Html5",
    progress: 55,
  },
  {
    tech: "CSS",
    progress: 45,
  },
  {
    tech: "TailwindCSS",
    progress: 44,
  },
];
const skillsCVBE = [
  {
    tech: "ExpressJs",
    progress: 45,
  },
  {
    tech: "NestJs",
    progress: 35,
  },
  {
    tech: "Prisma dkk",
    progress: 44,
  },
];

const Cv = () => {
  const [skills, setSkills] = useState(false);

  return (
    <>
      <div className="fixed bg-white dark:bg-dark dark:text-light h-screen w-52 pt-3 px-8 flex flex-col justify-evenly">
        <div className="flex flex-col justify-center items-center gap-2 border-b border-gray-200 pb-2">
          <div>
            <img
              className="w-20 h-20 rounded-full bg-gray-300 object-cover"
              src="https://img.id.my-best.com/product_images/5ca3b281da356f4ce888109b36e3e30f.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=bc458338e149647bc1a41d857f98ccce"
              alt=""
            />
          </div>
          <b className="text-center">Moh Ryan Khalifatul Huda</b>
          <p>..... Developer</p>
          <ul className="flex justify-evenly gap-3">
            {iconsCV.map((item, index) => (
              <Link to={item.link} key={index}>
                <li
                  className="text-sm text-textBase
                 p-2 bg-first hover:bg-second rounded-full"
                >
                  {item.icon}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
          <ul>
            <li>Age:</li>
            <li>Residence:</li>
            <li>Freelance:</li>
            <li>Address:</li>
          </ul>
          <ul>
            <li>23</li>
            <li>Jatim</li>
            <li className="text-green-400">Available</li>
            <li>Jember</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <b className="text-lg">Skills</b>
            {skills ? (
              <b onClick={() => setSkills(!skills)} className="cursor-pointer">
                FE
              </b>
            ) : (
              <b onClick={() => setSkills(!skills)} className="cursor-pointer">
                BE
              </b>
            )}
          </div>
          <ul className="flex flex-col gap-4 text-sm">
            {skills ? (
              <>
                {skillsCVFE.map((item, index) => (
                  <li key={index}>
                    <div className="flex justify-between">
                      <span>{item.tech}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} />
                  </li>
                ))}
              </>
            ) : (
              <>
                {skillsCVBE.map((item, index) => (
                  <li key={index}>
                    <div className="flex justify-between">
                      <span>{item.tech}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} />
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <div className="flex justify-center">
          <Button>
            Download CV <AiOutlineDownload className="text-2xl pl-2" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cv;
