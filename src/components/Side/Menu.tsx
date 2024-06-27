import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { GiMoon } from "react-icons/gi";
import { Switch } from "../ui/switch";
import { FaFileCode, FaUserGraduate } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import SectionButton from "./components/SectionButton";
import { IoMdHome } from "react-icons/io";
import { customTheme } from "@/layout/RootLayout";

const menuList = [
  {
    title: "Home",
    section: "hero",
    icon: <IoMdHome />,
  },
  {
    title: "My Project",
    section: "myProject",
    icon: <FaFileCode />,
  },
  {
    title: "My Plant",
    section: "myPlant",
    icon: <FaUserGraduate />,
  },
  {
    title: "Case",
    section: "case",
    icon: <FaBriefcase />,
  },
];

// interface IProp {
//   setTheme: ()=>void
// }

const Menu = ({
  setTheme,
  setDark,
}: {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setDark: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [iconDark, setIconDark] = useState<boolean>(false);
  const [showCustomTheme, setShowCustomTheme] = useState("hidden");
  const [sectionName, setSectionName] = useState<string>("hero");
  return (
    <>
      <div
        className={`fixed bg-white dark:bg-dark w-24 h-screen flex justify-center`}
      >
        <div className="my-5">
          <div className="relative flex items-center justify-center my-3">
            {!iconDark && <FiSun className="absolute right-8 z-10" />}
            {iconDark && <GiMoon className="absolute left-[30px] z-10" />}

            <Switch
              onCheckedChange={(e) => {
                if (e === true) {
                  setIconDark(true);
                  setDark("dark");
                } else {
                  // document.body.classList.toggle("dark")
                  setIconDark(false);
                  setDark("");
                }
              }}
            />
          </div>
          <div className="relative flex">
            <b
              className="text-center cursor-pointer dark:text-light"
              onClick={() => setShowCustomTheme("")}
            >
              Custom Theme
            </b>
            <div
              className={`${showCustomTheme} absolute -left-20 w-24 rounded-lg top-0 py-3 bg-white shadow-lg`}
            >
              {customTheme.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setTheme(item.split(" ")[0]);
                    setShowCustomTheme("hidden");
                  }}
                  className={`cursor-pointer w-full flex gap-3 items-center justify-center ${
                    item.split(" ")[2]
                  }`}
                >
                  <b>{item.split(" ")[1]}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 my-2">
            {menuList.map((item, index: number) => (
              <a
                href={`#${item.section}`}
                key={index}
                onClick={() => setSectionName(item.section)}
              >
                <SectionButton sectionId={sectionName} item={item} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
