import { SiNestjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpo } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";

export interface ISlider {
  bg_color?: string;
  text_color?: string;
  icon: React.ReactNode;
  position: number;
}

export const LogoSlider = [
  {
    icon: <FaHtml5 />,
    bg_color: "bg-[#dd4b25]",
    text_color: "hover:text-[#dd4b25]",
    position: 1,
  },
  {
    icon: <FaCss3Alt />,
    bg_color: "bg-[#129CD8]",
    text_color: "hover:text-[#129CD8]",
    position: 2,
  },
  {
    icon: <RiTailwindCssFill />,
    bg_color: "bg-blue-400",
    text_color: "hover:text-blue-400",
    position: 3,
  },
  {
    icon: <FaJs />,
    bg_color: "bg-[#ECDA1D]",
    text_color: "hover:text-[#ECDA1D]",
    position: 4,
  },
  {
    icon: <FaNode />,
    bg_color: "bg-green-500",
    text_color: "hover:text-green-500",
    position: 5,
  },
  {
    icon: <SiNestjs />,
    bg_color: "bg-[#D9224C]",
    text_color: "hover:text-[#D9224C]",
    position: 6,
  },
  {
    icon: <RiReactjsFill />,
    bg_color: "bg-[#50BAD6]",
    text_color: "hover:text-[#50BAD6]",
    position: 7,
  },
  {
    icon: <BiLogoPostgresql />,
    bg_color: "bg-[#2F5E8D]",
    text_color: "hover:text-[#2F5E8D]",
    position: 8,
  },
  {
    icon: <SiExpo />,
    bg_color: "bg-[#0F6FB0]",
    text_color: "hover:text-[#0F6FB0]",
    position: 9,
  },
  {
    icon: <TbBrandReactNative />,
    bg_color: "bg-[#5FD3F5]",
    text_color: "hover:text-[#5FD3F5]",
    position: 10,
  },
  {
    icon: <SiTypescript />,
    bg_color: "bg-[#2F74C0]",
    text_color: "hover:text-[#2F74C0]",
    position: 11,
  },
];
