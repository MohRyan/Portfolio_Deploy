import Cv from "@/components/Side/Cv";
import Menu from "@/components/Side/Menu";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const customTheme = [
  "theme_default default hover:bg-default ",
  "theme_red red hover:bg-red-500  ",
  "theme_blue blue hover:bg-blue-500 ",
  "theme_yellow yellow hover:bg-yellow-300 ",
  "theme_green green hover:bg-green-500 ",
  "theme_orange orange hover:bg-orange-500 ",
];

const RootLayout = () => {
  const [theme, setTheme] = useState<string>("");
  const [dark, setDark] = useState<string>("");
  const [showCvMobile, setShowCvMobile] = useState<string>("w-[15%]")
  return (
    <>
      <div className={`flex ${theme} ${dark} w-screen justify-center`}>
        <div className={`${showCvMobile}`}>
          <Cv setShowCvMobile={setShowCvMobile} />
        </div>
        <div className="lg:w-[70%] w-[75%]">
          <Outlet />
        </div>
        <div className="lg:w-[6%] w-[15%]">
          <Menu setTheme={setTheme} setDark={setDark} />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
