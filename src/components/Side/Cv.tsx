import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa"
import CvMobile from "./components/CV/CvMobile";

export const FotoProfile = "https://res.cloudinary.com/divsnxhmw/image/upload/v1720275146/Portfolio/Profile/zpsisozrmnemianupedr.jpg"

export const iconsCV = [
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

export const skillsCVFE = [
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
export const skillsCVBE = [
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

interface IProps {
  setShowCvMobile: React.Dispatch<React.SetStateAction<string>>
}

const Cv = ({ setShowCvMobile }: IProps) => {
  const [skills, setSkills] = useState(false);
  const [showCv, setShowCv] = useState<string>("lg:w-52")


  return (
    <>
      <div className={`fixed ${showCv} z-10 w-24 left-0 bg-white dark:bg-dark dark:text-light `}>
        <div className="p-3 bg-white dark:bg-black absolute hidden lg:block -right-7 cursor-pointer top-[450px] rounded-full">
          {showCv === "lg:w-52" ?
            <FaArrowCircleLeft className=" text-first hover:text-second" size={30} onClick={() => {
              setShowCv("lg:w-24")
              setShowCvMobile("w-[5%]")
            }} />
            :
            <FaArrowCircleRight className="text-first hover:text-second" size={30} onClick={() => {
              setShowCv("lg:w-52")
              setShowCvMobile("w-[15%]")
            }} />
          }
        </div>
        <div className={`flex-col h-screen px-8 pt-3 items-center ${showCv === "lg:w-52" ? "lg:hidden flex" : "flex"}`}>
          <CvMobile />
        </div>
        <div className={`flex-col h-screen px-8 pt-3 justify-evenly ${showCv === "lg:w-52" ? "flex" : "hidden"}`}>
          <div className="flex flex-col items-center justify-center gap-2 pb-2 border-b border-gray-200">
            <div>
              <img
                className="object-cover w-20 h-20 bg-gray-300 rounded-full"
                src={FotoProfile}
                alt=""
              />
            </div>
            <b className="text-center">Moh Ryan Khalifatul Huda</b>
            <p>FullStack Developer</p>
            <ul className="flex gap-3 justify-evenly">
              {iconsCV.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li
                    className="p-2 text-sm rounded-full text-textBase bg-first hover:bg-second"
                  >
                    {item.icon}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex justify-between pb-2 text-sm border-b border-gray-200">
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
          <div className="flex justify-center ">
            <Button className="text-textBase">
              Download CV <AiOutlineDownload className="pl-2 text-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;
